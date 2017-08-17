#!/usr/bin/env sh
cd $1;
git init;
git config user.name "preetham" && git config user.email "preetham.salehundam@gmail.com";
if [ -z "$2" ]
then
    heroku create
else
    heroku create $2
fi
git add .;
git commit -m "heroku commit";
git push heroku master

