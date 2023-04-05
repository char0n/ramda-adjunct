# [4.0.0](https://github.com/char0n/ramda-adjunct/compare/v3.4.0...v4.0.0) (2023-04-05)


### Features

* add support for ramda@0.29.0 ([#2568](https://github.com/char0n/ramda-adjunct/issues/2568)) ([05def8d](https://github.com/char0n/ramda-adjunct/commit/05def8d60fd9c71c4e4f8d9345b7b80ffa6dd6f7)), closes [#2567](https://github.com/char0n/ramda-adjunct/issues/2567)

### Breaking changes

* pathNotEq changed parameter order to reflect the order in ramda@0.29.0
* propNotEq changed parameter order to reflect the order in ramda@0.29.0



# [3.4.0](https://github.com/char0n/ramda-adjunct/compare/v3.3.0...v3.4.0) (2022-12-03)


### Bug Fixes

* **isGeneratorFunction:** remove legacy predicate ([#2431](https://github.com/char0n/ramda-adjunct/issues/2431)) ([c576212](https://github.com/char0n/ramda-adjunct/commit/c5762124b47b738b45545fbece1099d2a870ccd4))


### Features

* **list:** add sortByProp ([#2384](https://github.com/char0n/ramda-adjunct/issues/2384)) ([61c2e9d](https://github.com/char0n/ramda-adjunct/commit/61c2e9de8bdfcbf941a91ea270688b1c434fdc61)), closes [#1241](https://github.com/char0n/ramda-adjunct/issues/1241)



# [3.3.0](https://github.com/char0n/ramda-adjunct/compare/v3.2.0...v3.3.0) (2022-09-18)


### Features

* **types:** simplify types and declare named exports ([#2307](https://github.com/char0n/ramda-adjunct/issues/2307)) ([1b46e44](https://github.com/char0n/ramda-adjunct/commit/1b46e44fcc563ecb062ab4928d3c9e295287e064)), closes [#2306](https://github.com/char0n/ramda-adjunct/issues/2306) [#1467](https://github.com/char0n/ramda-adjunct/issues/1467)



# [3.2.0](https://github.com/char0n/ramda-adjunct/compare/v3.1.0...v3.2.0) (2022-06-18)


### Features

* **type:** add isUinteger32 ([#2257](https://github.com/char0n/ramda-adjunct/issues/2257)) ([965147e](https://github.com/char0n/ramda-adjunct/commit/965147e836df98fe0fa83851d41c1268503c73e4)), closes [#1281](https://github.com/char0n/ramda-adjunct/issues/1281)



# [3.1.0](https://github.com/char0n/ramda-adjunct/compare/v3.0.0...v3.1.0) (2022-04-24)


### Features

* **isBlank:** implemented isBlank function ([#2141](https://github.com/char0n/ramda-adjunct/issues/2141)) ([e8cf553](https://github.com/char0n/ramda-adjunct/commit/e8cf553d9ef4daa950a3358d18241356a7089fff))
* **list:** add sortByPaths ([#2104](https://github.com/char0n/ramda-adjunct/issues/2104)) ([3d59189](https://github.com/char0n/ramda-adjunct/commit/3d591897d1c564a3c18cacc569c1d29cf351315c)), closes [#1240](https://github.com/char0n/ramda-adjunct/issues/1240)



# [3.0.0](https://github.com/char0n/ramda-adjunct/compare/v2.36.0...v3.0.0) (2022-01-17)


### Breaking changes

Version 3.0.0 adds support for [ramda@0.28.0](https://github.com/ramda/ramda/releases/tag/v0.28.0) which removed bunch of function from its API.
This means that ramda-adjunct needed to react with breaking change release which currently
supports only ramda@0.28.0.

Some functions in ramda-adjunct API were deprecated for a long time, and we decided to remove them in 3.0.0 release:

- **then, thenP** - replaceable by [R.andThen](https://ramdajs.com/docs/#andThen)
- **hasPath** - replaceable by [R.hasPath](https://ramdajs.com/docs/#hasPath)
- **mergeRight, mergeLeft, resetToDefaults**: - replaceable by [R.mergeLeft](https://ramdajs.com/docs/#mergeLeft)
- **contained** - replaceable by [RA.included](https://char0n.github.io/ramda-adjunct/3.0.0/RA.html#.included)

### Bug Fixes

* **function:** remove then ([4e5516b](https://github.com/char0n/ramda-adjunct/commit/4e5516b7e5bf8c41f3979ae604b3e331b406ea25)), closes [#2152](https://github.com/char0n/ramda-adjunct/issues/2152)
* **object:** remove hasPath ([8cc0c8f](https://github.com/char0n/ramda-adjunct/commit/8cc0c8f7859618b5ef3bc00816ed05622841a871)), closes [#2152](https://github.com/char0n/ramda-adjunct/issues/2152)
* **object:** remove mergeRight ([06a3338](https://github.com/char0n/ramda-adjunct/commit/06a3338923072c6a4ae3e5c62bc109793d76537b)), closes [#2152](https://github.com/char0n/ramda-adjunct/issues/2152)


### Features

* add support for ramda@0.28.0 ([20acd56](https://github.com/char0n/ramda-adjunct/commit/20acd562a24759b42ec4f8ae2f3f90af95de25b0)), closes [#2152](https://github.com/char0n/ramda-adjunct/issues/2152)
* **list:** add included ([4bfafe0](https://github.com/char0n/ramda-adjunct/commit/4bfafe0593ee2d34b51eb8b5768f8618bee17f5a)), closes [#2152](https://github.com/char0n/ramda-adjunct/issues/2152)



# [2.36.0](https://github.com/char0n/ramda-adjunct/compare/v2.35.0...v2.36.0) (2022-01-17)


### Features

* add support for ramda@0.27.2 ([39e22e1](https://github.com/char0n/ramda-adjunct/commit/39e22e1485410a7bf99a212b9c9a1d2b7ea3237f)), closes [#2152](https://github.com/char0n/ramda-adjunct/issues/2152)
* **type:** add toNumber ([#2103](https://github.com/char0n/ramda-adjunct/issues/2103)) ([d06abbf](https://github.com/char0n/ramda-adjunct/commit/d06abbfbf3b4700d78f368479404c8347785f295)), closes [#788](https://github.com/char0n/ramda-adjunct/issues/788)



# [2.35.0](https://github.com/char0n/ramda-adjunct/compare/v2.34.0...v2.35.0) (2021-11-01)


### Features

* add copyKeys ([#1558](https://github.com/char0n/ramda-adjunct/issues/1558)) ([cf9727c](https://github.com/char0n/ramda-adjunct/commit/cf9727c08658e74597d330146c4bfc26d3b6949b)), closes [#516](https://github.com/char0n/ramda-adjunct/issues/516)



# [2.34.0](https://github.com/char0n/ramda-adjunct/compare/v2.32.0...v2.34.0) (2021-09-29)

### Other changes

The transpiled code has been regenerated with versions of babel transpiler libraries.

# [2.33.0](https://github.com/char0n/ramda-adjunct/compare/v2.32.0...v2.33.0) (2021-05-22)


### Features

* **function:** add catchP ([#1616](https://github.com/char0n/ramda-adjunct/issues/1616)) ([d6d1e78](https://github.com/char0n/ramda-adjunct/commit/d6d1e7825d16130ba916448355f06bad1f2bf0d9)), closes [#1232](https://github.com/char0n/ramda-adjunct/issues/1232)
* **type:** add isSentinelValue ([#1848](https://github.com/char0n/ramda-adjunct/issues/1848)) ([c48ce9e](https://github.com/char0n/ramda-adjunct/commit/c48ce9e2ab752006c25d385e830f3317bde5110c)), closes [#793](https://github.com/char0n/ramda-adjunct/issues/793)



# [2.32.0](https://github.com/char0n/ramda-adjunct/compare/v2.31.1...v2.32.0) (2021-04-10)


### Bug Fixes

* **isNotNil:** utilize type narrowing ([#1672](https://github.com/char0n/ramda-adjunct/issues/1672)) ([353a6db](https://github.com/char0n/ramda-adjunct/commit/353a6dbb5039d8a1f72b97c4c20471e2a4bb3cd8))


### Features

* **list:** add findOr ([#1479](https://github.com/char0n/ramda-adjunct/issues/1479)) ([e9d321a](https://github.com/char0n/ramda-adjunct/commit/e9d321aef8bf1200d9b5e3bccd59f787eb8f31f5)), closes [#372](https://github.com/char0n/ramda-adjunct/issues/372)
* **type:** add isInteger32 ([#1826](https://github.com/char0n/ramda-adjunct/issues/1826)) ([fe8331e](https://github.com/char0n/ramda-adjunct/commit/fe8331ea6d63aa8db8302f6730f11fa7d840df00)), closes [#1282](https://github.com/char0n/ramda-adjunct/issues/1282)
* **type:** add isPrimitive/isNotPrimitive ([#1722](https://github.com/char0n/ramda-adjunct/issues/1722)) ([901006a](https://github.com/char0n/ramda-adjunct/commit/901006a36c39a378b544e63c14a7c86d80bfba6f)), closes [#786](https://github.com/char0n/ramda-adjunct/issues/786)



# [2.31.1](https://github.com/char0n/ramda-adjunct/compare/v2.31.0...v2.31.1) (2021-02-21)

### Bug Fixes

* **deps**: remove postinstall husky script ([61f3fde](https://github.com/char0n/ramda-adjunct/commit/61f3fde46e3c65df0f67b217621fa9532141a2fa)), closes [#1773](https://github.com/char0n/ramda-adjunct/issues/1773)


# [2.31.0](https://github.com/char0n/ramda-adjunct/compare/v2.30.0...v2.31.0) (2021-02-21)


### Features

* **list:** add filterIndexed ([#1713](https://github.com/char0n/ramda-adjunct/issues/1713)) ([d3cfc63](https://github.com/char0n/ramda-adjunct/commit/d3cfc6325e13324ca6e54c10de016a522362511e)), closes [#1346](https://github.com/char0n/ramda-adjunct/issues/1346)
* **object:** add isPrototypeOf ([#1456](https://github.com/char0n/ramda-adjunct/issues/1456)) ([314be55](https://github.com/char0n/ramda-adjunct/commit/314be550cebf30719d418c68e8687108122d9af8)), closes [#787](https://github.com/char0n/ramda-adjunct/issues/787)
* **object:** add invoke ([#1554](https://github.com/char0n/ramda-adjunct/issues/1554)) ([e90ce3c](https://github.com/char0n/ramda-adjunct/commit/e90ce3cc714052d0e24dc2b592d43c77a8348eb9)), closes [#81](https://github.com/char0n/ramda-adjunct/issues/81)



# [2.30.0](https://github.com/char0n/ramda-adjunct/compare/v2.29.0...v2.30.0) (2020-12-27)


### Bug Fixes

* **invokeArgs:** update TypeScript signature ([#1710](https://github.com/char0n/ramda-adjunct/issues/1710)) ([775d282](https://github.com/char0n/ramda-adjunct/commit/775d2825c4cbed2118a0cbaad2c13587090a49b1)), closes [#1707](https://github.com/char0n/ramda-adjunct/issues/1707)


### Features

* **list:** add rangeStep ([#1708](https://github.com/char0n/ramda-adjunct/issues/1708)) ([82c0368](https://github.com/char0n/ramda-adjunct/commit/82c0368008ee5ed90e28baf1a91ad74b91ba7072)), closes [#1477](https://github.com/char0n/ramda-adjunct/issues/1477) [#1230](https://github.com/char0n/ramda-adjunct/issues/1230)
* **relation:** add overlaps ([2ea5355](https://github.com/char0n/ramda-adjunct/commit/2ea5355608a9016c96de39a87d48f21016bef330)), closes [#1229](https://github.com/char0n/ramda-adjunct/issues/1229)
* **type:** add isError ([#1449](https://github.com/char0n/ramda-adjunct/issues/1449)) ([adf25c2](https://github.com/char0n/ramda-adjunct/commit/adf25c2a0aa79bf53df66f4bd9720b5039dfd185)), closes [#206](https://github.com/char0n/ramda-adjunct/issues/206)



# [2.29.0](https://github.com/char0n/ramda-adjunct/compare/v2.28.0...v2.29.0) (2020-12-13)


### Bug Fixes

* **compact:** remove other falsy values from type ([#1603](https://github.com/char0n/ramda-adjunct/issues/1603)) ([31651bc](https://github.com/char0n/ramda-adjunct/commit/31651bca82e2e365daf35ea65f084ea8cd3dbb2c)), closes [#1602](https://github.com/char0n/ramda-adjunct/issues/1602)
* **replaceAll:** add support for special replacement patterns ([#1627](https://github.com/char0n/ramda-adjunct/issues/1627)) ([1f862a1](https://github.com/char0n/ramda-adjunct/commit/1f862a14d924e5f46e7f80f6ae60030fc8cf854c)), closes [#1573](https://github.com/char0n/ramda-adjunct/issues/1573)


### Features

* **object:** add renameKeyWith ([#1612](https://github.com/char0n/ramda-adjunct/issues/1612)) ([6aa00ce](https://github.com/char0n/ramda-adjunct/commit/6aa00ce7d093a9f65eba2eec380bea24209774bf)), closes [#1228](https://github.com/char0n/ramda-adjunct/issues/1228)
* **relation:** add notEqual ([#1459](https://github.com/char0n/ramda-adjunct/issues/1459)) ([4eb9ada](https://github.com/char0n/ramda-adjunct/commit/4eb9adab2d5e271a8fa3ae2859feeeb8af84874a)), closes [#102](https://github.com/char0n/ramda-adjunct/issues/102)
* **type:** isNaturalNumber ([#1450](https://github.com/char0n/ramda-adjunct/issues/1450)) ([ba6bb12](https://github.com/char0n/ramda-adjunct/commit/ba6bb129476426a880e1d029929fafa924cfbc06)), closes [#1440](https://github.com/char0n/ramda-adjunct/issues/1440)



# [2.28.0](https://github.com/char0n/ramda-adjunct/compare/v2.27.0...v2.28.0) (2020-09-13)


### Features

* add support for ramda@0.27.1 ([5699402](https://github.com/char0n/ramda-adjunct/commit/56994024c1a4b20c9bbed207c6d39b12b50a3fcc)), closes [#1577](https://github.com/char0n/ramda-adjunct/issues/1577)
* **Math:** add toInteger32 ([#1463](https://github.com/char0n/ramda-adjunct/issues/1463)) ([1f39b34](https://github.com/char0n/ramda-adjunct/commit/1f39b34972b2eb5cd80ca9440cb6768cf4977980)), closes [#783](https://github.com/char0n/ramda-adjunct/issues/783)
* **Math:** add toUinteger32 ([cdbdd3c](https://github.com/char0n/ramda-adjunct/commit/cdbdd3c44b549e2d97e0ae122463cb8c8120ea83)), closes [#1278](https://github.com/char0n/ramda-adjunct/issues/1278)



<a name="2.27.0"></a>
# [2.27.0](https://github.com/char0n/ramda-adjunct/compare/v2.26.0...v2.27.0) (2020-05-23)


### Bug Fixes

* **iterable:** convert isIterable into a type guard function ([#1414](https://github.com/char0n/ramda-adjunct/issues/1414)) ([57cfab2](https://github.com/char0n/ramda-adjunct/commit/57cfab2)), closes [#1412](https://github.com/char0n/ramda-adjunct/issues/1412)


### Features

* **type:** add isNotSet ([#1434](https://github.com/char0n/ramda-adjunct/issues/1434)) ([9ecfaa7](https://github.com/char0n/ramda-adjunct/commit/9ecfaa7)), closes [#1123](https://github.com/char0n/ramda-adjunct/issues/1123)
* add isNotMap ([#1433](https://github.com/char0n/ramda-adjunct/issues/1433)) ([3378238](https://github.com/char0n/ramda-adjunct/commit/3378238)), closes [#1122](https://github.com/char0n/ramda-adjunct/issues/1122)
* **object:** add invokeArgs ([#1409](https://github.com/char0n/ramda-adjunct/issues/1409)) ([ea725f1](https://github.com/char0n/ramda-adjunct/commit/ea725f1)), closes [#1239](https://github.com/char0n/ramda-adjunct/issues/1239)
* add isBigInt ([#1406](https://github.com/char0n/ramda-adjunct/issues/1406)) ([67dfe1e](https://github.com/char0n/ramda-adjunct/commit/67dfe1e)), closes [#1253](https://github.com/char0n/ramda-adjunct/issues/1253)
* add thenCatchP ([#1322](https://github.com/char0n/ramda-adjunct/issues/1322)) ([54256f3](https://github.com/char0n/ramda-adjunct/commit/54256f3)), closes [#1233](https://github.com/char0n/ramda-adjunct/issues/1233)



<a name="2.26.0"></a>
# [2.26.0](https://github.com/char0n/ramda-adjunct/compare/v2.25.0...v2.26.0) (2020-03-16)


### Bug Fixes

* **mapIndexed:** make list argument Readonly ([#1336](https://github.com/char0n/ramda-adjunct/issues/1336)) ([5555ef3](https://github.com/char0n/ramda-adjunct/commit/5555ef3)), closes [#1330](https://github.com/char0n/ramda-adjunct/issues/1330)


### Features

* add fnull ([#1321](https://github.com/char0n/ramda-adjunct/issues/1321)) ([4d0e49a](https://github.com/char0n/ramda-adjunct/commit/4d0e49a)), closes [#1235](https://github.com/char0n/ramda-adjunct/issues/1235)
* add isIndexed ([#1337](https://github.com/char0n/ramda-adjunct/issues/1337)) ([c4447db](https://github.com/char0n/ramda-adjunct/commit/c4447db)), closes [#1236](https://github.com/char0n/ramda-adjunct/issues/1236)
* add skipTake ([#1338](https://github.com/char0n/ramda-adjunct/issues/1338)) ([10c4141](https://github.com/char0n/ramda-adjunct/commit/10c4141)), closes [#1237](https://github.com/char0n/ramda-adjunct/issues/1237)
* add sortByProps ([#1323](https://github.com/char0n/ramda-adjunct/issues/1323)) ([7d93795](https://github.com/char0n/ramda-adjunct/commit/7d93795)), closes [#1242](https://github.com/char0n/ramda-adjunct/issues/1242)



<a name="2.25.0"></a>
# [2.25.0](https://github.com/char0n/ramda-adjunct/compare/v2.24.0...v2.25.0) (2020-02-04)


### Features

* add padStart ([#1287](https://github.com/char0n/ramda-adjunct/issues/1287)) ([054e9aa](https://github.com/char0n/ramda-adjunct/commit/054e9aa)), closes [#1103](https://github.com/char0n/ramda-adjunct/issues/1103)
* add support for ramda 0.27.0 ([#1304](https://github.com/char0n/ramda-adjunct/issues/1304)) ([78d776b](https://github.com/char0n/ramda-adjunct/commit/78d776b))
* add trimCharsEnd ([11293cf](https://github.com/char0n/ramda-adjunct/commit/11293cf)), closes [#1136](https://github.com/char0n/ramda-adjunct/issues/1136)



<a name="2.24.0"></a>
# [2.24.0](https://github.com/char0n/ramda-adjunct/compare/v2.23.0...v2.24.0) (2020-01-15)


### Features

* add trimCharsStart ([#1254](https://github.com/char0n/ramda-adjunct/issues/1254)) ([21fdacd](https://github.com/char0n/ramda-adjunct/commit/21fdacd)), closes [#1135](https://github.com/char0n/ramda-adjunct/issues/1135)



<a name="2.23.0"></a>
# [2.23.0](https://github.com/char0n/ramda-adjunct/compare/v2.22.1...v2.23.0) (2019-11-25)


### Features

* **function:** add delayP ([#1107](https://github.com/char0n/ramda-adjunct/issues/1107)) ([b6c1856](https://github.com/char0n/ramda-adjunct/commit/b6c1856)), closes [#1099](https://github.com/char0n/ramda-adjunct/issues/1099)
* **function:** add lastP ([#1127](https://github.com/char0n/ramda-adjunct/issues/1127)) ([7fe4836](https://github.com/char0n/ramda-adjunct/commit/7fe4836)), closes [#816](https://github.com/char0n/ramda-adjunct/issues/816)



<a name="2.22.1"></a>
## [2.22.1](https://github.com/char0n/ramda-adjunct/compare/v2.22.0...v2.22.1) (2019-11-06)

* add funding field to package.json ([600ccc7](https://github.com/char0n/ramda-adjunct/commit/600ccc7))

<a name="2.22.0"></a>
# [2.22.0](https://github.com/char0n/ramda-adjunct/compare/v2.21.0...v2.22.0) (2019-11-01)


### Features

* **function:** add anyP ([#1080](https://github.com/char0n/ramda-adjunct/issues/1080)) ([f8e87a8](https://github.com/char0n/ramda-adjunct/commit/f8e87a8)), closes [#807](https://github.com/char0n/ramda-adjunct/issues/807)
* **function:** add firstP alias for anyP ([5926aa0](https://github.com/char0n/ramda-adjunct/commit/5926aa0))
* **function:** add noneP ([#1095](https://github.com/char0n/ramda-adjunct/issues/1095)) ([9eacf26](https://github.com/char0n/ramda-adjunct/commit/9eacf26)), closes [#814](https://github.com/char0n/ramda-adjunct/issues/814)
* **list:** add allUnique ([#1117](https://github.com/char0n/ramda-adjunct/issues/1117)) ([63a8f46](https://github.com/char0n/ramda-adjunct/commit/63a8f46)), closes [#515](https://github.com/char0n/ramda-adjunct/issues/515)
* **list:** add notAllUnique ([#1125](https://github.com/char0n/ramda-adjunct/issues/1125)) ([6d5005f](https://github.com/char0n/ramda-adjunct/commit/6d5005f)), closes [#515](https://github.com/char0n/ramda-adjunct/issues/515)
* **list:** add toArray [#342](https://github.com/char0n/ramda-adjunct/issues/342) ([#1085](https://github.com/char0n/ramda-adjunct/issues/1085)) ([eb0e66f](https://github.com/char0n/ramda-adjunct/commit/eb0e66f))
* **math:** add divideNum ([#1081](https://github.com/char0n/ramda-adjunct/issues/1081)) ([7b0c3b2](https://github.com/char0n/ramda-adjunct/commit/7b0c3b2)), closes [#482](https://github.com/char0n/ramda-adjunct/issues/482)
* **math:** add subtractNum ([#1082](https://github.com/char0n/ramda-adjunct/issues/1082)) ([7080706](https://github.com/char0n/ramda-adjunct/commit/7080706)), closes [#483](https://github.com/char0n/ramda-adjunct/issues/483)
* **object:** add pathOrLazy ([#1086](https://github.com/char0n/ramda-adjunct/issues/1086)) ([4fbf439](https://github.com/char0n/ramda-adjunct/commit/4fbf439)), closes [#1084](https://github.com/char0n/ramda-adjunct/issues/1084)
* **object:** add unzipObjWith ([#1130](https://github.com/char0n/ramda-adjunct/issues/1130)) ([64ce9b6](https://github.com/char0n/ramda-adjunct/commit/64ce9b6)), closes [#801](https://github.com/char0n/ramda-adjunct/issues/801)
* **object:** add zipObjWith ([#1132](https://github.com/char0n/ramda-adjunct/issues/1132)) ([b803a7a](https://github.com/char0n/ramda-adjunct/commit/b803a7a)), closes [#1129](https://github.com/char0n/ramda-adjunct/issues/1129)
* **replaceAll:** implement TC39 proposal ([#1124](https://github.com/char0n/ramda-adjunct/issues/1124)) ([74d5163](https://github.com/char0n/ramda-adjunct/commit/74d5163)), closes [#878](https://github.com/char0n/ramda-adjunct/issues/878)
* **string:** add padCharsEnd ([#1131](https://github.com/char0n/ramda-adjunct/issues/1131)) ([c3848be](https://github.com/char0n/ramda-adjunct/commit/c3848be)), closes [#1104](https://github.com/char0n/ramda-adjunct/issues/1104)
* **string:** add padCharsStart ([#1143](https://github.com/char0n/ramda-adjunct/issues/1143)) ([4a54edd](https://github.com/char0n/ramda-adjunct/commit/4a54edd))
* **string:** add padEnd ([ac4e319](https://github.com/char0n/ramda-adjunct/commit/ac4e319)), closes [#1105](https://github.com/char0n/ramda-adjunct/issues/1105)
* **string:** add trimEnd ([#1134](https://github.com/char0n/ramda-adjunct/issues/1134)) ([4b8ec88](https://github.com/char0n/ramda-adjunct/commit/4b8ec88)), closes [#808](https://github.com/char0n/ramda-adjunct/issues/808)
* **string:** add trimStart ([#1116](https://github.com/char0n/ramda-adjunct/issues/1116)) ([6ba2882](https://github.com/char0n/ramda-adjunct/commit/6ba2882)), closes [#808](https://github.com/char0n/ramda-adjunct/issues/808)
* **type:** add  isSafeInteger ([#1112](https://github.com/char0n/ramda-adjunct/issues/1112)) ([bcb1f98](https://github.com/char0n/ramda-adjunct/commit/bcb1f98)), closes [#747](https://github.com/char0n/ramda-adjunct/issues/747)
* **type:** add isMap ([#1120](https://github.com/char0n/ramda-adjunct/issues/1120)) ([fdd932a](https://github.com/char0n/ramda-adjunct/commit/fdd932a)), closes [#1113](https://github.com/char0n/ramda-adjunct/issues/1113)
* **type:** add isNegativeZero ([#1109](https://github.com/char0n/ramda-adjunct/issues/1109)) ([d209ac5](https://github.com/char0n/ramda-adjunct/commit/d209ac5)), closes [#784](https://github.com/char0n/ramda-adjunct/issues/784)
* **type:** add isSet ([#1114](https://github.com/char0n/ramda-adjunct/issues/1114)) ([00d6347](https://github.com/char0n/ramda-adjunct/commit/00d6347)), closes [#1110](https://github.com/char0n/ramda-adjunct/issues/1110)
* **type:** add isSymbol ([#1079](https://github.com/char0n/ramda-adjunct/issues/1079)) ([49268f9](https://github.com/char0n/ramda-adjunct/commit/49268f9)), closes [#806](https://github.com/char0n/ramda-adjunct/issues/806)
* **type:** isPositiveZero ([#1111](https://github.com/char0n/ramda-adjunct/issues/1111)) ([337c9d3](https://github.com/char0n/ramda-adjunct/commit/337c9d3))



<a name="2.21.0"></a>
# [2.21.0](https://github.com/char0n/ramda-adjunct/compare/v2.20.0...v2.21.0) (2019-09-25)


### Features

* **string:** add escapeRegExp ([6b676af](https://github.com/char0n/ramda-adjunct/commit/6b676af)), closes [#880](https://github.com/char0n/ramda-adjunct/issues/880)



<a name="2.20.0"></a>
# [2.20.0](https://github.com/char0n/ramda-adjunct/compare/v2.19.2...v2.20.0) (2019-09-08)


### Features

* **logic:** add nor ([#1023](https://github.com/char0n/ramda-adjunct/issues/1023)) ([608ff01](https://github.com/char0n/ramda-adjunct/commit/608ff01)), closes [#285](https://github.com/char0n/ramda-adjunct/issues/285)
* **type:** add isSparseArray predicate ([f8d439b](https://github.com/char0n/ramda-adjunct/commit/f8d439b)), closes [#785](https://github.com/char0n/ramda-adjunct/issues/785)



<a name="2.19.3"></a>
## [2.19.3](https://github.com/char0n/ramda-adjunct/compare/v2.19.2...v2.19.3) (2019-08-28)

* remove donations from postinstall script ([9acaf53](https://github.com/char0n/ramda-adjunct/commit/9acaf53))


<a name="2.19.2"></a>
## [2.19.2](https://github.com/char0n/ramda-adjunct/compare/v2.19.1...v2.19.2) (2019-08-27)


### Bug Fixes

* include donate script into npm distribution ([e477be3](https://github.com/char0n/ramda-adjunct/commit/e477be3))



<a name="2.19.1"></a>
## [2.19.1](https://github.com/char0n/ramda-adjunct/compare/v2.19.0...v2.19.1) (2019-08-27)

* **opencollective:** remove opencollective as dependency ([35f46ce](https://github.com/char0n/ramda-adjunct/commit/35f46ce)), closes [#1021](https://github.com/char0n/ramda-adjunct/issues/1021)

<a name="2.19.0"></a>
# [2.19.0](https://github.com/char0n/ramda-adjunct/compare/v2.18.0...v2.19.0) (2019-08-12)


### Features

* **isNotFloat:** add support for ramda placeholder ([4b9934f](https://github.com/char0n/ramda-adjunct/commit/4b9934f)), closes [#624](https://github.com/char0n/ramda-adjunct/issues/624)
* add flattenDepth ([#946](https://github.com/char0n/ramda-adjunct/issues/946)) ([3c4651a](https://github.com/char0n/ramda-adjunct/commit/3c4651a)), closes [#844](https://github.com/char0n/ramda-adjunct/issues/844)
* **logic:** add nand ([#952](https://github.com/char0n/ramda-adjunct/issues/952)) ([7931fa0](https://github.com/char0n/ramda-adjunct/commit/7931fa0)), closes [#237](https://github.com/char0n/ramda-adjunct/issues/237)



<a name="2.18.0"></a>
# [2.18.0](https://github.com/char0n/ramda-adjunct/compare/v2.17.0...v2.18.0) (2019-05-26)


### Bug Fixes

* **mergePath:**  fix TS typings ([#928](https://github.com/char0n/ramda-adjunct/issues/928)) ([4aebb39](https://github.com/char0n/ramda-adjunct/commit/4aebb39)), closes [#925](https://github.com/char0n/ramda-adjunct/issues/925)


### Features

* add isIterable ([#935](https://github.com/char0n/ramda-adjunct/issues/935)) ([8a67554](https://github.com/char0n/ramda-adjunct/commit/8a67554)), closes [#351](https://github.com/char0n/ramda-adjunct/issues/351)
* **cata:** add support for more catamorphic types ([adc3d11](https://github.com/char0n/ramda-adjunct/commit/adc3d11)), closes [#922](https://github.com/char0n/ramda-adjunct/issues/922)
* add allSettledP ([1e56c50](https://github.com/char0n/ramda-adjunct/commit/1e56c50)), closes [#761](https://github.com/char0n/ramda-adjunct/issues/761)
* add isNotNilOrEmpty ([#912](https://github.com/char0n/ramda-adjunct/issues/912)) ([3fedee4](https://github.com/char0n/ramda-adjunct/commit/3fedee4)), closes [#70](https://github.com/char0n/ramda-adjunct/issues/70)
* **isNegative:** add support Ramda placeholder ([86b7e1c](https://github.com/char0n/ramda-adjunct/commit/86b7e1c)), closes [#624](https://github.com/char0n/ramda-adjunct/issues/624)
* **isNilOrEmpty:** add support for Ramda placeholder ([22f4ec2](https://github.com/char0n/ramda-adjunct/commit/22f4ec2)), closes [#624](https://github.com/char0n/ramda-adjunct/issues/624)
* **isNonNegative:** add support for Ramda placeholder ([87f97de](https://github.com/char0n/ramda-adjunct/commit/87f97de)), closes [#624](https://github.com/char0n/ramda-adjunct/issues/624)
* **isNonPositive:** add support for Ramda placeholder ([b6b358f](https://github.com/char0n/ramda-adjunct/commit/b6b358f)), closes [#624](https://github.com/char0n/ramda-adjunct/issues/624)



<a name="2.17.0"></a>
# [2.17.0](https://github.com/char0n/ramda-adjunct/compare/v2.16.1...v2.17.0) (2019-04-14)


### Features

* add replaceAll ([84c7066](https://github.com/char0n/ramda-adjunct/commit/84c7066)), closes [#878](https://github.com/char0n/ramda-adjunct/issues/878)



<a name="2.16.1"></a>
## [2.16.1](https://github.com/char0n/ramda-adjunct/compare/v2.16.0...v2.16.1) (2019-02-19)


### Bug Fixes

* **typings:** remove accidental import ([3e7bfae](https://github.com/char0n/ramda-adjunct/commit/3e7bfae)), closes [#838](https://github.com/char0n/ramda-adjunct/issues/838)



<a name="2.16.0"></a>
# [2.16.0](https://github.com/char0n/ramda-adjunct/compare/v2.15.0...v2.16.0) (2019-02-17)


### Features

* add async ([cbd709f](https://github.com/char0n/ramda-adjunct/commit/cbd709f)), closes [#830](https://github.com/char0n/ramda-adjunct/issues/830)



<a name="2.15.0"></a>
# [2.15.0](https://github.com/char0n/ramda-adjunct/compare/v2.14.0...v2.15.0) (2019-02-10)


### Features

* add ceil ([d9dee2b](https://github.com/char0n/ramda-adjunct/commit/d9dee2b)), closes [#748](https://github.com/char0n/ramda-adjunct/issues/748)
* add floor ([0ce6fbe](https://github.com/char0n/ramda-adjunct/commit/0ce6fbe)), closes [#748](https://github.com/char0n/ramda-adjunct/issues/748)
* add round ([eab931c](https://github.com/char0n/ramda-adjunct/commit/eab931c)), closes [#106](https://github.com/char0n/ramda-adjunct/issues/106)
* add sign ([6d2a080](https://github.com/char0n/ramda-adjunct/commit/6d2a080)), closes [#748](https://github.com/char0n/ramda-adjunct/issues/748)
* add trunc ([ddfb12e](https://github.com/char0n/ramda-adjunct/commit/ddfb12e)), closes [#748](https://github.com/char0n/ramda-adjunct/issues/748)



<a name="2.14.0"></a>
# [2.14.0](https://github.com/char0n/ramda-adjunct/compare/v2.13.0...v2.14.0) (2019-01-24)


### Features

* **dispatch:** add support for currying ([6187992](https://github.com/char0n/ramda-adjunct/commit/6187992))
* **isArrayLike:** add support for currying ([a3e843c](https://github.com/char0n/ramda-adjunct/commit/a3e843c))
* **isAsyncFunction:** add support for ramda placeholder ([4747e6a](https://github.com/char0n/ramda-adjunct/commit/4747e6a)), closes [#624](https://github.com/char0n/ramda-adjunct/issues/624)
* **isBoolean:** add ramda placeholder support ([3c7ee1c](https://github.com/char0n/ramda-adjunct/commit/3c7ee1c)), closes [#624](https://github.com/char0n/ramda-adjunct/issues/624)
* **isDate:** add ramda placeholder support ([96d0772](https://github.com/char0n/ramda-adjunct/commit/96d0772)), closes [#624](https://github.com/char0n/ramda-adjunct/issues/624)
* **isEven:** add support for ramda placeholder ([47aae9c](https://github.com/char0n/ramda-adjunct/commit/47aae9c)), closes [#624](https://github.com/char0n/ramda-adjunct/issues/624)
* **isFinite:** add support for ramda placeholder ([3c8b161](https://github.com/char0n/ramda-adjunct/commit/3c8b161)), closes [#624](https://github.com/char0n/ramda-adjunct/issues/624)
* **isFloat:** add support for ramda placeholder ([8374ba9](https://github.com/char0n/ramda-adjunct/commit/8374ba9)), closes [#624](https://github.com/char0n/ramda-adjunct/issues/624)
* **isGeneratorFunction:** add support ramda placeholder ([84e8816](https://github.com/char0n/ramda-adjunct/commit/84e8816)), closes [#624](https://github.com/char0n/ramda-adjunct/issues/624)
* **isInteger:** add support for ramda placeholder ([69d9f2c](https://github.com/char0n/ramda-adjunct/commit/69d9f2c)), closes [#624](https://github.com/char0n/ramda-adjunct/issues/624)
* **isNaN:** add support for ramda placeholder ([ec09c4c](https://github.com/char0n/ramda-adjunct/commit/ec09c4c)), closes [#624](https://github.com/char0n/ramda-adjunct/issues/624)



<a name="2.13.0"></a>
# [2.13.0](https://github.com/char0n/ramda-adjunct/compare/v2.12.0...v2.13.0) (2018-12-08)


### Bug Fixes

* **isBoolean:** make this predicate work in different realms ([b89ade0](https://github.com/char0n/ramda-adjunct/commit/b89ade0)), closes [#724](https://github.com/char0n/ramda-adjunct/issues/724)
* **isDate:** make this predicate work in different realms ([1963c2d](https://github.com/char0n/ramda-adjunct/commit/1963c2d)), closes [#724](https://github.com/char0n/ramda-adjunct/issues/724)
* **isRegExp:** make this predicate work in different realms ([f0150a9](https://github.com/char0n/ramda-adjunct/commit/f0150a9)), closes [#724](https://github.com/char0n/ramda-adjunct/issues/724)


### Features

* add support for ramda@0.26.1 ([2de8c22](https://github.com/char0n/ramda-adjunct/commit/2de8c22))



<a name="2.12.0"></a>
# [2.12.0](https://github.com/char0n/ramda-adjunct/compare/v2.11.0...v2.12.0) (2018-11-25)

### Bug Fixes

* **renameKeysWith**: use lenses instead of adjust to support ramda@0.26.0 ([43839f3](https://github.com/char0n/ramda-adjunct/commit/43839f3))

### Features

* add support for ramda@0.26.0 ([7849c62](https://github.com/char0n/ramda-adjunct/commit/7849c62))
* deprecate `contained`; add new alias to `contained` as `included` ([c8ef8a4](https://github.com/char0n/ramda-adjunct/commit/c8ef8a4))
* deprecate `hasPath`; ramda@0.26.0 contains it as `R.hasPath` ([2f475d2](https://github.com/char0n/ramda-adjunct/commit/2f475d2))
* deprecate `mergeRight`; add new alias to `mergeRight` as `mergeLeft`; ramda@0.26.0 contains it as `R.mergeLeft` ([7849c62](https://github.com/char0n/ramda-adjunct/commit/7849c62))
* deprecate `thenP`; ramda@0.26.0 contains it as `R.then` ([a4c3475](https://github.com/char0n/ramda-adjunct/commit/a4c3475))
* add alias `then` to `thenP` ([3ebd1ee](https://github.com/char0n/ramda-adjunct/commit/3ebd1ee))


<a name="2.11.0"></a>
# [2.11.0](https://github.com/char0n/ramda-adjunct/compare/v2.10.0...v2.11.0) (2018-10-28)


### Features

* add allEqualTo ([d14dac9](https://github.com/char0n/ramda-adjunct/commit/d14dac9)), closes [#525](https://github.com/char0n/ramda-adjunct/issues/525)
* add allIdentical ([c5267f5](https://github.com/char0n/ramda-adjunct/commit/c5267f5)), closes [#578](https://github.com/char0n/ramda-adjunct/issues/578)
* add allIdenticalTo ([fb61085](https://github.com/char0n/ramda-adjunct/commit/fb61085)), closes [#525](https://github.com/char0n/ramda-adjunct/issues/525)
* add repeatStr ([f1c5dfa](https://github.com/char0n/ramda-adjunct/commit/f1c5dfa)), closes [#667](https://github.com/char0n/ramda-adjunct/issues/667)



<a name="2.10.0"></a>
# [2.10.0](https://github.com/char0n/ramda-adjunct/compare/v2.9.0...v2.10.0) (2018-09-09)


### Features

* add dropArgs ([197b3f1](https://github.com/char0n/ramda-adjunct/commit/197b3f1)), closes [#679](https://github.com/char0n/ramda-adjunct/issues/679)
* add support for ramda placeholder ([9539e92](https://github.com/char0n/ramda-adjunct/commit/9539e92)), closes [#624](https://github.com/char0n/ramda-adjunct/issues/624)



<a name="2.9.0"></a>
# [2.9.0](https://github.com/char0n/ramda-adjunct/compare/v2.8.0...v2.9.0) (2018-05-29)


### Features

* add allEqual ([#572](https://github.com/char0n/ramda-adjunct/issues/572)) ([c362939](https://github.com/char0n/ramda-adjunct/commit/c362939))



<a name="2.8.0"></a>
# [2.8.0](https://github.com/char0n/ramda-adjunct/compare/v2.7.0...v2.8.0) (2018-05-13)


### Features

* add contained ([#510](https://github.com/char0n/ramda-adjunct/issues/510)) ([381f2df](https://github.com/char0n/ramda-adjunct/commit/381f2df)), closes [#392](https://github.com/char0n/ramda-adjunct/issues/392)
* add lengthEq and lengthNotEq ([#552](https://github.com/char0n/ramda-adjunct/issues/552)) ([f71ad1e](https://github.com/char0n/ramda-adjunct/commit/f71ad1e)), closes [#444](https://github.com/char0n/ramda-adjunct/issues/444)
* add lengthLt, lengthGt, lengthLte, lengthGte ([47d4560](https://github.com/char0n/ramda-adjunct/commit/47d4560))
* add move ([#507](https://github.com/char0n/ramda-adjunct/issues/507)) ([22ecfc0](https://github.com/char0n/ramda-adjunct/commit/22ecfc0)), closes [#485](https://github.com/char0n/ramda-adjunct/issues/485)
* add thenP ([#551](https://github.com/char0n/ramda-adjunct/issues/551)) ([92ba7b5](https://github.com/char0n/ramda-adjunct/commit/92ba7b5)), closes [#35](https://github.com/char0n/ramda-adjunct/issues/35)



<a name="2.7.0"></a>
# [2.7.0](https://github.com/char0n/ramda-adjunct/compare/v2.6.0...v2.7.0) (2018-04-25)


### Features

* add argsPass ([#437](https://github.com/char0n/ramda-adjunct/issues/437)) ([f7d7f7c](https://github.com/char0n/ramda-adjunct/commit/f7d7f7c)), closes [#370](https://github.com/char0n/ramda-adjunct/issues/370)
* add inRange ([#436](https://github.com/char0n/ramda-adjunct/issues/436)) ([9937600](https://github.com/char0n/ramda-adjunct/commit/9937600)), closes [#393](https://github.com/char0n/ramda-adjunct/issues/393)
* add traversable lenses ([#494](https://github.com/char0n/ramda-adjunct/issues/494)) ([d34be73](https://github.com/char0n/ramda-adjunct/commit/d34be73))



<a name="2.6.0"></a>
# [2.6.0](https://github.com/char0n/ramda-adjunct/compare/v2.5.0...v2.6.0) (2018-03-19)


### Features

* add concatAll ([#404](https://github.com/char0n/ramda-adjunct/issues/404)) ([341f3f1](https://github.com/char0n/ramda-adjunct/commit/341f3f1)), closes [#109](https://github.com/char0n/ramda-adjunct/issues/109)
* add dispatch ([#407](https://github.com/char0n/ramda-adjunct/issues/407)) ([fb5aa08](https://github.com/char0n/ramda-adjunct/commit/fb5aa08)), closes [#66](https://github.com/char0n/ramda-adjunct/issues/66)
* add ensureArray ([#375](https://github.com/char0n/ramda-adjunct/issues/375)) ([7b60189](https://github.com/char0n/ramda-adjunct/commit/7b60189)), closes [#371](https://github.com/char0n/ramda-adjunct/issues/371)
* add isNonPositive, isNonNegative ([#434](https://github.com/char0n/ramda-adjunct/issues/434)) ([8d62dc1](https://github.com/char0n/ramda-adjunct/commit/8d62dc1)), closes [#324](https://github.com/char0n/ramda-adjunct/issues/324)
* add isTrue, isFalse ([#435](https://github.com/char0n/ramda-adjunct/issues/435)) ([9687b51](https://github.com/char0n/ramda-adjunct/commit/9687b51)), closes [#255](https://github.com/char0n/ramda-adjunct/issues/255)
* add omitBy ([#376](https://github.com/char0n/ramda-adjunct/issues/376)) ([c7c9c7e](https://github.com/char0n/ramda-adjunct/commit/c7c9c7e)), closes [#171](https://github.com/char0n/ramda-adjunct/issues/171)



<a name="2.5.0"></a>
# [2.5.0](https://github.com/char0n/ramda-adjunct/compare/v2.4.1...v2.5.0) (2018-02-14)


### Bug Fixes

* remove defaults from mergeRight aliases ([#344](https://github.com/char0n/ramda-adjunct/issues/344)) ([6e13e7c](https://github.com/char0n/ramda-adjunct/commit/6e13e7c)), closes [#338](https://github.com/char0n/ramda-adjunct/issues/338)


### Features

* **nonePass:** Add complement of Ramda’s anyPass ([#327](https://github.com/char0n/ramda-adjunct/issues/327)) ([6b875ea](https://github.com/char0n/ramda-adjunct/commit/6b875ea)), closes [#234](https://github.com/char0n/ramda-adjunct/issues/234)
* add appendFlipped ([#347](https://github.com/char0n/ramda-adjunct/issues/347)) ([9a30238](https://github.com/char0n/ramda-adjunct/commit/9a30238)), closes [#333](https://github.com/char0n/ramda-adjunct/issues/333)
* add compact ([#331](https://github.com/char0n/ramda-adjunct/issues/331)) ([865a2ce](https://github.com/char0n/ramda-adjunct/commit/865a2ce)), closes [#127](https://github.com/char0n/ramda-adjunct/issues/127)
* add mapIndexed ([#345](https://github.com/char0n/ramda-adjunct/issues/345)) ([3fcd0c2](https://github.com/char0n/ramda-adjunct/commit/3fcd0c2)), closes [#282](https://github.com/char0n/ramda-adjunct/issues/282)
* add reduceIndexed ([#357](https://github.com/char0n/ramda-adjunct/issues/357)) ([ea6fd59](https://github.com/char0n/ramda-adjunct/commit/ea6fd59)), closes [#281](https://github.com/char0n/ramda-adjunct/issues/281)
* add isRegExp ([#346](https://github.com/char0n/ramda-adjunct/issues/325)) ([3ad18cd](https://github.com/char0n/ramda-adjunct/commit/3ad18cd)), closes [#325](https://github.com/char0n/ramda-adjunct/issues/325)
* add isNotRegExp ([#346](https://github.com/char0n/ramda-adjunct/issues/325)) ([3ad18cd](https://github.com/char0n/ramda-adjunct/commit/3ad18cd)), closes [#325](https://github.com/char0n/ramda-adjunct/issues/325)




<a name="2.4.1"></a>
## [2.4.1](https://github.com/char0n/ramda-adjunct/compare/v2.4.0...v2.4.1) (2018-01-25)

* fix failed build for 2.4.0 release


<a name="2.4.0"></a>
# [2.4.0](https://github.com/char0n/ramda-adjunct/compare/v2.3.0...v2.4.0) (2018-01-24)


### Features

* add isEmptyArray ([#288](https://github.com/char0n/ramda-adjunct/issues/288)) ([961692e](https://github.com/char0n/ramda-adjunct/commit/961692e)), closes [#279](https://github.com/char0n/ramda-adjunct/issues/279)
* add isEmptyString ([08d80e9](https://github.com/char0n/ramda-adjunct/commit/08d80e9)), closes [#40](https://github.com/char0n/ramda-adjunct/issues/40)
* add isNonEmptyArray ([#289](https://github.com/char0n/ramda-adjunct/issues/289)) ([464060e](https://github.com/char0n/ramda-adjunct/commit/464060e)), closes [#279](https://github.com/char0n/ramda-adjunct/issues/279)
* add isNonEmptyString ([#299](https://github.com/char0n/ramda-adjunct/issues/299)) ([cd94a5f](https://github.com/char0n/ramda-adjunct/commit/cd94a5f)), closes [#40](https://github.com/char0n/ramda-adjunct/issues/40)
* add notAllPass ([#308](https://github.com/char0n/ramda-adjunct/issues/308)) ([2aa3d2f](https://github.com/char0n/ramda-adjunct/commit/2aa3d2f)), closes [#234](https://github.com/char0n/ramda-adjunct/issues/234)
* add pathNotEq ([#297](https://github.com/char0n/ramda-adjunct/issues/297)) ([fc0716f](https://github.com/char0n/ramda-adjunct/commit/fc0716f)), closes [#217](https://github.com/char0n/ramda-adjunct/issues/217)



<a name="2.3.0"></a>
# [2.3.0](https://github.com/char0n/ramda-adjunct/compare/v2.2.0...v2.3.0) (2018-01-14)


### Features

* add notBoth ([#260](https://github.com/char0n/ramda-adjunct/issues/260)) ([a214f75](https://github.com/char0n/ramda-adjunct/commit/a214f75)), closes [#234](https://github.com/char0n/ramda-adjunct/issues/234)
* add allP ([#269](https://github.com/char0n/ramda-adjunct/issues/269)) ([c430af6](https://github.com/char0n/ramda-adjunct/commit/c430af6)), closes [#35](https://github.com/char0n/ramda-adjunct/issues/35)
* add neither ([#273](https://github.com/char0n/ramda-adjunct/issues/273)) ([5294011](https://github.com/char0n/ramda-adjunct/commit/5294011)), closes [#234](https://github.com/char0n/ramda-adjunct/issues/234)
* add propNotEq ([#275](https://github.com/char0n/ramda-adjunct/issues/275)) ([82da044](https://github.com/char0n/ramda-adjunct/commit/82da044)), closes [#238](https://github.com/char0n/ramda-adjunct/issues/238)
* add sequencing combinator ([#257](https://github.com/char0n/ramda-adjunct/issues/257)) ([04ffd3d](https://github.com/char0n/ramda-adjunct/commit/04ffd3d)), closes [#173](https://github.com/char0n/ramda-adjunct/issues/173)
* add Y combinator ([dbdf6af](https://github.com/char0n/ramda-adjunct/commit/dbdf6af)), closes [#130](https://github.com/char0n/ramda-adjunct/issues/130)



<a name="2.2.0"></a>
# [2.2.0](https://github.com/char0n/ramda-adjunct/compare/v2.1.0...v2.2.0) (2017-12-24)


### Features

* add defaultWhen ([#245](https://github.com/char0n/ramda-adjunct/issues/245)) ([3606048](https://github.com/char0n/ramda-adjunct/commit/3606048)), closes [#216](https://github.com/char0n/ramda-adjunct/issues/216)
* add isFalsy ([1612941](https://github.com/char0n/ramda-adjunct/commit/1612941)), closes [#66](https://github.com/char0n/ramda-adjunct/issues/66)
* add isTruthy ([f09f72e](https://github.com/char0n/ramda-adjunct/commit/f09f72e)), closes [#66](https://github.com/char0n/ramda-adjunct/issues/66)
* add isValidNumber, isNotValidNumber ([#247](https://github.com/char0n/ramda-adjunct/issues/247)) ([d94c1b5](https://github.com/char0n/ramda-adjunct/commit/d94c1b5)), closes [#235](https://github.com/char0n/ramda-adjunct/issues/235)



<a name="2.1.0"></a>
# [2.1.0](https://github.com/char0n/ramda-adjunct/compare/v2.0.0...v2.1.0) (2017-12-04)


### Features

* add stubArray ([44e9760](https://github.com/char0n/ramda-adjunct/commit/44e9760))
* add stubObj ([2fce473](https://github.com/char0n/ramda-adjunct/commit/2fce473))
* add stubString ([7dc4f39](https://github.com/char0n/ramda-adjunct/commit/7dc4f39))
* add isThenable ([b9f6e0d](https://github.com/char0n/ramda-adjunct/commit/b9f6e0d))
* add isPromise ([f00e93f](https://github.com/char0n/ramda-adjunct/commit/f00e93f))



<a name="2.0.0"></a>
# [2.0.0](https://github.com/char0n/ramda-adjunct/compare/v1.19.0...v2.0.0) (2017-11-19)


### Features

* add support for tree shaking ([baa62ea](https://github.com/char0n/ramda-adjunct/commit/baa62ea)), closes [#75](https://github.com/char0n/ramda-adjunct/issues/75)
* add search to documentation & improve the UI ([2ae5850](https://github.com/char0n/ramda-adjunct/commit/2ae5850)), closes [#24](https://github.com/char0n/ramda-adjunct/issues/24)


### BREAKING CHANGES

* Tree shaking support and imports

Before:

import RA from 'ramda-adjunct'

After:

import * as RA from 'ramda-adjunct'



<a name="1.19.0"></a>
# [1.19.0](https://github.com/char0n/ramda-adjunct/compare/v1.18.0...v1.19.0) (2017-10-31)


### Bug Fixes

* **pickIndexes:** omits values for non existing indexes ([cb82b9e](https://github.com/char0n/ramda-adjunct/commit/cb82b9e)), closes [#181](https://github.com/char0n/ramda-adjunct/issues/181)
* **typings:** add missed types to concatRight, sliceFrom, sliceTo, liftFN ([96a31cb](https://github.com/char0n/ramda-adjunct/commit/96a31cb)), closes [#176](https://github.com/char0n/ramda-adjunct/issues/176)


### Features

* add isPair, isNotPair ([#168](https://github.com/char0n/ramda-adjunct/issues/168)) ([6e6e6e5](https://github.com/char0n/ramda-adjunct/commit/6e6e6e5)), closes [#90](https://github.com/char0n/ramda-adjunct/issues/90)
* add lensIso ([#165](https://github.com/char0n/ramda-adjunct/issues/165)) ([0421890](https://github.com/char0n/ramda-adjunct/commit/0421890)), closes [#178](https://github.com/char0n/ramda-adjunct/issues/178)
* add flattenProp & flattenPath ([#182](https://github.com/char0n/ramda-adjunct/issues/182)) ([046cd02](https://github.com/char0n/ramda-adjunct/commit/046cd02))
* add spreadProp & spreadPath ([#183](https://github.com/char0n/ramda-adjunct/issues/183)) ([3e8db40](https://github.com/char0n/ramda-adjunct/commit/3e8db40))
* add omitIndexes ([#180](https://github.com/char0n/ramda-adjunct/issues/180)) ([d65a42d](https://github.com/char0n/ramda-adjunct/commit/d65a42d))



<a name="1.18.0"></a>
# [1.18.0](https://github.com/char0n/ramda-adjunct/compare/v1.17.0...v1.18.0) (2017-10-15)


### Features

* add isEven ([aff8308](https://github.com/char0n/ramda-adjunct/commit/aff8308)), closes [#98](https://github.com/char0n/ramda-adjunct/issues/98)
* add isOdd ([7d7cfcd](https://github.com/char0n/ramda-adjunct/commit/7d7cfcd))
* add mergePath, mergeProp ([2725289](https://github.com/char0n/ramda-adjunct/commit/2725289)), closes [#147](https://github.com/char0n/ramda-adjunct/issues/147)



<a name="1.17.0"></a>
# [1.17.0](https://github.com/char0n/ramda-adjunct/compare/v1.16.0...v1.17.0) (2017-09-24)


### Features

* add mergePaths ([dd8b681](https://github.com/char0n/ramda-adjunct/commit/dd8b681)), closes [#136](https://github.com/char0n/ramda-adjunct/issues/136)
* add mergeProps ([4c68054](https://github.com/char0n/ramda-adjunct/commit/4c68054))



<a name="1.16.0"></a>
# [1.16.0](https://github.com/char0n/ramda-adjunct/compare/v1.15.0...v1.16.0) (2017-09-19)


### Features

* add rejectP ([02451f3](https://github.com/char0n/ramda-adjunct/commit/02451f3))
* add resolveP ([9d057b1](https://github.com/char0n/ramda-adjunct/commit/9d057b1))
* add sliceFrom ([db3a1d2](https://github.com/char0n/ramda-adjunct/commit/db3a1d2))
* add sliceTo ([4408418](https://github.com/char0n/ramda-adjunct/commit/4408418))



<a name="1.15.0"></a>
# [1.15.0](https://github.com/char0n/ramda-adjunct/compare/v1.14.0...v1.15.0) (2017-09-10)


### Features

* add isNegative ([e593104](https://github.com/char0n/ramda-adjunct/commit/e593104))
* add isPositive ([040d335](https://github.com/char0n/ramda-adjunct/commit/040d335))



<a name="1.14.0"></a>
# [1.14.0](https://github.com/char0n/ramda-adjunct/compare/v1.13.0...v1.14.0) (2017-08-25)


### Bug Fixes

* **reduceP, reduceRightP:** fix logic for empty list ([6538444](https://github.com/char0n/ramda-adjunct/commit/6538444))


### Features

* **Identity:** add contravariant fantasy-land specification ([1bd5beb](https://github.com/char0n/ramda-adjunct/commit/1bd5beb))
* add hasPath ([06c7364](https://github.com/char0n/ramda-adjunct/commit/06c7364)), closes [#125](https://github.com/char0n/ramda-adjunct/issues/125)
* add isFloat ([40d74e6](https://github.com/char0n/ramda-adjunct/commit/40d74e6))
* add isNotFloat ([652d317](https://github.com/char0n/ramda-adjunct/commit/652d317))



<a name="1.13.0"></a>
# [1.13.0](https://github.com/char0n/ramda-adjunct/compare/v1.12.0...v1.13.0) (2017-08-15)


### Bug Fixes

* **defaults:** fix wrong logic ([fbc373f](https://github.com/char0n/ramda-adjunct/commit/fbc373f))
* **docs:** fix version in JSDOC ([4696ae2](https://github.com/char0n/ramda-adjunct/commit/4696ae2))
* **reduceRightP:** compensate for older versions of ramda ([3e5b327](https://github.com/char0n/ramda-adjunct/commit/3e5b327))


### Features

* **reduceP** ([d721126](https://github.com/char0n/ramda-adjunct/commit/d721126))
* **reduceRightP** ([81d3d09](https://github.com/char0n/ramda-adjunct/commit/81d3d09)), closes [#114](https://github.com/char0n/ramda-adjunct/issues/114)
* **lenses:** lensSatisfies & lensNotSatisfy ([1c351c2](https://github.com/char0n/ramda-adjunct/commit/1c351c2))
* **viewOr** ([f494dc1](https://github.com/char0n/ramda-adjunct/commit/f494dc1))
* **lenses:** lensEq & lensNotEq  ([7dd4b20](https://github.com/char0n/ramda-adjunct/commit/7dd4b20))



<a name="1.12.0"></a>
# [1.12.0](https://github.com/char0n/ramda-adjunct/compare/v1.11.0...v1.12.0) (2017-07-30)


### Features

* add curryRight ([0988114](https://github.com/char0n/ramda-adjunct/commit/0988114))
* add curryRightN ([c8c9dd5](https://github.com/char0n/ramda-adjunct/commit/c8c9dd5))



<a name="1.11.0"></a>
# [1.11.0](https://github.com/char0n/ramda-adjunct/compare/v1.10.2...v1.11.0) (2017-07-23)


### Features

* add concatRight ([7628612](https://github.com/char0n/ramda-adjunct/commit/7628612)), closes [#93](https://github.com/char0n/ramda-adjunct/issues/93)
* **Identity:** add Ord fantasy-land spec ([76d94d7](https://github.com/char0n/ramda-adjunct/commit/76d94d7))
* **Identity:** add partial Monoid* specification ([da1f379](https://github.com/char0n/ramda-adjunct/commit/da1f379))



<a name="1.10.2"></a>
## [1.10.2](https://github.com/char0n/ramda-adjunct/compare/v1.10.0...v1.10.2) (2017-06-20)

* fixes crashed build for 1.10.1

<a name="1.10.1"></a>
# [1.10.1](https://github.com/char0n/ramda-adjunct/compare/v1.10.0...v1.10.1) (2017-06-20)

* fixes crashed build for 1.10.0

<a name="1.10.0"></a>
# [1.10.0](https://github.com/char0n/ramda-adjunct/compare/v1.9.0...v1.10.0) (2017-06-20)


### Features

* add weaveLazy ([8b665d3](https://github.com/char0n/ramda-adjunct/commit/8b665d3))



<a name="1.9.0"></a>
# [1.9.0](https://github.com/char0n/ramda-adjunct/compare/v1.8.1...v1.9.0) (2017-06-14)


### Features

* add support for ramda >= 0.19.0 <= 0.24.1 ([b414d1c](https://github.com/char0n/ramda-adjunct/commit/b414d1c))
* add isArrayLike ([3062a89](https://github.com/char0n/ramda-adjunct/commit/3062a89))


<a name="1.8.1"></a>
## [1.8.1](https://github.com/char0n/ramda-adjunct/compare/v1.8.0...v1.8.1) (2017-05-23)


### Bug Fixes

* Fixes corrupted build on npm


<a name="1.8.0"></a>
# [1.8.0](https://github.com/char0n/ramda-adjunct/compare/v1.7.0...v1.8.0) (2017-05-22)


### Features

* **Identity:** add Identity monadic type to public API ([5130a73](https://github.com/char0n/ramda-adjunct/commit/5130a73))
* **weave:** add support for auto-currying returned function ([7fcf7a9](https://github.com/char0n/ramda-adjunct/commit/7fcf7a9)), closes [#78](https://github.com/char0n/ramda-adjunct/issues/78)
* add isValidDate ([3a2f4ad](https://github.com/char0n/ramda-adjunct/commit/3a2f4ad))
* isNotValidDate ([10d3780](https://github.com/char0n/ramda-adjunct/commit/10d3780)), closes [#46](https://github.com/char0n/ramda-adjunct/issues/46)



<a name="1.7.0"></a>
# [1.7.0](https://github.com/char0n/ramda-adjunct/compare/v1.6.0...v1.7.0) (2017-05-18)


### Bug Fixes

* **package.json:** point browser field to es/index.js ([aaa018e](https://github.com/char0n/ramda-adjunct/commit/aaa018e)), closes [#76](https://github.com/char0n/ramda-adjunct/issues/76)


### Features

* add weave ([118daf9](https://github.com/char0n/ramda-adjunct/commit/118daf9)), closes [#65](https://github.com/char0n/ramda-adjunct/issues/65)



<a name="1.6.0"></a>
# [1.6.0](https://github.com/char0n/ramda-adjunct/compare/v1.5.0...v1.6.0) (2017-05-16)


### Features

* **Identity:** add Setoid spec to Identity ([3c62ad6](https://github.com/char0n/ramda-adjunct/commit/3c62ad6))
* add mergeRight ([25051aa](https://github.com/char0n/ramda-adjunct/commit/25051aa))
* add stubNull ([7c71292](https://github.com/char0n/ramda-adjunct/commit/7c71292)), closes [#71](https://github.com/char0n/ramda-adjunct/issues/71)



<a name="1.5.0"></a>
# [1.5.0](https://github.com/char0n/ramda-adjunct/compare/v1.4.0...v1.5.0) (2017-05-10)


### Features

* add renameKeys ([1a2538e](https://github.com/char0n/ramda-adjunct/commit/1a2538e))
* add renameKeysWith ([fb5059c](https://github.com/char0n/ramda-adjunct/commit/fb5059c))
* expose ap as internal util ([16e2535](https://github.com/char0n/ramda-adjunct/commit/16e2535)), closes [#64](https://github.com/char0n/ramda-adjunct/issues/64)



<a name="1.4.0"></a>
# [1.4.0](https://github.com/char0n/ramda-adjunct/compare/v1.3.2...v1.4.0) (2017-04-28)


### Bug Fixes

* **isGeneratorFunction:** check for GeneratorFunction instead of AsyncFunction ([853f934](https://github.com/char0n/ramda-adjunct/commit/853f934))


### Features

* add cata ([1c6fdc6](https://github.com/char0n/ramda-adjunct/commit/1c6fdc6)), closes [#58](https://github.com/char0n/ramda-adjunct/issues/58)
* **Either:** add Either monad with basic capabilities ([ac2c51f](https://github.com/char0n/ramda-adjunct/commit/ac2c51f))



<a name="1.3.2"></a>
## [1.3.2](https://github.com/char0n/ramda-adjunct/compare/v1.3.1...v1.3.2) (2017-04-23)


### Bug Fixes

* **liftFN:** fix multiple bugs and resolve ramda complatibility issue ([47bc23f](https://github.com/char0n/ramda-adjunct/commit/47bc23f)), closes [#59](https://github.com/char0n/ramda-adjunct/issues/59)



<a name="1.3.1"></a>
## [1.3.1](https://github.com/char0n/ramda-adjunct/compare/v1.3.0...v1.3.1) (2017-04-20)

* fix linting issues

<a name="1.3.0"></a>
# [1.3.0](https://github.com/char0n/ramda-adjunct/compare/v1.2.0...v1.3.0) (2017-04-20)

* fix missing function imports

<a name="1.2.0"></a>
# [1.2.0](https://github.com/char0n/ramda-adjunct/compare/v1.1.0...v1.2.0) (2017-04-16)


### Features

* add defaults alias to merge ([9a3aa17](https://github.com/char0n/ramda-adjunct/commit/9a3aa17))
* add liftF ([b475d5d](https://github.com/char0n/ramda-adjunct/commit/b475d5d))
* add liftFN ([f65a52e](https://github.com/char0n/ramda-adjunct/commit/f65a52e))
* add paths ([c409d6b](https://github.com/char0n/ramda-adjunct/commit/c409d6b)), closes [#54](https://github.com/char0n/ramda-adjunct/issues/54)
* add resetToDefault ([d5202fb](https://github.com/char0n/ramda-adjunct/commit/d5202fb))



<a name="1.1.0"></a>
# [1.1.0](https://github.com/char0n/ramda-adjunct/compare/v1.0.0...v1.1.0) (2017-04-09)


### Features

* add list ([30506b1](https://github.com/char0n/ramda-adjunct/commit/30506b1))
* add pickIndexes ([17cc387](https://github.com/char0n/ramda-adjunct/commit/17cc387))



<a name="1.0.0"></a>
# [1.0.0](https://github.com/char0n/ramda-adjunct/compare/v0.7.0...v1.0.0) (2017-04-02)


### Features

* add noop ([38877c5](https://github.com/char0n/ramda-adjunct/commit/38877c5)), closes [#36](https://github.com/char0n/ramda-adjunct/issues/36)
* add stubUndefined ([7e47e45](https://github.com/char0n/ramda-adjunct/commit/7e47e45)), closes [#49](https://github.com/char0n/ramda-adjunct/issues/49)
* use es2015 imports ([8e86019](https://github.com/char0n/ramda-adjunct/commit/8e86019))



<a name="0.7.0"></a>
# [0.7.0](https://github.com/char0n/ramda-adjunct/compare/v0.6.0...v0.7.0) (2017-03-26)


### Features

* add isNotInteger ([494094d](https://github.com/char0n/ramda-adjunct/commit/494094d)), closes [#10](https://github.com/char0n/ramda-adjunct/issues/10)
* isFinite ([f3ed894](https://github.com/char0n/ramda-adjunct/commit/f3ed894))
* isInteger ([466db58](https://github.com/char0n/ramda-adjunct/commit/466db58))
* isNotFinite ([1edbebc](https://github.com/char0n/ramda-adjunct/commit/1edbebc))



<a name="0.6.0"></a>
# [0.6.0](https://github.com/char0n/ramda-adjunct/compare/v0.5.1...v0.6.0) (2017-03-16)


### Features

* add isDate ([5fbd348](https://github.com/char0n/ramda-adjunct/commit/5fbd348))
* add isNaN ([3111de3](https://github.com/char0n/ramda-adjunct/commit/3111de3))
* add isNotDate ([4ffa958](https://github.com/char0n/ramda-adjunct/commit/4ffa958))
* add isNotNaN ([fdc83c1](https://github.com/char0n/ramda-adjunct/commit/fdc83c1))
* add isNotNumber ([a3a0758](https://github.com/char0n/ramda-adjunct/commit/a3a0758))
* as isNumber ([d76d5fd](https://github.com/char0n/ramda-adjunct/commit/d76d5fd))



<a name="0.5.1"></a>
## [0.5.1](https://github.com/char0n/ramda-adjunct/compare/v0.5.0...v0.5.1) (2017-03-06)



<a name="0.5.0"></a>
# [0.5.0](https://github.com/char0n/ramda-adjunct/compare/v0.4.0...v0.5.0) (2017-03-06)


### Bug Fixes

* **isGeneratorFunction:** add legacy check ([24969a6](https://github.com/char0n/ramda-adjunct/commit/24969a6))


### Features

* add isFunction ([c0e45e7](https://github.com/char0n/ramda-adjunct/commit/c0e45e7))
* **typescript:** add support for typescript by typings ([1ff7c61](https://github.com/char0n/ramda-adjunct/commit/1ff7c61))
* add isAsyncFunction ([b72a040](https://github.com/char0n/ramda-adjunct/commit/b72a040))
* add isGeneratorFunction ([08ee74b](https://github.com/char0n/ramda-adjunct/commit/08ee74b))
* add isNotArrayLike ([dbf09b9](https://github.com/char0n/ramda-adjunct/commit/dbf09b9)), closes [#33](https://github.com/char0n/ramda-adjunct/issues/33)
* add isNotAsyncFunction ([8194de9](https://github.com/char0n/ramda-adjunct/commit/8194de9))
* add isNotFunction ([82b8295](https://github.com/char0n/ramda-adjunct/commit/82b8295)), closes [#31](https://github.com/char0n/ramda-adjunct/issues/31)
* add isNotObjectLike ([9233e00](https://github.com/char0n/ramda-adjunct/commit/9233e00))
* add isNotPlainObject ([1d39f44](https://github.com/char0n/ramda-adjunct/commit/1d39f44))
* add isObject ([9f6e64a](https://github.com/char0n/ramda-adjunct/commit/9f6e64a))
* add isObjectLike ([52b1917](https://github.com/char0n/ramda-adjunct/commit/52b1917))
* add isPlainObject ([6e14291](https://github.com/char0n/ramda-adjunct/commit/6e14291))
* isNotGeneratorFunction ([ffba8cd](https://github.com/char0n/ramda-adjunct/commit/ffba8cd))
* isNotObject ([aa4a0df](https://github.com/char0n/ramda-adjunct/commit/aa4a0df))



<a name="0.4.0"></a>
# [0.4.0](https://github.com/char0n/ramda-adjunct/compare/v0.3.0...v0.4.0) (2017-02-27)


### Bug Fixes

* fix import of isNilOrEmpty ([7de3f33](https://github.com/char0n/ramda-adjunct/commit/7de3f33))


### Features

* add isNilOrEmpty ([a42d429](https://github.com/char0n/ramda-adjunct/commit/a42d429)), closes [#21](https://github.com/char0n/ramda-adjunct/issues/21)
* add isNotEmpty ([791f81b](https://github.com/char0n/ramda-adjunct/commit/791f81b)), closes [#19](https://github.com/char0n/ramda-adjunct/issues/19)
* add isString, isNotString ([15a4deb](https://github.com/char0n/ramda-adjunct/commit/15a4deb))



<a name="0.3.0"></a>
# [0.3.0](https://github.com/char0n/ramda-adjunct/compare/v0.2.0...v0.3.0) (2017-02-16)


### Features

* add isArray ([5bf4ab9](https://github.com/char0n/ramda-adjunct/commit/5bf4ab9))
* add isBoolean, isNotBoolean ([5400527](https://github.com/char0n/ramda-adjunct/commit/5400527))
* add isNotArray ([17d11c2](https://github.com/char0n/ramda-adjunct/commit/17d11c2))
* add isNotNil ([f49962a](https://github.com/char0n/ramda-adjunct/commit/f49962a))



<a name="0.2.0"></a>
# [0.2.0](https://github.com/char0n/ramda-adjunct/compare/v0.1.0...v0.2.0) (2017-02-13)



<a name="0.1.0"></a>
# [0.1.0](https://github.com/char0n/ramda-adjunct/compare/v0.0.1...v0.1.0) (2017-02-09)


### Features

* **isNull:** add isNull along side with complement isNotNull ([c803052](https://github.com/char0n/ramda-adjunct/commit/c803052))



<a name="0.0.1"></a>
## [0.0.1](https://github.com/char0n/ramda-adjunct/compare/b468c12...v0.0.1) (2017-02-09)


### Features

* **isNotUndefined:** add isNotUndefined adjunct ([b468c12](https://github.com/char0n/ramda-adjunct/commit/b468c12))
* **isUndefined:** add isUndefined adjunct ([2d1f85b](https://github.com/char0n/ramda-adjunct/commit/2d1f85b))



