#!/usr/bin/env sh
# git init;
# git config user.name "preetham" && git config user.email "preetham.salehundam@gmail.com";
# if [ -z "$1" ]
# then
#     heroku create
# else
#     heroku create $1
# fi
# git add .;
# git commit -m "heroku commit";
# git push heroku master
cd dist/;
git init;
git config user.name "preetham" && git config user.email "preetham.salehundam@gmail.com";
git add .;
git commit -m "github page code"
git subtree push --prefix dist origin gh-pages

