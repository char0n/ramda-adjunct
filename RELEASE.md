# Release process

## Changelog

Generate new version `CHANGELOG.md` file by running

```sh
 $ npm run changelog
```

After changelog is generated, please review it and make sure it contains only
relevant information. Adhere to semver and bump the `package.json` accordingly
to semver rules.

## Edit README.md

Edit `README.md` file ([API Documentation section](https://github.com/char0n/ramda-adjunct/blob/master/README.md#api-documentation)) and 
add link to the version you're currently releasing. Also make sure to point the **LATEST** version
to the same version you're currently releasing.

## Commit to git

Commit the above changes to git with following git message

```sh
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

## Bump the version

Bump the `package.json` version by incrementing **PATCH** part of the semver version.

```sh
 $ npm version patch --message "chore: bump version to v%s"
 $ git push origim master
```


## Edit redirector for gp-pages

Go to [ramda-adjunct github repo](https://github.com/char0n/ramda-adjunct) and switch to 
**gh-pages** branch. Find `index.html` and edit it. Replace all references of previous version
of ramda-adjunct with the currently released one.


**Note**

This is current manual release process. We are already working on fully automated release process.
But until that, please strictly adhere to this steps. It is essential that they are executed
in the right order.
