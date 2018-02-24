#!/bin/bash

for file in $(git diff --cached --name-only --diff-filter=ACM "*.js")
do
  # we only want to lint the staged changes, not any un-staged changes
  git show ":$file" | node_modules/.bin/eslint --stdin --stdin-filename "$file"
  if [ $? -ne 0 ]; then
    echo "ESLint failed on staged file '$file'. Please check your code and try again. You can run ESLint manually via npm run lint."
    exit 1 # exit with failure status
  fi
done
