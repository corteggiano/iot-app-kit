import { ComponentRequest, ComponentUpdateRequest } from '@aws-sdk/client-iottwinmaker';
import { DocumentType } from '@aws-sdk/types';
import { isEmpty } from 'lodash';

import { ISceneNode } from '../../interfaces';
import { NODE_COMPONENT_TYPE_ID, componentTypeToId } from '../../common/entityModelConstants';
import { ISceneComponentInternal, ISceneNodeInternal } from '../../store';
import { SceneNodeRuntimeProperty } from '../../store/internalInterfaces';

import { attachToLayerRequest } from './sceneLayerUtils';
import { parseTagComp } from './tagComponent';
import { parseOverlayComp } from './overlayComponent';

enum NodeComponentProperty {
  Name = 'name',
  TransformPosition = 'transform_position',
  TransformRotation = 'transform_rotation',
  TransformScale = 'transform_scale',
  TransformConstraintSnapToFloor = 'transformConstraint_snapToFloor',
  Properties = 'properties',
}

export const createNodeEntityComponent = (node: ISceneNode, layerId?: string): ComponentRequest => {
  const comp: ComponentRequest = {
    componentTypeId: NODE_COMPONENT_TYPE_ID,
    properties: {
      [NodeComponentProperty.Name]: {
        value: {
          stringValue: node.name ?? 'Node',
        },
      },
    },
  };
  if (node.transform?.position) {
    comp.properties![NodeComponentProperty.TransformPosition] = {
      value: {
        listValue: node.transform.position.map((v) => ({ doubleValue: v })),
      },
    };
  }
  if (node.transform?.rotation) {
    comp.properties![NodeComponentProperty.TransformRotation] = {
      value: {
        listValue: node.transform.rotation.map((v) => ({ doubleValue: v })),
      },
    };
  }
  if (node.transform?.scale) {
    comp.properties![NodeComponentProperty.TransformScale] = {
      value: {
        listValue: node.transform.scale.map((v) => ({ doubleValue: v })),
      },
    };
  }
  if (node.transformConstraint?.snapToFloor !== undefined) {
    comp.properties![NodeComponentProperty.TransformConstraintSnapToFloor] = {
      value: {
        booleanValue: node.transformConstraint.snapToFloor,
      },
    };
  }
  if (layerId) {
    comp.properties = Object.assign(comp.properties!, attachToLayerRequest(layerId));
  }
  if (!isEmpty(node.properties)) {
    const params = {};
    Object.keys(node.properties).forEach((k) => {
      if (Object.values(SceneNodeRuntimeProperty).includes(k as SceneNodeRuntimeProperty)) {
        return;
      }
      params[k] = { stringValue: encodeURI(node.properties![k]) };
    });
    comp.properties![NodeComponentProperty.Properties] = {
      value: {
        mapValue: params,
      },
    };
  }

  return comp;
};

export const updateNodeEntityComponent = (node: ISceneNode, layerId?: string): ComponentUpdateRequest => {
  const request = createNodeEntityComponent(node, layerId);
  return {
    componentTypeId: request.componentTypeId,
    propertyUpdates: request.properties,
  };
};

const parseNodeComponents = (components: DocumentType): ISceneComponentInternal[] => {
  const results: ISceneComponentInternal[] = [];
  if (isEmpty(components) || !(components instanceof Array)) {
    return [];
  }

  components.forEach((comp) => {
    if (!comp) {
      return;
    }
    switch (comp['componentTypeId']) {
      case componentTypeToId.Tag: {
        const tag = parseTagComp(comp);
        if (tag) {
          results.push(tag);
        }
        break;
      }
      case componentTypeToId.DataOverlay: {
        const overlay = parseOverlayComp(comp);
        if (overlay) {
          results.push(overlay);
        }
        break;
      }
      case NODE_COMPONENT_TYPE_ID:
        // Ignore node component
        break;
      default:
        console.warn('Unknown scene component type', comp['componentTypeId']);
        break;
    }
  });

  return results;
};

export const parseNode = (entity: DocumentType, nodeCompo: DocumentType): ISceneNodeInternal | undefined => {
  if (!nodeCompo?.['properties'] || !entity?.['entityId']) {
    return undefined;
  }

  const properties =
    nodeCompo['properties'].find((p) => p['propertyName'] === NodeComponentProperty.Properties)?.propertyValue ?? {};
  Object.keys(properties).forEach((k) => {
    properties[k] = decodeURI(properties[k]);
  });
  const node: ISceneNodeInternal = {
    ref: entity['entityId'],
    childRefs: [],
    name: nodeCompo['properties'].find((p) => p.propertyName === NodeComponentProperty.Name)?.propertyValue ?? 'Node',
    components: parseNodeComponents(entity['components']),
    transform: {
      position: nodeCompo['properties'].find((p) => p['propertyName'] === NodeComponentProperty.TransformPosition)
        ?.propertyValue ?? [0, 0, 0],
      scale: nodeCompo['properties'].find((p) => p['propertyName'] === NodeComponentProperty.TransformScale)
        ?.propertyValue ?? [1, 1, 1],
      rotation: nodeCompo['properties'].find((p) => p['propertyName'] === NodeComponentProperty.TransformRotation)
        ?.propertyValue ?? [0, 0, 0],
    },
    transformConstraint: {
      snapToFloor: nodeCompo['properties'].find(
        (p) => p['propertyName'] === NodeComponentProperty.TransformConstraintSnapToFloor,
      )?.propertyValue,
    },
    properties,
  };

  return node;
};
