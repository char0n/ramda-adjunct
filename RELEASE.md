# Release process

## Changelog

Generate new version `CHANGELOG.md` file by running

```sh
 $ npm run changelog
```

After changelog is generated, please review it and make sure it contains only
relevant information. Adhere to semver and bump the `package.json` and `package-lock.json` accordingly
to semver rules.

## Edit README.md

Edit `README.md` file ([API Documentation section](https://github.com/char0n/ramda-adjunct/blob/master/README.md#api-documentation)),
[VERSIONS.md](./VERSIONS.md) file and add link to the version you're currently releasing.

## Commit to git

Commit the above changes to git with following git message

```sh
 $ git add -A
 $ git commit -m "chore(release): cut the vX.Y.Z release"
 $ git push origin master
```

## Create git tag

Tag the release commit

```sh
 $ git tag -a vY.Y.Z
 $ git push --tags
```

## Create release on github.com

Go to [ramda-adjunct github repo](https://github.com/char0n/ramda-adjunct) and create the github release.
Use a tag that you created in previous step as a release tag. For more information how to create
github release, please refer to this [page](https://help.github.com/articles/creating-releases/).

## Publish to NPM

```sh
 $ npm publish
```

## Publish to Github Package Registry

Read [this document](https://help.github.com/en/github/managing-packages-with-github-package-registry/configuring-npm-for-use-with-github-package-registry) to understand how to configure your npm to publish to Github Package Registry.

Temporarily add the following entry into the `package.json` file. This modifications will set tell npm that the primary
registry is Github Package Registry.

```json
"publishConfig": {
  "registry": "https://npm.pkg.github.com/"
}
```

Github Package Registry only supports scoped packages. We need to change the name of the library from:
```json
"name": "ramda-adjunct",
```
to
```json
"name": "@char0n/ramda-adjunct",
```

Now publish to GitHub Package Registry:

```sh
 $ npm publish
```

Go to the current version [github package](https://github.com/char0n/ramda-adjunct/packages) and paste
the newly generated section from [CHANGELOG.md](./CHANGELOG.md) file into the description of the package.

## Bump the version

Bump the `package.json` and `package-lock.json` version by incrementing **MAJOR**, **MINOR** or **PATCH** part of the semver version.

```sh
 $ git add package.json
 $ git add package-lock.json
 $ git commit -m "chore: bump version to vX.Y.Z"
 $ git push origin master
```


## Edit redirector for gp-pages

Go to [ramda-adjunct github repo](https://github.com/char0n/ramda-adjunct) and switch to
**gh-pages** branch. Find `index.html` and edit it. Replace all references of previous version
of ramda-adjunct with the currently released one. In commit message use suffix `[ci skip]`
for `circleci` to skip the build triggered by this change.


**Note**

This is current manual release process. We are already working on fully automated release process.
But until that, please strictly adhere to this steps. It is essential that they are executed
in the right order.
