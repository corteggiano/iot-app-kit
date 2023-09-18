:robot: I have created a release *beep* *boop*
---


<details><summary>components: 8.0.0</summary>

## [8.0.0](https://github.com/corteggiano/iot-app-kit/compare/components-v7.3.1...components-v8.0.0) (2023-09-18)


### Features

* **composer:** integrate scene viewer with TimeSync viewport ([6c92201](https://github.com/corteggiano/iot-app-kit/commit/6c92201aaa10c453c81cb6bf8ced349c55b47a19))


### Dependencies

* The following workspace dependencies were updated
  * dependencies
    * @iot-app-kit/core bumped from 7.3.1 to 8.0.0
    * @iot-app-kit/related-table bumped from 7.3.1 to 8.0.0
  * devDependencies
    * @iot-app-kit/source-iotsitewise bumped from 7.3.1 to 8.0.0
    * @iot-app-kit/testing-util bumped from 7.3.1 to 8.0.0
    * eslint-config-iot-app-kit bumped from 7.3.1 to 8.0.0
</details>

<details><summary>core: 8.0.0</summary>

## [8.0.0](https://github.com/corteggiano/iot-app-kit/compare/core-v7.3.1...core-v8.0.0) (2023-09-18)


###   BREAKING CHANGES

* aggregation and resolution picker

### Features

* aggregation and resolution picker ([77a53fe](https://github.com/corteggiano/iot-app-kit/commit/77a53feffdb1956707dca5d45f43a1f7ea0c5453))
* **TM-source:** add property value query ([21091d9](https://github.com/corteggiano/iot-app-kit/commit/21091d9e3bb19a2c6181f2eeb1354ce2fa31ca45))


### Bug Fixes

* use isRefreshing to show paginated request ([97d1e5e](https://github.com/corteggiano/iot-app-kit/commit/97d1e5e3ccd5e8f7054d4e965dd7886346020d4c))


### Dependencies

* The following workspace dependencies were updated
  * devDependencies
    * @iot-app-kit/jest-config bumped from 7.3.1 to 8.0.0
    * @iot-app-kit/ts-config bumped from 7.3.1 to 8.0.0
    * eslint-config-iot-app-kit bumped from 7.3.1 to 8.0.0
</details>

<details><summary>core-util: 8.0.0</summary>

## [8.0.0](https://github.com/corteggiano/iot-app-kit/compare/core-util-v7.3.1...core-util-v8.0.0) (2023-09-18)


### Miscellaneous Chores

* **core-util:** Synchronize iot-app-kit versions
</details>

<details><summary>dashboard: 8.0.0</summary>

## [8.0.0](https://github.com/corteggiano/iot-app-kit/compare/dashboard-v7.3.1...dashboard-v8.0.0) (2023-09-18)


###   BREAKING CHANGES

* aggregation and resolution picker

### Features

* aggregation and resolution picker ([77a53fe](https://github.com/corteggiano/iot-app-kit/commit/77a53feffdb1956707dca5d45f43a1f7ea0c5453))
* auto collapse state for both panels ([fc54b1c](https://github.com/corteggiano/iot-app-kit/commit/fc54b1cb71979e48dc5440620577ca8a2adc4be6))
* **dashboard:** add advanced search using knowledge graph to query editor ([8722b33](https://github.com/corteggiano/iot-app-kit/commit/8722b338a919d6fb51b21a861cf7e96e44246dbd))
* **dashboard:** add api for customizing the properties panel ([368ad97](https://github.com/corteggiano/iot-app-kit/commit/368ad974a5fa0e22851918b89b8e3a152165dbe8))
* **dashboard:** add significant digits configuration ([bcc5c51](https://github.com/corteggiano/iot-app-kit/commit/bcc5c51a1732bc785a45ec939fb111f52ae14421))
* **dashboard:** add widget tile ([13573c5](https://github.com/corteggiano/iot-app-kit/commit/13573c59d560e7192159db8751d6818cfebcf531))
* **dashboard:** break out properties sections into tabs ([fb8b685](https://github.com/corteggiano/iot-app-kit/commit/fb8b685f1d6ea8459c40637f12f0cf6ddc75aa55))
* **dashboard:** change dashboard viewport default from 5m to 10m ([803d9a4](https://github.com/corteggiano/iot-app-kit/commit/803d9a4944f6a55cb2e0e9691ddc3e537966c501))
* **dashboard:** line symbol ([bba8e8d](https://github.com/corteggiano/iot-app-kit/commit/bba8e8d392f73b3e52109bad1557cda4ef00221c))
* **dashboard:** rectangle drag and drop ([57b56c8](https://github.com/corteggiano/iot-app-kit/commit/57b56c86b4d9bf856f12a0ed69113e3218ce005b))
* **dashboard:** refactor asset description sdk calls to use tanstack ([f99bcde](https://github.com/corteggiano/iot-app-kit/commit/f99bcde75f3fad7dac82ac657f1a2aca8dbbbc4c))
* **dashboard:** update collapsible side panels ([1495451](https://github.com/corteggiano/iot-app-kit/commit/149545160551174af83ce3ddb2a61f1a61977c94))
* **react-component:** adding config service to toggle echarts ([96d0351](https://github.com/corteggiano/iot-app-kit/commit/96d0351b7e20a728154d3ebfed0efd5205b841bd))
* **react-component:** adding the inital implementation of the trend cursors ([ce37fe2](https://github.com/corteggiano/iot-app-kit/commit/ce37fe21a36f13fe1438c0653eb47992d774b15e))
* **react-components:** add significant digits configuration for charts ([41cba0e](https://github.com/corteggiano/iot-app-kit/commit/41cba0e655ac944889d6f15db56282a30e53997e))
* **react-components:** adding TrendCursor Sync to dashboard ([d046184](https://github.com/corteggiano/iot-app-kit/commit/d046184b836e9cb3670b210eb24c4fd91167b52a))
* **react-components:** base echarts ([bc6ee62](https://github.com/corteggiano/iot-app-kit/commit/bc6ee6250417a7d71f6aaf0692f1a02d4059b8f6))
* **react-components:** feature flag context ([d313682](https://github.com/corteggiano/iot-app-kit/commit/d31368282b9f5882c6f6cef0a66c2c085ee56aff))
* **react-components:** sync echarts viewport ([e04e040](https://github.com/corteggiano/iot-app-kit/commit/e04e04079630361047e82d8564678cd4e5857cdd))
* table widget pagination and sortingdisabled ([b727eae](https://github.com/corteggiano/iot-app-kit/commit/b727eae8364f19f2e997fa0c9275e1f0a947f854))


### Bug Fixes

* **dashboard:** add box sizing reset for dashboard ([712598b](https://github.com/corteggiano/iot-app-kit/commit/712598b13f4c3c81a3d4d8b6609d7bd149c16859))
* **dashboard:** add scss loader to dashboard storybook ([1e8a2a3](https://github.com/corteggiano/iot-app-kit/commit/1e8a2a3ad82228fe016820386c28756bd37259ad))
* **dashboard:** adding a ts module file for supporting svg files ([61ac00d](https://github.com/corteggiano/iot-app-kit/commit/61ac00dba2029a060692fd736616185f07b74bc2))
* **dashboard:** better toolbar ([c0b9cc8](https://github.com/corteggiano/iot-app-kit/commit/c0b9cc8bf135caaa8f5722defba87be65ef06f70))
* **dashboard:** change min widget sizing from 2 to 1 ([d840fc1](https://github.com/corteggiano/iot-app-kit/commit/d840fc1ac8efbe9e79ff5937f22cc3545abfdd0d))
* **dashboard:** editable link ([1675de6](https://github.com/corteggiano/iot-app-kit/commit/1675de6ff50f536b27d6258734fb312f50b40c7b))
* **dashboard:** fixed the flash of graphs on change in query(s) ([45edc69](https://github.com/corteggiano/iot-app-kit/commit/45edc69ae67796ce9566c491a8f39921029ad0a0))
* **react-components:** fixing the viewport and some styling elements ([7d3526e](https://github.com/corteggiano/iot-app-kit/commit/7d3526e34c86b55632a4d5aa0c7029fd1499a48b))
* **react-components:** the dependencies were added to dashboard instead of react-components ([8b2f12f](https://github.com/corteggiano/iot-app-kit/commit/8b2f12fb67a1705ffdb722e02cf8c1ff1ae2ed97))
* **react-components:** updating echarts ux ([ddfc9c8](https://github.com/corteggiano/iot-app-kit/commit/ddfc9c8cc15f32a8c307653daf5d2159918e58b2))
* **react-components:** updating echarts with the fixes founf during bug bash ([9f32c21](https://github.com/corteggiano/iot-app-kit/commit/9f32c21ae53d99ddac718caa520d9e852a25f499))
* **react-component:** updating the calculateTimeStamp method to use ([e0e1f42](https://github.com/corteggiano/iot-app-kit/commit/e0e1f428f012b157938eced89efcd30101f2d7f5))
* resolved table widget column resize issue ([8b6b418](https://github.com/corteggiano/iot-app-kit/commit/8b6b4189601c594ffef9dd6ed915e6ddbf7fa938))
* resolved table widget column resize issue ([08b1993](https://github.com/corteggiano/iot-app-kit/commit/08b19932614978cac915e34a27747f72da78c657))
* use REGION env variable in dashboard testing environment ([c62e68b](https://github.com/corteggiano/iot-app-kit/commit/c62e68bc9181ad2d6995097fb60638f41dc168ab))


### Dependencies

* The following workspace dependencies were updated
  * dependencies
    * @iot-app-kit/components bumped from 7.3.1 to 8.0.0
    * @iot-app-kit/core bumped from 7.3.1 to 8.0.0
    * @iot-app-kit/core-util bumped from 7.3.1 to 8.0.0
    * @iot-app-kit/react-components bumped from 7.3.1 to 8.0.0
    * @iot-app-kit/source-iotsitewise bumped from 7.3.1 to 8.0.0
  * devDependencies
    * @iot-app-kit/jest-config bumped from 7.3.1 to 8.0.0
    * @iot-app-kit/testing-util bumped from 7.3.1 to 8.0.0
    * @iot-app-kit/ts-config bumped from 7.3.1 to 8.0.0
    * eslint-config-iot-app-kit bumped from 7.3.1 to 8.0.0
</details>

<details><summary>jest-config: 8.0.0</summary>

## [8.0.0](https://github.com/corteggiano/iot-app-kit/compare/jest-config-v7.3.1...jest-config-v8.0.0) (2023-09-18)


### Features

* **react-component:** adding drag and delete to TC ([7c6a017](https://github.com/corteggiano/iot-app-kit/commit/7c6a017eaad9fe4c2f6881adb7e807f4b154f93c))
</details>

<details><summary>react-components: 8.0.0</summary>

## [8.0.0](https://github.com/corteggiano/iot-app-kit/compare/react-components-v7.3.1...react-components-v8.0.0) (2023-09-18)


###   BREAKING CHANGES

* aggregation and resolution picker

### Features

* **3dkg:** 3dkg release ([7c01c91](https://github.com/corteggiano/iot-app-kit/commit/7c01c911936314b4b99614c367e2bc6f6522a024))
* aggregation and resolution picker ([77a53fe](https://github.com/corteggiano/iot-app-kit/commit/77a53feffdb1956707dca5d45f43a1f7ea0c5453))
* **dashboard:** add advanced search using knowledge graph to query editor ([8722b33](https://github.com/corteggiano/iot-app-kit/commit/8722b338a919d6fb51b21a861cf7e96e44246dbd))
* **dashboard:** rectangle drag and drop ([57b56c8](https://github.com/corteggiano/iot-app-kit/commit/57b56c86b4d9bf856f12a0ed69113e3218ce005b))
* **echarts:** allow scroll left and right ([5d2341e](https://github.com/corteggiano/iot-app-kit/commit/5d2341e71f531556ac8147e1a0742233992ed82d))
* **echarts:** threshold support ([2d7ccfe](https://github.com/corteggiano/iot-app-kit/commit/2d7ccfe6695070126b60f352733ef1512c966984))
* **KG Component:** event modeling ([b918237](https://github.com/corteggiano/iot-app-kit/commit/b918237e82738cf1dbc61f95c303881b65166abb))
* **Knowledge Graph:** adding clear and render graph results events ([5479a51](https://github.com/corteggiano/iot-app-kit/commit/5479a51b85574d4c751c8e0aba40fa54e76d7504))
* **Knowledge Graph:** adding KG parent component, search and explore logic ([95cc307](https://github.com/corteggiano/iot-app-kit/commit/95cc307d6fcf2592d376830283069ddce463d0cf))
* **react-component:** adding config service to toggle echarts ([96d0351](https://github.com/corteggiano/iot-app-kit/commit/96d0351b7e20a728154d3ebfed0efd5205b841bd))
* **react-component:** adding context menu per chart ([a368eb9](https://github.com/corteggiano/iot-app-kit/commit/a368eb99b230f2a5a8bb39d7c0bc52e42ae9f5ad))
* **react-component:** adding drag and delete to TC ([7c6a017](https://github.com/corteggiano/iot-app-kit/commit/7c6a017eaad9fe4c2f6881adb7e807f4b154f93c))
* **react-component:** adding resizability for Charts components ([3ae7f56](https://github.com/corteggiano/iot-app-kit/commit/3ae7f568a30947782c2d29ecf72eacf3df31d18b))
* **react-component:** adding sorting ability for the chart legends ([ca330eb](https://github.com/corteggiano/iot-app-kit/commit/ca330eb711923a32531871b714c2252fe31850ae))
* **react-component:** adding TC markers ([4105adb](https://github.com/corteggiano/iot-app-kit/commit/4105adb218fbf05b6145348d660fc24b2cec0b66))
* **react-component:** adding the inital implementation of the trend cursors ([ce37fe2](https://github.com/corteggiano/iot-app-kit/commit/ce37fe21a36f13fe1438c0653eb47992d774b15e))
* **react-component:** adding trendcursor sync component ([52d6033](https://github.com/corteggiano/iot-app-kit/commit/52d6033337937c5b7b1774d5a5b04907e126df60))
* **react-components:** add a sitewise connected chart story ([b66de3b](https://github.com/corteggiano/iot-app-kit/commit/b66de3b4d87ac2a3157c6cae176a216dff1ceb92))
* **react-components:** add chart component with updated api ([bbbc55f](https://github.com/corteggiano/iot-app-kit/commit/bbbc55fbeeb12215be917ffc5147c5181ada5fec))
* **react-components:** add menu component ([cdd196e](https://github.com/corteggiano/iot-app-kit/commit/cdd196ebcf42b5ddbdc34005fe4b54ae24767609))
* **react-components:** add multiple y axis legend ([79023c0](https://github.com/corteggiano/iot-app-kit/commit/79023c025e09e3ad485c84ad1d54b0ed2e0e0589))
* **react-components:** add significant digits configuration for charts ([41cba0e](https://github.com/corteggiano/iot-app-kit/commit/41cba0e655ac944889d6f15db56282a30e53997e))
* **react-components:** add time selection component to react components ([e99f301](https://github.com/corteggiano/iot-app-kit/commit/e99f3011a063c861cc22264687a9f3d5d9d56841))
* **react-components:** adding resizing to trend cursors ([400189a](https://github.com/corteggiano/iot-app-kit/commit/400189a221f16123ce193222eacd2583ea25360a))
* **react-components:** adding TrendCursor Sync to dashboard ([d046184](https://github.com/corteggiano/iot-app-kit/commit/d046184b836e9cb3670b210eb24c4fd91167b52a))
* **react-components:** base echarts ([bc6ee62](https://github.com/corteggiano/iot-app-kit/commit/bc6ee6250417a7d71f6aaf0692f1a02d4059b8f6))
* **react-components:** feature flag context ([d313682](https://github.com/corteggiano/iot-app-kit/commit/d31368282b9f5882c6f6cef0a66c2c085ee56aff))
* **react-components:** supporting live mode in echarts ([cdf1caa](https://github.com/corteggiano/iot-app-kit/commit/cdf1caab9399cc770c91c3fd40ffde23e7795ab5))
* **react-components:** sync echarts viewport ([e04e040](https://github.com/corteggiano/iot-app-kit/commit/e04e04079630361047e82d8564678cd4e5857cdd))
* **SkinVisualization:** enable default style for visualization and allow overrides ([6240195](https://github.com/corteggiano/iot-app-kit/commit/624019522a940bc9cf5c69253156db871576302d))
* table widget pagination and sortingdisabled ([b727eae](https://github.com/corteggiano/iot-app-kit/commit/b727eae8364f19f2e997fa0c9275e1f0a947f854))
* **Vite:** migrate example app to vite ([d2e65be](https://github.com/corteggiano/iot-app-kit/commit/d2e65bed32dc3c470b52d418dacb61610c16ab5a))


### Bug Fixes

* **3DKG:** fix height flexibility for KG component ([f9943ce](https://github.com/corteggiano/iot-app-kit/commit/f9943cee4741da7b5fc2f11f67a429424c2d88b7))
* **CSS-Loader:** updated sass-loader & fixed style ([aee4abc](https://github.com/corteggiano/iot-app-kit/commit/aee4abcd22617cd1b28641711a4be2d1bab4e252))
* **dashboard:** fixed the flash of graphs on change in query(s) ([45edc69](https://github.com/corteggiano/iot-app-kit/commit/45edc69ae67796ce9566c491a8f39921029ad0a0))
* graph css not distributed correctly ([d7b2717](https://github.com/corteggiano/iot-app-kit/commit/d7b2717647507533bfeda81774c44a3c5727e15c))
* **KG Component:** ux review changes ([9133094](https://github.com/corteggiano/iot-app-kit/commit/9133094b7352676277e951dda2c92cb0db566488))
* **knowledge-graph:** fix node to node selection and layout adjustment ([98df518](https://github.com/corteggiano/iot-app-kit/commit/98df518f25cc3a15254917520a1750d013fc2984))
* **react-component:** removing the dependency of the yMin and Ymax and ([9360fe4](https://github.com/corteggiano/iot-app-kit/commit/9360fe42e081263ccd1896f47fb5d8a7ba6b1d0f))
* **react-component:** removing transition animation for trend cursors ([5e84d15](https://github.com/corteggiano/iot-app-kit/commit/5e84d15fcecb7ee0e1f242fd0f1ce47960818696))
* **react-components:** add memoization for chart reactivity and refactor echarts hook ([128f5b0](https://github.com/corteggiano/iot-app-kit/commit/128f5b0c2f8a1c164241ef216d5d489d9d69164c))
* **react-components:** echarts resize drag fix ([19ccc7e](https://github.com/corteggiano/iot-app-kit/commit/19ccc7ee4569aea891b43883a8ba1dedf3ac4fc9))
* **react-components:** ensure provider is unsubscribed correctly ([2db74d2](https://github.com/corteggiano/iot-app-kit/commit/2db74d2d51f1104478540528cb4be982c4afc351))
* **react-components:** fixing TCs on data zoom ([379525c](https://github.com/corteggiano/iot-app-kit/commit/379525cd1246061398ff8a113963b968466ae11a))
* **react-components:** fixing the duplicate yAxis values ([60073ef](https://github.com/corteggiano/iot-app-kit/commit/60073ef7ea4e1167218c8cdecd021bc677d5cc66))
* **react-components:** fixing the viewport and some styling elements ([7d3526e](https://github.com/corteggiano/iot-app-kit/commit/7d3526e34c86b55632a4d5aa0c7029fd1499a48b))
* **react-components:** need stop propagation in start and end of resize event ([30e9901](https://github.com/corteggiano/iot-app-kit/commit/30e99010bc57e48040ddcac8c41546e745a5a3f9))
* **react-components:** the dependencies were added to dashboard instead of react-components ([8b2f12f](https://github.com/corteggiano/iot-app-kit/commit/8b2f12fb67a1705ffdb722e02cf8c1ff1ae2ed97))
* **react-components:** updating echarts ux ([ddfc9c8](https://github.com/corteggiano/iot-app-kit/commit/ddfc9c8cc15f32a8c307653daf5d2159918e58b2))
* **react-components:** updating echarts with the fixes founf during bug bash ([9f32c21](https://github.com/corteggiano/iot-app-kit/commit/9f32c21ae53d99ddac718caa520d9e852a25f499))
* **react-component:** updating the calculateTimeStamp method to use ([e0e1f42](https://github.com/corteggiano/iot-app-kit/commit/e0e1f428f012b157938eced89efcd30101f2d7f5))
* **react-component:** updating the sytling and adding some visual ques for the trend cursors ([dc50a2c](https://github.com/corteggiano/iot-app-kit/commit/dc50a2c8c04167f1137deec350d735847d6d233a))
* **scene composer:** refactoring video player to work with react 18 updates ([c177802](https://github.com/corteggiano/iot-app-kit/commit/c1778025babf75d89d74c1b355f54e46f2e740be))


### Dependencies

* The following workspace dependencies were updated
  * dependencies
    * @iot-app-kit/components bumped from 7.3.1 to 8.0.0
    * @iot-app-kit/core bumped from 7.3.1 to 8.0.0
    * @iot-app-kit/core-util bumped from 7.3.1 to 8.0.0
    * @iot-app-kit/source-iottwinmaker bumped from 7.3.1 to 8.0.0
  * devDependencies
    * @iot-app-kit/jest-config bumped from 7.3.1 to 8.0.0
    * @iot-app-kit/source-iotsitewise bumped from 7.3.1 to 8.0.0
    * @iot-app-kit/testing-util bumped from 7.3.1 to 8.0.0
    * @iot-app-kit/ts-config bumped from 7.3.1 to 8.0.0
    * eslint-config-iot-app-kit bumped from 7.3.1 to 8.0.0
</details>

<details><summary>related-table: 8.0.0</summary>

## [8.0.0](https://github.com/corteggiano/iot-app-kit/compare/related-table-v7.3.1...related-table-v8.0.0) (2023-09-18)


### Features

* **composer:** integrate scene viewer with TimeSync viewport ([6c92201](https://github.com/corteggiano/iot-app-kit/commit/6c92201aaa10c453c81cb6bf8ced349c55b47a19))


### Dependencies

* The following workspace dependencies were updated
  * devDependencies
    * @iot-app-kit/jest-config bumped from 7.3.1 to 8.0.0
    * @iot-app-kit/ts-config bumped from 7.3.1 to 8.0.0
    * eslint-config-iot-app-kit bumped from 7.3.1 to 8.0.0
</details>

<details><summary>scene-composer: 8.0.0</summary>

## [8.0.0](https://github.com/corteggiano/iot-app-kit/compare/scene-composer-v7.3.1...scene-composer-v8.0.0) (2023-09-18)


###   BREAKING CHANGES

* **composer:** use binding provider from TM-source

### Features

* **3D Knowledge Graph:** add scene node highlighting ([ef5c71c](https://github.com/corteggiano/iot-app-kit/commit/ef5c71c7d54f81c85b61f4a10847957669c1bdfb))
* **3D Knowledge Graph:** create function for duplicate code ([4c239d8](https://github.com/corteggiano/iot-app-kit/commit/4c239d85211f2609fc5f312a3c725c881cd187f5))
* **3D Knowledge Graph:** fix lint after rebase ([e016ff7](https://github.com/corteggiano/iot-app-kit/commit/e016ff747a156d48043ec9ed5b1aa2cfbb8b58a2))
* **3D Knowledge Graph:** fix type import ([e1edc38](https://github.com/corteggiano/iot-app-kit/commit/e1edc38905c5cc299d207568697b1d099791df6b))
* **3D Knowledge Graph:** improve unit tests ([11cd450](https://github.com/corteggiano/iot-app-kit/commit/11cd45022198ed4b1f69623080237617557f2136))
* **3D Knowledge Graph:** improve useStore usage and unit tests ([f10ffb2](https://github.com/corteggiano/iot-app-kit/commit/f10ffb2a72a1e5cb3bf1dbf9f1e0bc2e9fdd35d9))
* **3D knowledge Graph:** selecting entity binding triggers camera movement ([f122f1a](https://github.com/corteggiano/iot-app-kit/commit/f122f1a3a7d7af14060099263208801af3738ac3))
* **3D Knowledge Graph:** update DataBinding to EntityBinding ([ca10d1b](https://github.com/corteggiano/iot-app-kit/commit/ca10d1b3319f8c10b7239080310e4b0ad4244775))
* **3D Knowledge Graph:** use updated entity binding definition ([97d6d91](https://github.com/corteggiano/iot-app-kit/commit/97d6d9104fb9e28dc23b1c6850b43f463a0fcb17))
* **3dkg:** 3dkg release ([7c01c91](https://github.com/corteggiano/iot-app-kit/commit/7c01c911936314b4b99614c367e2bc6f6522a024))
* **3dkg:** added 3dkg changes for entity data binding ([4db11a6](https://github.com/corteggiano/iot-app-kit/commit/4db11a63a6fb1ef2b3dd1cc5682a64e1417b12da))
* **composer:** add hook to convert data bindings to queries ([1e68022](https://github.com/corteggiano/iot-app-kit/commit/1e6802206312926efbbf2e15fd48379afbfc4cd9))
* **composer:** auto query for indicator and overlay ([b597c6f](https://github.com/corteggiano/iot-app-kit/commit/b597c6f7606ead54749e93e0be2436430155b634))
* **composer:** auto query support for Model Shader ([ff0bbe3](https://github.com/corteggiano/iot-app-kit/commit/ff0bbe3a9cb1f6c8a91cf6c4f531b1811eee076c))
* **composer:** implement useBindingData and integrate to Tag ([e694433](https://github.com/corteggiano/iot-app-kit/commit/e6944332e8fcc516ecdd3b6978725691a089f1ca))
* **composer:** integrate scene viewer with TimeSync viewport ([6c92201](https://github.com/corteggiano/iot-app-kit/commit/6c92201aaa10c453c81cb6bf8ced349c55b47a19))
* **composer:** render tags from layer ([d9c5191](https://github.com/corteggiano/iot-app-kit/commit/d9c519114d3e39c3913eb32b23984f8204b756d8))
* **composer:** support enhanced editing in Matterport scene ([933deb7](https://github.com/corteggiano/iot-app-kit/commit/933deb752d11ab9269b48eccff9348c771f22019))
* **composer:** support sync matterport tag as entities ([7db178a](https://github.com/corteggiano/iot-app-kit/commit/7db178a4aee74cbd299dc115c7cf3786dc376800))
* **composer:** use binding provider from TM-source ([61f6a54](https://github.com/corteggiano/iot-app-kit/commit/61f6a5456aae9cb2ae826e3c2d700e0bba69c6af))
* **dynamic scenes:** update entities using dynamic scenes ([8eee582](https://github.com/corteggiano/iot-app-kit/commit/8eee582e039a5cb2a3e25c81f822a4ecca95672c))
* **first Person:** proof of using pointer lock for a first person view ([391eddd](https://github.com/corteggiano/iot-app-kit/commit/391edddd5ab3c56be2e394aec06346dfbc29b776))
* fix lint error for scene composer ([924547f](https://github.com/corteggiano/iot-app-kit/commit/924547f788f260efa3cd39d36ede79b6c00f4f23))
* **propertyName:** add copy button and textarea ([7c0eaf4](https://github.com/corteggiano/iot-app-kit/commit/7c0eaf432e40e25a5319a29e7546442d81e8c3dc))
* **scene composer:** add unit test for AnchorWidget onClickWidget event ([07f0987](https://github.com/corteggiano/iot-app-kit/commit/07f0987cd5effaafbc20e5936800bb447a244874))
* **scene composer:** added feature flag for tagstyle feature ([53a66ff](https://github.com/corteggiano/iot-app-kit/commit/53a66ffbdf0805c2ea6023f1903dbc117ca9d721))
* **scene composer:** added icon picker changes ([8ca53b8](https://github.com/corteggiano/iot-app-kit/commit/8ca53b8552f9eb09f107ea43d983a6b47f19fa88))
* **scene composer:** color picker bug fixes ([f44b838](https://github.com/corteggiano/iot-app-kit/commit/f44b838198165f60722bd83f4e4ae42c185e7146))
* **scene composer:** color picker changes ([0138b0a](https://github.com/corteggiano/iot-app-kit/commit/0138b0adb20039e77dc4ac0f838a50d742d24339))
* **scene composer:** entity data binding UI changes and unit tests ([fc17202](https://github.com/corteggiano/iot-app-kit/commit/fc17202c73a28a8670a8e4bc028eee86ac1a4ed1))
* **scene composer:** entity data binding UI changes and unit tests ([f1f81b8](https://github.com/corteggiano/iot-app-kit/commit/f1f81b8e9d11734836582071d4583113af5510a2))
* **scene composer:** fix autosuggestvalue issues in ValueDataBindingBuilder ([0f32e73](https://github.com/corteggiano/iot-app-kit/commit/0f32e7367f01b09d0f81eaf7580e770fcf523a2f))
* **scene composer:** fixed entity data binding data format ([64e33fa](https://github.com/corteggiano/iot-app-kit/commit/64e33fa582512868a74d1cafad1a0d734065878c))
* **scene composer:** fixed entity search bug using free text ([7417c15](https://github.com/corteggiano/iot-app-kit/commit/7417c15f09b3b7b2c1994d1ee13aeb98e8506779))
* **scene composer:** rule icon using color picker ([f1519c4](https://github.com/corteggiano/iot-app-kit/commit/f1519c4ec94c598a83825f85a3dcd00e87747e3f))
* **scene-composer:** added back animation scene model component with changes ([39f14cd](https://github.com/corteggiano/iot-app-kit/commit/39f14cd0d0f571e9c4bbc04958baecd4530d04f5))
* **scene-composer:** added comment to explain scene object fetching ([39f14cd](https://github.com/corteggiano/iot-app-kit/commit/39f14cd0d0f571e9c4bbc04958baecd4530d04f5))
* **scene-composer:** added internationalization for animation viewstate ([39f14cd](https://github.com/corteggiano/iot-app-kit/commit/39f14cd0d0f571e9c4bbc04958baecd4530d04f5))
* **scene-composer:** added knowncomponent type to condition for adding an animation object ([39f14cd](https://github.com/corteggiano/iot-app-kit/commit/39f14cd0d0f571e9c4bbc04958baecd4530d04f5))
* **scene-composer:** addressed changes to databinding in the add component menu ([39f14cd](https://github.com/corteggiano/iot-app-kit/commit/39f14cd0d0f571e9c4bbc04958baecd4530d04f5))
* **scene-composer:** addressed more changes to databinding in the add component menu ([39f14cd](https://github.com/corteggiano/iot-app-kit/commit/39f14cd0d0f571e9c4bbc04958baecd4530d04f5))
* **scene-composer:** fixed tests ([39f14cd](https://github.com/corteggiano/iot-app-kit/commit/39f14cd0d0f571e9c4bbc04958baecd4530d04f5))
* **scene-composer:** fixed use effect in animationeditor to prevent extra fire ([39f14cd](https://github.com/corteggiano/iot-app-kit/commit/39f14cd0d0f571e9c4bbc04958baecd4530d04f5))
* **scene-composer:** got rid of magic string and replaced it with a const ([39f14cd](https://github.com/corteggiano/iot-app-kit/commit/39f14cd0d0f571e9c4bbc04958baecd4530d04f5))
* **scene-composer:** initial implementation of animations ([39f14cd](https://github.com/corteggiano/iot-app-kit/commit/39f14cd0d0f571e9c4bbc04958baecd4530d04f5))
* **scene-composer:** minor cleanup ([39f14cd](https://github.com/corteggiano/iot-app-kit/commit/39f14cd0d0f571e9c4bbc04958baecd4530d04f5))
* **scene-composer:** refactored addObject menu for animations ([39f14cd](https://github.com/corteggiano/iot-app-kit/commit/39f14cd0d0f571e9c4bbc04958baecd4530d04f5))
* **scene-composer:** refactored AnimationComponent test ([39f14cd](https://github.com/corteggiano/iot-app-kit/commit/39f14cd0d0f571e9c4bbc04958baecd4530d04f5))
* **scene-composer:** refactored tests and animationComponentEditor ([39f14cd](https://github.com/corteggiano/iot-app-kit/commit/39f14cd0d0f571e9c4bbc04958baecd4530d04f5))
* **scene-composer:** refactored to address github feedback ([39f14cd](https://github.com/corteggiano/iot-app-kit/commit/39f14cd0d0f571e9c4bbc04958baecd4530d04f5))
* **scene-composer:** removed changes to tag component ([39f14cd](https://github.com/corteggiano/iot-app-kit/commit/39f14cd0d0f571e9c4bbc04958baecd4530d04f5))
* **scene-composer:** removed global variable from animationcomponent ([39f14cd](https://github.com/corteggiano/iot-app-kit/commit/39f14cd0d0f571e9c4bbc04958baecd4530d04f5))
* **scene-composer:** removed unnecessary dependency ([39f14cd](https://github.com/corteggiano/iot-app-kit/commit/39f14cd0d0f571e9c4bbc04958baecd4530d04f5))
* **scene-composer:** removed unnecessary imports ([39f14cd](https://github.com/corteggiano/iot-app-kit/commit/39f14cd0d0f571e9c4bbc04958baecd4530d04f5))
* **scene-composer:** renamed animationupdater to animationcomponenteditor for consistency ([39f14cd](https://github.com/corteggiano/iot-app-kit/commit/39f14cd0d0f571e9c4bbc04958baecd4530d04f5))
* **scene-composer:** reverted package-lock.json ([39f14cd](https://github.com/corteggiano/iot-app-kit/commit/39f14cd0d0f571e9c4bbc04958baecd4530d04f5))
* **scene-composer:** updated us.json ([39f14cd](https://github.com/corteggiano/iot-app-kit/commit/39f14cd0d0f571e9c4bbc04958baecd4530d04f5))
* **TM-source:** add entity APIs to SceneMetadataModule ([1a91084](https://github.com/corteggiano/iot-app-kit/commit/1a910844692aa30bbd4b9d1920d415378bcad130))
* **TM-source:** add entity data binding provider ([d1c459d](https://github.com/corteggiano/iot-app-kit/commit/d1c459d4e897171922d6821da01dcbae6fd000da))
* **TM-source:** add property value query ([21091d9](https://github.com/corteggiano/iot-app-kit/commit/21091d9e3bb19a2c6181f2eeb1354ce2fa31ca45))
* **TM-source:** flag static property data binding ([eeeaecd](https://github.com/corteggiano/iot-app-kit/commit/eeeaecdadd55977633ae884607e2f4e56e467044))


### Bug Fixes

* **composer:** add new translations ([de7249a](https://github.com/corteggiano/iot-app-kit/commit/de7249a8a920e1c43faeda4fd94fb57e9d0fc9f3))
* **composer:** associate inputs to labels ([8b64f9a](https://github.com/corteggiano/iot-app-kit/commit/8b64f9aa38761ed684be8b9088a8b7edd6bb0681))
* **composer:** click events for tag and overlay ([2bf7b13](https://github.com/corteggiano/iot-app-kit/commit/2bf7b13fc2eccc1206eb9455d372d84c0a886915))
* **composer:** click on overlay causing camera to follow mouse ([6cbd5f5](https://github.com/corteggiano/iot-app-kit/commit/6cbd5f5d53cf8b58ba5d4d7536acd9acd6ac7ad1))
* **composer:** close overlay auto select attached tag ([5a52ae1](https://github.com/corteggiano/iot-app-kit/commit/5a52ae18e4d37135570765a12306bbece3655eb8))
* **composer:** error handling for Matterport scene ([24ca493](https://github.com/corteggiano/iot-app-kit/commit/24ca4932457f4605f05af98bb13294143d15371a))
* **composer:** error when switching motion indicator appearance ([c51f135](https://github.com/corteggiano/iot-app-kit/commit/c51f13530b36c8a7e1e17d8ea65c4bec515fb16d))
* **composer:** fix infinite storybook component update ([40fab0a](https://github.com/corteggiano/iot-app-kit/commit/40fab0a96bf1a0396fa0a36aa67c059ed8570cfc))
* **composer:** fix issue displaying 0 in overlay ([a0bc01d](https://github.com/corteggiano/iot-app-kit/commit/a0bc01dfe327509345ec74a61149a6a2d6e48a6a))
* **composer:** fix warning and cached onChange ([5a2c182](https://github.com/corteggiano/iot-app-kit/commit/5a2c1824736bfdd05d1dd1925da8a0408c7ca860))
* **composer:** matterport tag sync tag style under flag ([83334ce](https://github.com/corteggiano/iot-app-kit/commit/83334ce21a089ecff46c86ddfb320f1bafe6011d))
* **composer:** unsubscribe to queries when unmounting ([15fe82e](https://github.com/corteggiano/iot-app-kit/commit/15fe82edf847cf024ab8e987ff513d4726cb2138))
* **CSS-Loader:** updated sass-loader & fixed style ([aee4abc](https://github.com/corteggiano/iot-app-kit/commit/aee4abcd22617cd1b28641711a4be2d1bab4e252))
* **data overlay:** add onWidgetClick and onSelectionChange event support to data overlays ([b3f4f9d](https://github.com/corteggiano/iot-app-kit/commit/b3f4f9d33e61190933323f283fe0fe0552ab0384))
* **matterport:** fix zoom to tag ([49a04f8](https://github.com/corteggiano/iot-app-kit/commit/49a04f81bc464d20798f219f77f325bde74ad1f6))
* **scene composer:** cleanup for polaris css imports & moving interface to component file ([d244eb5](https://github.com/corteggiano/iot-app-kit/commit/d244eb525a3b2ae8862affa0141673351fd850ee))
* **scene composer:** fix for broken rule panel ([c5e071d](https://github.com/corteggiano/iot-app-kit/commit/c5e071d6c5c0e73eaec3e47a98e6d3e3f0cc7dc3))
* **scene composer:** fix for missing grid ([2a4c4c8](https://github.com/corteggiano/iot-app-kit/commit/2a4c4c8b194a2eceebe73dc87d24215836be4a99))
* **scene composer:** fix overlay arrow clickable space ([4cae31f](https://github.com/corteggiano/iot-app-kit/commit/4cae31fb04d38852ed667ab5620d4920cfd83769))
* **scene composer:** fix spacing issue between elements ([b65ebdc](https://github.com/corteggiano/iot-app-kit/commit/b65ebdc3fecd4911a6e5fbc664d1d0bdf5524ebe))
* **scene composer:** modifying auto collapse to only apply to viewer ([aaf6338](https://github.com/corteggiano/iot-app-kit/commit/aaf63384b7d24b731a76fec10b8372110173470e))
* **scene composer:** removing custom grid line colors ([632f7a2](https://github.com/corteggiano/iot-app-kit/commit/632f7a210a80281b1d3c53b0a5de168f8cae9d10))
* **scene composer:** reverting breaking changes from dependabot & setting up ignores ([831d1d7](https://github.com/corteggiano/iot-app-kit/commit/831d1d76e8f7f36bd8129eaa7491a33516a57b1c))
* **scene composer:** sets up refs to track visibility of data overlay & parent ([fad2208](https://github.com/corteggiano/iot-app-kit/commit/fad22087312570641809ed4b1662ae053a809f02))
* **scene tags:** fix anchor stems not triggering onWidgetClick ([6945512](https://github.com/corteggiano/iot-app-kit/commit/6945512eadbdd8d8bc09977ecce7511fbf136311))
* **scene-composer:** fix ability to click on tags, revert raycaster disable on scroll ([caed238](https://github.com/corteggiano/iot-app-kit/commit/caed238ed12da29bd487caf44b895ce7f7f024bf))
* **scene-composer:** update raycaster in OrbitControls, ignore undefined faces, disable on scroll ([011464e](https://github.com/corteggiano/iot-app-kit/commit/011464e702f46b9237b8df1226fa862c073605c0))
* **Tag style:** custom color to support icon rules ([dd3bbee](https://github.com/corteggiano/iot-app-kit/commit/dd3bbee9622eb0bda3a29ab28b920b6d798b4cb2))
* **tools-iottwinmaker:** update dashboard role to include execute query api ([b63d053](https://github.com/corteggiano/iot-app-kit/commit/b63d0537ce247724d0dd73d8d0d1ffba20e0ab5a))
* use isRefreshing to show paginated request ([97d1e5e](https://github.com/corteggiano/iot-app-kit/commit/97d1e5e3ccd5e8f7054d4e965dd7886346020d4c))


### Dependencies

* The following workspace dependencies were updated
  * dependencies
    * @iot-app-kit/core bumped from 7.3.1 to 8.0.0
    * @iot-app-kit/react-components bumped from 7.3.1 to 8.0.0
    * @iot-app-kit/related-table bumped from 7.3.1 to 8.0.0
    * @iot-app-kit/source-iottwinmaker bumped from 7.3.1 to 8.0.0
  * devDependencies
    * eslint-config-iot-app-kit bumped from 7.3.1 to 8.0.0
</details>

<details><summary>source-iotsitewise: 8.0.0</summary>

## [8.0.0](https://github.com/corteggiano/iot-app-kit/compare/source-iotsitewise-v7.3.1...source-iotsitewise-v8.0.0) (2023-09-18)


###   BREAKING CHANGES

* aggregation and resolution picker

### Features

* aggregation and resolution picker ([77a53fe](https://github.com/corteggiano/iot-app-kit/commit/77a53feffdb1956707dca5d45f43a1f7ea0c5453))


### Dependencies

* The following workspace dependencies were updated
  * dependencies
    * @iot-app-kit/core bumped from 7.3.1 to 8.0.0
    * @iot-app-kit/core-util bumped from 7.3.1 to 8.0.0
  * devDependencies
    * @iot-app-kit/jest-config bumped from 7.3.1 to 8.0.0
    * @iot-app-kit/testing-util bumped from 7.3.1 to 8.0.0
    * @iot-app-kit/ts-config bumped from 7.3.1 to 8.0.0
    * eslint-config-iot-app-kit bumped from 7.3.1 to 8.0.0
</details>

<details><summary>source-iottwinmaker: 8.0.0</summary>

## [8.0.0](https://github.com/corteggiano/iot-app-kit/compare/source-iottwinmaker-v7.3.1...source-iottwinmaker-v8.0.0) (2023-09-18)


###   BREAKING CHANGES

* **composer:** use binding provider from TM-source
* aggregation and resolution picker

### Features

* aggregation and resolution picker ([77a53fe](https://github.com/corteggiano/iot-app-kit/commit/77a53feffdb1956707dca5d45f43a1f7ea0c5453))
* **composer:** implement useBindingData and integrate to Tag ([e694433](https://github.com/corteggiano/iot-app-kit/commit/e6944332e8fcc516ecdd3b6978725691a089f1ca))
* **composer:** render tags from layer ([d9c5191](https://github.com/corteggiano/iot-app-kit/commit/d9c519114d3e39c3913eb32b23984f8204b756d8))
* **composer:** use binding provider from TM-source ([61f6a54](https://github.com/corteggiano/iot-app-kit/commit/61f6a5456aae9cb2ae826e3c2d700e0bba69c6af))
* **TM-source:** add entity APIs to SceneMetadataModule ([1a91084](https://github.com/corteggiano/iot-app-kit/commit/1a910844692aa30bbd4b9d1920d415378bcad130))
* **TM-source:** add entity data binding provider ([d1c459d](https://github.com/corteggiano/iot-app-kit/commit/d1c459d4e897171922d6821da01dcbae6fd000da))
* **TM-source:** add property value query ([21091d9](https://github.com/corteggiano/iot-app-kit/commit/21091d9e3bb19a2c6181f2eeb1354ce2fa31ca45))
* **TM-source:** flag static property data binding ([eeeaecd](https://github.com/corteggiano/iot-app-kit/commit/eeeaecdadd55977633ae884607e2f4e56e467044))
* **TM-source:** use Tanstack query to cache requests ([0d87068](https://github.com/corteggiano/iot-app-kit/commit/0d870684b8fa61e2e2a6d3afc5d0f4dd70fad9a3))


### Bug Fixes

* **composer:** error handling for Matterport scene ([24ca493](https://github.com/corteggiano/iot-app-kit/commit/24ca4932457f4605f05af98bb13294143d15371a))
* **TM-source:** fix tanstack query import ([3bc704f](https://github.com/corteggiano/iot-app-kit/commit/3bc704fa4ccbf3a74baa8e575e0ac5bc7ff4cf87))
* use isRefreshing to show paginated request ([97d1e5e](https://github.com/corteggiano/iot-app-kit/commit/97d1e5e3ccd5e8f7054d4e965dd7886346020d4c))


### Dependencies

* The following workspace dependencies were updated
  * dependencies
    * @iot-app-kit/core bumped from 7.3.1 to 8.0.0
  * devDependencies
    * @iot-app-kit/jest-config bumped from 7.3.1 to 8.0.0
    * @iot-app-kit/ts-config bumped from 7.3.1 to 8.0.0
    * eslint-config-iot-app-kit bumped from 7.3.1 to 8.0.0
</details>

<details><summary>testing-util: 8.0.0</summary>

## [8.0.0](https://github.com/corteggiano/iot-app-kit/compare/testing-util-v7.3.1...testing-util-v8.0.0) (2023-09-18)


### Miscellaneous Chores

* **testing-util:** Synchronize iot-app-kit versions


### Dependencies

* The following workspace dependencies were updated
  * dependencies
    * @iot-app-kit/core bumped from 7.3.1 to 8.0.0
</details>

<details><summary>tools-iottwinmaker: 8.0.0</summary>

## [8.0.0](https://github.com/corteggiano/iot-app-kit/compare/tools-iottwinmaker-v7.3.1...tools-iottwinmaker-v8.0.0) (2023-09-18)


### Bug Fixes

* **tools-iottwinmaker:** update dashboard role to include execute query api ([b63d053](https://github.com/corteggiano/iot-app-kit/commit/b63d0537ce247724d0dd73d8d0d1ffba20e0ab5a))
</details>

<details><summary>ts-config: 8.0.0</summary>

## [8.0.0](https://github.com/corteggiano/iot-app-kit/compare/ts-config-v7.3.1...ts-config-v8.0.0) (2023-09-18)


### Miscellaneous Chores

* **ts-config:** Synchronize iot-app-kit versions
</details>

<details><summary>eslint-config: 8.0.0</summary>

## [8.0.0](https://github.com/corteggiano/iot-app-kit/compare/eslint-config-v7.3.1...eslint-config-v8.0.0) (2023-09-18)


### Miscellaneous Chores

* **eslint-config:** Synchronize iot-app-kit versions
</details>

<details><summary>root: 8.0.0</summary>

## [8.0.0](https://github.com/corteggiano/iot-app-kit/compare/root-v7.3.1...root-v8.0.0) (2023-09-18)


###   BREAKING CHANGES

* **composer:** use binding provider from TM-source
* aggregation and resolution picker

### Features

* **3D Knowledge Graph:** add scene node highlighting ([ef5c71c](https://github.com/corteggiano/iot-app-kit/commit/ef5c71c7d54f81c85b61f4a10847957669c1bdfb))
* **3D Knowledge Graph:** create function for duplicate code ([4c239d8](https://github.com/corteggiano/iot-app-kit/commit/4c239d85211f2609fc5f312a3c725c881cd187f5))
* **3D Knowledge Graph:** fix lint after rebase ([e016ff7](https://github.com/corteggiano/iot-app-kit/commit/e016ff747a156d48043ec9ed5b1aa2cfbb8b58a2))
* **3D Knowledge Graph:** fix type import ([e1edc38](https://github.com/corteggiano/iot-app-kit/commit/e1edc38905c5cc299d207568697b1d099791df6b))
* **3D Knowledge Graph:** improve unit tests ([11cd450](https://github.com/corteggiano/iot-app-kit/commit/11cd45022198ed4b1f69623080237617557f2136))
* **3D Knowledge Graph:** improve useStore usage and unit tests ([f10ffb2](https://github.com/corteggiano/iot-app-kit/commit/f10ffb2a72a1e5cb3bf1dbf9f1e0bc2e9fdd35d9))
* **3D knowledge Graph:** selecting entity binding triggers camera movement ([f122f1a](https://github.com/corteggiano/iot-app-kit/commit/f122f1a3a7d7af14060099263208801af3738ac3))
* **3D Knowledge Graph:** update DataBinding to EntityBinding ([ca10d1b](https://github.com/corteggiano/iot-app-kit/commit/ca10d1b3319f8c10b7239080310e4b0ad4244775))
* **3D Knowledge Graph:** use updated entity binding definition ([97d6d91](https://github.com/corteggiano/iot-app-kit/commit/97d6d9104fb9e28dc23b1c6850b43f463a0fcb17))
* **3dkg:** 3dkg release ([7c01c91](https://github.com/corteggiano/iot-app-kit/commit/7c01c911936314b4b99614c367e2bc6f6522a024))
* **3dkg:** added 3dkg changes for entity data binding ([4db11a6](https://github.com/corteggiano/iot-app-kit/commit/4db11a63a6fb1ef2b3dd1cc5682a64e1417b12da))
* aggregation and resolution picker ([77a53fe](https://github.com/corteggiano/iot-app-kit/commit/77a53feffdb1956707dca5d45f43a1f7ea0c5453))
* auto collapse state for both panels ([fc54b1c](https://github.com/corteggiano/iot-app-kit/commit/fc54b1cb71979e48dc5440620577ca8a2adc4be6))
* **composer:** add hook to convert data bindings to queries ([1e68022](https://github.com/corteggiano/iot-app-kit/commit/1e6802206312926efbbf2e15fd48379afbfc4cd9))
* **composer:** auto query for indicator and overlay ([b597c6f](https://github.com/corteggiano/iot-app-kit/commit/b597c6f7606ead54749e93e0be2436430155b634))
* **composer:** auto query support for Model Shader ([ff0bbe3](https://github.com/corteggiano/iot-app-kit/commit/ff0bbe3a9cb1f6c8a91cf6c4f531b1811eee076c))
* **composer:** implement useBindingData and integrate to Tag ([e694433](https://github.com/corteggiano/iot-app-kit/commit/e6944332e8fcc516ecdd3b6978725691a089f1ca))
* **composer:** integrate scene viewer with TimeSync viewport ([6c92201](https://github.com/corteggiano/iot-app-kit/commit/6c92201aaa10c453c81cb6bf8ced349c55b47a19))
* **composer:** render tags from layer ([d9c5191](https://github.com/corteggiano/iot-app-kit/commit/d9c519114d3e39c3913eb32b23984f8204b756d8))
* **composer:** support enhanced editing in Matterport scene ([933deb7](https://github.com/corteggiano/iot-app-kit/commit/933deb752d11ab9269b48eccff9348c771f22019))
* **composer:** support sync matterport tag as entities ([7db178a](https://github.com/corteggiano/iot-app-kit/commit/7db178a4aee74cbd299dc115c7cf3786dc376800))
* **composer:** use binding provider from TM-source ([61f6a54](https://github.com/corteggiano/iot-app-kit/commit/61f6a5456aae9cb2ae826e3c2d700e0bba69c6af))
* **dashboard:** add advanced search using knowledge graph to query editor ([8722b33](https://github.com/corteggiano/iot-app-kit/commit/8722b338a919d6fb51b21a861cf7e96e44246dbd))
* **dashboard:** add api for customizing the properties panel ([368ad97](https://github.com/corteggiano/iot-app-kit/commit/368ad974a5fa0e22851918b89b8e3a152165dbe8))
* **dashboard:** add significant digits configuration ([bcc5c51](https://github.com/corteggiano/iot-app-kit/commit/bcc5c51a1732bc785a45ec939fb111f52ae14421))
* **dashboard:** add widget tile ([13573c5](https://github.com/corteggiano/iot-app-kit/commit/13573c59d560e7192159db8751d6818cfebcf531))
* **dashboard:** break out properties sections into tabs ([fb8b685](https://github.com/corteggiano/iot-app-kit/commit/fb8b685f1d6ea8459c40637f12f0cf6ddc75aa55))
* **dashboard:** change dashboard viewport default from 5m to 10m ([803d9a4](https://github.com/corteggiano/iot-app-kit/commit/803d9a4944f6a55cb2e0e9691ddc3e537966c501))
* **dashboard:** line symbol ([bba8e8d](https://github.com/corteggiano/iot-app-kit/commit/bba8e8d392f73b3e52109bad1557cda4ef00221c))
* **dashboard:** rectangle drag and drop ([57b56c8](https://github.com/corteggiano/iot-app-kit/commit/57b56c86b4d9bf856f12a0ed69113e3218ce005b))
* **dashboard:** refactor asset description sdk calls to use tanstack ([f99bcde](https://github.com/corteggiano/iot-app-kit/commit/f99bcde75f3fad7dac82ac657f1a2aca8dbbbc4c))
* **dashboard:** update collapsible side panels ([1495451](https://github.com/corteggiano/iot-app-kit/commit/149545160551174af83ce3ddb2a61f1a61977c94))
* **dynamic scenes:** update entities using dynamic scenes ([8eee582](https://github.com/corteggiano/iot-app-kit/commit/8eee582e039a5cb2a3e25c81f822a4ecca95672c))
* **echarts:** allow scroll left and right ([5d2341e](https://github.com/corteggiano/iot-app-kit/commit/5d2341e71f531556ac8147e1a0742233992ed82d))
* **echarts:** threshold support ([2d7ccfe](https://github.com/corteggiano/iot-app-kit/commit/2d7ccfe6695070126b60f352733ef1512c966984))
* **first Person:** proof of using pointer lock for a first person view ([391eddd](https://github.com/corteggiano/iot-app-kit/commit/391edddd5ab3c56be2e394aec06346dfbc29b776))
* fix lint error for scene composer ([924547f](https://github.com/corteggiano/iot-app-kit/commit/924547f788f260efa3cd39d36ede79b6c00f4f23))
* **KG Component:** event modeling ([b918237](https://github.com/corteggiano/iot-app-kit/commit/b918237e82738cf1dbc61f95c303881b65166abb))
* **Knowledge Graph:** adding clear and render graph results events ([5479a51](https://github.com/corteggiano/iot-app-kit/commit/5479a51b85574d4c751c8e0aba40fa54e76d7504))
* **Knowledge Graph:** adding KG parent component, search and explore logic ([95cc307](https://github.com/corteggiano/iot-app-kit/commit/95cc307d6fcf2592d376830283069ddce463d0cf))
* **propertyName:** add copy button and textarea ([7c0eaf4](https://github.com/corteggiano/iot-app-kit/commit/7c0eaf432e40e25a5319a29e7546442d81e8c3dc))
* **react-component:** adding config service to toggle echarts ([96d0351](https://github.com/corteggiano/iot-app-kit/commit/96d0351b7e20a728154d3ebfed0efd5205b841bd))
* **react-component:** adding context menu per chart ([a368eb9](https://github.com/corteggiano/iot-app-kit/commit/a368eb99b230f2a5a8bb39d7c0bc52e42ae9f5ad))
* **react-component:** adding drag and delete to TC ([7c6a017](https://github.com/corteggiano/iot-app-kit/commit/7c6a017eaad9fe4c2f6881adb7e807f4b154f93c))
* **react-component:** adding resizability for Charts components ([3ae7f56](https://github.com/corteggiano/iot-app-kit/commit/3ae7f568a30947782c2d29ecf72eacf3df31d18b))
* **react-component:** adding sorting ability for the chart legends ([ca330eb](https://github.com/corteggiano/iot-app-kit/commit/ca330eb711923a32531871b714c2252fe31850ae))
* **react-component:** adding TC markers ([4105adb](https://github.com/corteggiano/iot-app-kit/commit/4105adb218fbf05b6145348d660fc24b2cec0b66))
* **react-component:** adding the inital implementation of the trend cursors ([ce37fe2](https://github.com/corteggiano/iot-app-kit/commit/ce37fe21a36f13fe1438c0653eb47992d774b15e))
* **react-component:** adding trendcursor sync component ([52d6033](https://github.com/corteggiano/iot-app-kit/commit/52d6033337937c5b7b1774d5a5b04907e126df60))
* **react-components:** add a sitewise connected chart story ([b66de3b](https://github.com/corteggiano/iot-app-kit/commit/b66de3b4d87ac2a3157c6cae176a216dff1ceb92))
* **react-components:** add chart component with updated api ([bbbc55f](https://github.com/corteggiano/iot-app-kit/commit/bbbc55fbeeb12215be917ffc5147c5181ada5fec))
* **react-components:** add menu component ([cdd196e](https://github.com/corteggiano/iot-app-kit/commit/cdd196ebcf42b5ddbdc34005fe4b54ae24767609))
* **react-components:** add multiple y axis legend ([79023c0](https://github.com/corteggiano/iot-app-kit/commit/79023c025e09e3ad485c84ad1d54b0ed2e0e0589))
* **react-components:** add significant digits configuration for charts ([41cba0e](https://github.com/corteggiano/iot-app-kit/commit/41cba0e655ac944889d6f15db56282a30e53997e))
* **react-components:** add time selection component to react components ([e99f301](https://github.com/corteggiano/iot-app-kit/commit/e99f3011a063c861cc22264687a9f3d5d9d56841))
* **react-components:** adding resizing to trend cursors ([400189a](https://github.com/corteggiano/iot-app-kit/commit/400189a221f16123ce193222eacd2583ea25360a))
* **react-components:** adding TrendCursor Sync to dashboard ([d046184](https://github.com/corteggiano/iot-app-kit/commit/d046184b836e9cb3670b210eb24c4fd91167b52a))
* **react-components:** base echarts ([bc6ee62](https://github.com/corteggiano/iot-app-kit/commit/bc6ee6250417a7d71f6aaf0692f1a02d4059b8f6))
* **react-components:** feature flag context ([d313682](https://github.com/corteggiano/iot-app-kit/commit/d31368282b9f5882c6f6cef0a66c2c085ee56aff))
* **react-components:** supporting live mode in echarts ([cdf1caa](https://github.com/corteggiano/iot-app-kit/commit/cdf1caab9399cc770c91c3fd40ffde23e7795ab5))
* **react-components:** sync echarts viewport ([e04e040](https://github.com/corteggiano/iot-app-kit/commit/e04e04079630361047e82d8564678cd4e5857cdd))
* **scene composer:** add unit test for AnchorWidget onClickWidget event ([07f0987](https://github.com/corteggiano/iot-app-kit/commit/07f0987cd5effaafbc20e5936800bb447a244874))
* **scene composer:** added feature flag for tagstyle feature ([53a66ff](https://github.com/corteggiano/iot-app-kit/commit/53a66ffbdf0805c2ea6023f1903dbc117ca9d721))
* **scene composer:** added icon picker changes ([8ca53b8](https://github.com/corteggiano/iot-app-kit/commit/8ca53b8552f9eb09f107ea43d983a6b47f19fa88))
* **scene composer:** color picker bug fixes ([f44b838](https://github.com/corteggiano/iot-app-kit/commit/f44b838198165f60722bd83f4e4ae42c185e7146))
* **scene composer:** color picker changes ([0138b0a](https://github.com/corteggiano/iot-app-kit/commit/0138b0adb20039e77dc4ac0f838a50d742d24339))
* **scene composer:** entity data binding UI changes and unit tests ([fc17202](https://github.com/corteggiano/iot-app-kit/commit/fc17202c73a28a8670a8e4bc028eee86ac1a4ed1))
* **scene composer:** entity data binding UI changes and unit tests ([f1f81b8](https://github.com/corteggiano/iot-app-kit/commit/f1f81b8e9d11734836582071d4583113af5510a2))
* **scene composer:** fix autosuggestvalue issues in ValueDataBindingBuilder ([0f32e73](https://github.com/corteggiano/iot-app-kit/commit/0f32e7367f01b09d0f81eaf7580e770fcf523a2f))
* **scene composer:** fixed entity data binding data format ([64e33fa](https://github.com/corteggiano/iot-app-kit/commit/64e33fa582512868a74d1cafad1a0d734065878c))
* **scene composer:** fixed entity search bug using free text ([7417c15](https://github.com/corteggiano/iot-app-kit/commit/7417c15f09b3b7b2c1994d1ee13aeb98e8506779))
* **scene composer:** rule icon using color picker ([f1519c4](https://github.com/corteggiano/iot-app-kit/commit/f1519c4ec94c598a83825f85a3dcd00e87747e3f))
* **scene-composer:** added back animation scene model component with changes ([39f14cd](https://github.com/corteggiano/iot-app-kit/commit/39f14cd0d0f571e9c4bbc04958baecd4530d04f5))
* **scene-composer:** added comment to explain scene object fetching ([39f14cd](https://github.com/corteggiano/iot-app-kit/commit/39f14cd0d0f571e9c4bbc04958baecd4530d04f5))
* **scene-composer:** added internationalization for animation viewstate ([39f14cd](https://github.com/corteggiano/iot-app-kit/commit/39f14cd0d0f571e9c4bbc04958baecd4530d04f5))
* **scene-composer:** added knowncomponent type to condition for adding an animation object ([39f14cd](https://github.com/corteggiano/iot-app-kit/commit/39f14cd0d0f571e9c4bbc04958baecd4530d04f5))
* **scene-composer:** addressed changes to databinding in the add component menu ([39f14cd](https://github.com/corteggiano/iot-app-kit/commit/39f14cd0d0f571e9c4bbc04958baecd4530d04f5))
* **scene-composer:** addressed more changes to databinding in the add component menu ([39f14cd](https://github.com/corteggiano/iot-app-kit/commit/39f14cd0d0f571e9c4bbc04958baecd4530d04f5))
* **scene-composer:** fixed tests ([39f14cd](https://github.com/corteggiano/iot-app-kit/commit/39f14cd0d0f571e9c4bbc04958baecd4530d04f5))
* **scene-composer:** fixed use effect in animationeditor to prevent extra fire ([39f14cd](https://github.com/corteggiano/iot-app-kit/commit/39f14cd0d0f571e9c4bbc04958baecd4530d04f5))
* **scene-composer:** got rid of magic string and replaced it with a const ([39f14cd](https://github.com/corteggiano/iot-app-kit/commit/39f14cd0d0f571e9c4bbc04958baecd4530d04f5))
* **scene-composer:** initial implementation of animations ([39f14cd](https://github.com/corteggiano/iot-app-kit/commit/39f14cd0d0f571e9c4bbc04958baecd4530d04f5))
* **scene-composer:** minor cleanup ([39f14cd](https://github.com/corteggiano/iot-app-kit/commit/39f14cd0d0f571e9c4bbc04958baecd4530d04f5))
* **scene-composer:** refactored addObject menu for animations ([39f14cd](https://github.com/corteggiano/iot-app-kit/commit/39f14cd0d0f571e9c4bbc04958baecd4530d04f5))
* **scene-composer:** refactored AnimationComponent test ([39f14cd](https://github.com/corteggiano/iot-app-kit/commit/39f14cd0d0f571e9c4bbc04958baecd4530d04f5))
* **scene-composer:** refactored tests and animationComponentEditor ([39f14cd](https://github.com/corteggiano/iot-app-kit/commit/39f14cd0d0f571e9c4bbc04958baecd4530d04f5))
* **scene-composer:** refactored to address github feedback ([39f14cd](https://github.com/corteggiano/iot-app-kit/commit/39f14cd0d0f571e9c4bbc04958baecd4530d04f5))
* **scene-composer:** removed changes to tag component ([39f14cd](https://github.com/corteggiano/iot-app-kit/commit/39f14cd0d0f571e9c4bbc04958baecd4530d04f5))
* **scene-composer:** removed global variable from animationcomponent ([39f14cd](https://github.com/corteggiano/iot-app-kit/commit/39f14cd0d0f571e9c4bbc04958baecd4530d04f5))
* **scene-composer:** removed unnecessary dependency ([39f14cd](https://github.com/corteggiano/iot-app-kit/commit/39f14cd0d0f571e9c4bbc04958baecd4530d04f5))
* **scene-composer:** removed unnecessary imports ([39f14cd](https://github.com/corteggiano/iot-app-kit/commit/39f14cd0d0f571e9c4bbc04958baecd4530d04f5))
* **scene-composer:** renamed animationupdater to animationcomponenteditor for consistency ([39f14cd](https://github.com/corteggiano/iot-app-kit/commit/39f14cd0d0f571e9c4bbc04958baecd4530d04f5))
* **scene-composer:** reverted package-lock.json ([39f14cd](https://github.com/corteggiano/iot-app-kit/commit/39f14cd0d0f571e9c4bbc04958baecd4530d04f5))
* **scene-composer:** updated us.json ([39f14cd](https://github.com/corteggiano/iot-app-kit/commit/39f14cd0d0f571e9c4bbc04958baecd4530d04f5))
* **SkinVisualization:** enable default style for visualization and allow overrides ([6240195](https://github.com/corteggiano/iot-app-kit/commit/624019522a940bc9cf5c69253156db871576302d))
* table widget pagination and sortingdisabled ([b727eae](https://github.com/corteggiano/iot-app-kit/commit/b727eae8364f19f2e997fa0c9275e1f0a947f854))
* **TM-source:** add entity APIs to SceneMetadataModule ([1a91084](https://github.com/corteggiano/iot-app-kit/commit/1a910844692aa30bbd4b9d1920d415378bcad130))
* **TM-source:** add entity data binding provider ([d1c459d](https://github.com/corteggiano/iot-app-kit/commit/d1c459d4e897171922d6821da01dcbae6fd000da))
* **TM-source:** add property value query ([21091d9](https://github.com/corteggiano/iot-app-kit/commit/21091d9e3bb19a2c6181f2eeb1354ce2fa31ca45))
* **TM-source:** flag static property data binding ([eeeaecd](https://github.com/corteggiano/iot-app-kit/commit/eeeaecdadd55977633ae884607e2f4e56e467044))
* **TM-source:** use Tanstack query to cache requests ([0d87068](https://github.com/corteggiano/iot-app-kit/commit/0d870684b8fa61e2e2a6d3afc5d0f4dd70fad9a3))
* **Vite:** migrate example app to vite ([d2e65be](https://github.com/corteggiano/iot-app-kit/commit/d2e65bed32dc3c470b52d418dacb61610c16ab5a))


### Bug Fixes

* **3DKG:** fix height flexibility for KG component ([f9943ce](https://github.com/corteggiano/iot-app-kit/commit/f9943cee4741da7b5fc2f11f67a429424c2d88b7))
* **actions:** lock release please to version ([aba8511](https://github.com/corteggiano/iot-app-kit/commit/aba85114467119d4999f25a3e175c5761ca018f3))
* **composer:** add new translations ([de7249a](https://github.com/corteggiano/iot-app-kit/commit/de7249a8a920e1c43faeda4fd94fb57e9d0fc9f3))
* **composer:** associate inputs to labels ([8b64f9a](https://github.com/corteggiano/iot-app-kit/commit/8b64f9aa38761ed684be8b9088a8b7edd6bb0681))
* **composer:** click events for tag and overlay ([2bf7b13](https://github.com/corteggiano/iot-app-kit/commit/2bf7b13fc2eccc1206eb9455d372d84c0a886915))
* **composer:** click on overlay causing camera to follow mouse ([6cbd5f5](https://github.com/corteggiano/iot-app-kit/commit/6cbd5f5d53cf8b58ba5d4d7536acd9acd6ac7ad1))
* **composer:** close overlay auto select attached tag ([5a52ae1](https://github.com/corteggiano/iot-app-kit/commit/5a52ae18e4d37135570765a12306bbece3655eb8))
* **composer:** error handling for Matterport scene ([24ca493](https://github.com/corteggiano/iot-app-kit/commit/24ca4932457f4605f05af98bb13294143d15371a))
* **composer:** error when switching motion indicator appearance ([c51f135](https://github.com/corteggiano/iot-app-kit/commit/c51f13530b36c8a7e1e17d8ea65c4bec515fb16d))
* **composer:** fix infinite storybook component update ([40fab0a](https://github.com/corteggiano/iot-app-kit/commit/40fab0a96bf1a0396fa0a36aa67c059ed8570cfc))
* **composer:** fix issue displaying 0 in overlay ([a0bc01d](https://github.com/corteggiano/iot-app-kit/commit/a0bc01dfe327509345ec74a61149a6a2d6e48a6a))
* **composer:** fix warning and cached onChange ([5a2c182](https://github.com/corteggiano/iot-app-kit/commit/5a2c1824736bfdd05d1dd1925da8a0408c7ca860))
* **composer:** matterport tag sync tag style under flag ([83334ce](https://github.com/corteggiano/iot-app-kit/commit/83334ce21a089ecff46c86ddfb320f1bafe6011d))
* **composer:** unsubscribe to queries when unmounting ([15fe82e](https://github.com/corteggiano/iot-app-kit/commit/15fe82edf847cf024ab8e987ff513d4726cb2138))
* **CSS-Loader:** updated sass-loader & fixed style ([aee4abc](https://github.com/corteggiano/iot-app-kit/commit/aee4abcd22617cd1b28641711a4be2d1bab4e252))
* **dashboard:** add box sizing reset for dashboard ([712598b](https://github.com/corteggiano/iot-app-kit/commit/712598b13f4c3c81a3d4d8b6609d7bd149c16859))
* **dashboard:** add scss loader to dashboard storybook ([1e8a2a3](https://github.com/corteggiano/iot-app-kit/commit/1e8a2a3ad82228fe016820386c28756bd37259ad))
* **dashboard:** adding a ts module file for supporting svg files ([61ac00d](https://github.com/corteggiano/iot-app-kit/commit/61ac00dba2029a060692fd736616185f07b74bc2))
* **dashboard:** better toolbar ([c0b9cc8](https://github.com/corteggiano/iot-app-kit/commit/c0b9cc8bf135caaa8f5722defba87be65ef06f70))
* **dashboard:** change min widget sizing from 2 to 1 ([d840fc1](https://github.com/corteggiano/iot-app-kit/commit/d840fc1ac8efbe9e79ff5937f22cc3545abfdd0d))
* **dashboard:** editable link ([1675de6](https://github.com/corteggiano/iot-app-kit/commit/1675de6ff50f536b27d6258734fb312f50b40c7b))
* **dashboard:** fixed the flash of graphs on change in query(s) ([45edc69](https://github.com/corteggiano/iot-app-kit/commit/45edc69ae67796ce9566c491a8f39921029ad0a0))
* **data overlay:** add onWidgetClick and onSelectionChange event support to data overlays ([b3f4f9d](https://github.com/corteggiano/iot-app-kit/commit/b3f4f9d33e61190933323f283fe0fe0552ab0384))
* **docs:** udpate dataStream docs ([d0dc6ca](https://github.com/corteggiano/iot-app-kit/commit/d0dc6cace63508480a76db9e0151532fd387a891))
* graph css not distributed correctly ([d7b2717](https://github.com/corteggiano/iot-app-kit/commit/d7b2717647507533bfeda81774c44a3c5727e15c))
* **KG Component:** ux review changes ([9133094](https://github.com/corteggiano/iot-app-kit/commit/9133094b7352676277e951dda2c92cb0db566488))
* **knowledge-graph:** fix node to node selection and layout adjustment ([98df518](https://github.com/corteggiano/iot-app-kit/commit/98df518f25cc3a15254917520a1750d013fc2984))
* **matterport:** fix zoom to tag ([49a04f8](https://github.com/corteggiano/iot-app-kit/commit/49a04f81bc464d20798f219f77f325bde74ad1f6))
* **react-component:** removing the dependency of the yMin and Ymax and ([9360fe4](https://github.com/corteggiano/iot-app-kit/commit/9360fe42e081263ccd1896f47fb5d8a7ba6b1d0f))
* **react-component:** removing transition animation for trend cursors ([5e84d15](https://github.com/corteggiano/iot-app-kit/commit/5e84d15fcecb7ee0e1f242fd0f1ce47960818696))
* **react-components:** add memoization for chart reactivity and refactor echarts hook ([128f5b0](https://github.com/corteggiano/iot-app-kit/commit/128f5b0c2f8a1c164241ef216d5d489d9d69164c))
* **react-components:** echarts resize drag fix ([19ccc7e](https://github.com/corteggiano/iot-app-kit/commit/19ccc7ee4569aea891b43883a8ba1dedf3ac4fc9))
* **react-components:** ensure provider is unsubscribed correctly ([2db74d2](https://github.com/corteggiano/iot-app-kit/commit/2db74d2d51f1104478540528cb4be982c4afc351))
* **react-components:** fixing TCs on data zoom ([379525c](https://github.com/corteggiano/iot-app-kit/commit/379525cd1246061398ff8a113963b968466ae11a))
* **react-components:** fixing the duplicate yAxis values ([60073ef](https://github.com/corteggiano/iot-app-kit/commit/60073ef7ea4e1167218c8cdecd021bc677d5cc66))
* **react-components:** fixing the viewport and some styling elements ([7d3526e](https://github.com/corteggiano/iot-app-kit/commit/7d3526e34c86b55632a4d5aa0c7029fd1499a48b))
* **react-components:** need stop propagation in start and end of resize event ([30e9901](https://github.com/corteggiano/iot-app-kit/commit/30e99010bc57e48040ddcac8c41546e745a5a3f9))
* **react-components:** the dependencies were added to dashboard instead of react-components ([8b2f12f](https://github.com/corteggiano/iot-app-kit/commit/8b2f12fb67a1705ffdb722e02cf8c1ff1ae2ed97))
* **react-components:** updating echarts ux ([ddfc9c8](https://github.com/corteggiano/iot-app-kit/commit/ddfc9c8cc15f32a8c307653daf5d2159918e58b2))
* **react-components:** updating echarts with the fixes founf during bug bash ([9f32c21](https://github.com/corteggiano/iot-app-kit/commit/9f32c21ae53d99ddac718caa520d9e852a25f499))
* **react-component:** updating the calculateTimeStamp method to use ([e0e1f42](https://github.com/corteggiano/iot-app-kit/commit/e0e1f428f012b157938eced89efcd30101f2d7f5))
* **react-component:** updating the sytling and adding some visual ques for the trend cursors ([dc50a2c](https://github.com/corteggiano/iot-app-kit/commit/dc50a2c8c04167f1137deec350d735847d6d233a))
* **reactExample:** fix css in Knowledge Graph Component ([7b5a4e4](https://github.com/corteggiano/iot-app-kit/commit/7b5a4e452b1e4cee2ec13220b0b2c828906f27db))
* **reactExample:** fix removed css in Scene Viewer Component ([7f38586](https://github.com/corteggiano/iot-app-kit/commit/7f38586400dfea06d8e2f986130fceddae719e60))
* resolved table widget column resize issue ([8b6b418](https://github.com/corteggiano/iot-app-kit/commit/8b6b4189601c594ffef9dd6ed915e6ddbf7fa938))
* resolved table widget column resize issue ([08b1993](https://github.com/corteggiano/iot-app-kit/commit/08b19932614978cac915e34a27747f72da78c657))
* **scene composer:** cleanup for polaris css imports & moving interface to component file ([d244eb5](https://github.com/corteggiano/iot-app-kit/commit/d244eb525a3b2ae8862affa0141673351fd850ee))
* **scene composer:** fix for broken rule panel ([c5e071d](https://github.com/corteggiano/iot-app-kit/commit/c5e071d6c5c0e73eaec3e47a98e6d3e3f0cc7dc3))
* **scene composer:** fix for missing grid ([2a4c4c8](https://github.com/corteggiano/iot-app-kit/commit/2a4c4c8b194a2eceebe73dc87d24215836be4a99))
* **scene composer:** fix overlay arrow clickable space ([4cae31f](https://github.com/corteggiano/iot-app-kit/commit/4cae31fb04d38852ed667ab5620d4920cfd83769))
* **scene composer:** fix spacing issue between elements ([b65ebdc](https://github.com/corteggiano/iot-app-kit/commit/b65ebdc3fecd4911a6e5fbc664d1d0bdf5524ebe))
* **scene composer:** modifying auto collapse to only apply to viewer ([aaf6338](https://github.com/corteggiano/iot-app-kit/commit/aaf63384b7d24b731a76fec10b8372110173470e))
* **scene composer:** refactoring video player to work with react 18 updates ([c177802](https://github.com/corteggiano/iot-app-kit/commit/c1778025babf75d89d74c1b355f54e46f2e740be))
* **scene composer:** removing custom grid line colors ([632f7a2](https://github.com/corteggiano/iot-app-kit/commit/632f7a210a80281b1d3c53b0a5de168f8cae9d10))
* **scene composer:** reverting breaking changes from dependabot & setting up ignores ([831d1d7](https://github.com/corteggiano/iot-app-kit/commit/831d1d76e8f7f36bd8129eaa7491a33516a57b1c))
* **scene composer:** sets up refs to track visibility of data overlay & parent ([fad2208](https://github.com/corteggiano/iot-app-kit/commit/fad22087312570641809ed4b1662ae053a809f02))
* **scene tags:** fix anchor stems not triggering onWidgetClick ([6945512](https://github.com/corteggiano/iot-app-kit/commit/6945512eadbdd8d8bc09977ecce7511fbf136311))
* **scene-composer:** fix ability to click on tags, revert raycaster disable on scroll ([caed238](https://github.com/corteggiano/iot-app-kit/commit/caed238ed12da29bd487caf44b895ce7f7f024bf))
* **scene-composer:** update raycaster in OrbitControls, ignore undefined faces, disable on scroll ([011464e](https://github.com/corteggiano/iot-app-kit/commit/011464e702f46b9237b8df1226fa862c073605c0))
* **scene-composer:** updating dependabot.yml to properly ignore all [@react-three](https://github.com/react-three) dependencies ([a33d445](https://github.com/corteggiano/iot-app-kit/commit/a33d445309f31da54dcc443b3e2ee604014c153a))
* **Tag style:** custom color to support icon rules ([dd3bbee](https://github.com/corteggiano/iot-app-kit/commit/dd3bbee9622eb0bda3a29ab28b920b6d798b4cb2))
* **TM-source:** fix tanstack query import ([3bc704f](https://github.com/corteggiano/iot-app-kit/commit/3bc704fa4ccbf3a74baa8e575e0ac5bc7ff4cf87))
* **tools-iottwinmaker:** update dashboard role to include execute query api ([b63d053](https://github.com/corteggiano/iot-app-kit/commit/b63d0537ce247724d0dd73d8d0d1ffba20e0ab5a))
* use isRefreshing to show paginated request ([97d1e5e](https://github.com/corteggiano/iot-app-kit/commit/97d1e5e3ccd5e8f7054d4e965dd7886346020d4c))
* use REGION env variable in dashboard testing environment ([c62e68b](https://github.com/corteggiano/iot-app-kit/commit/c62e68bc9181ad2d6995097fb60638f41dc168ab))
</details>

---
This PR was generated with [Release Please](https://github.com/googleapis/release-please). See [documentation](https://github.com/googleapis/release-please#release-please).