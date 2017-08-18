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
ng build -bh angular-travis-ci-heroku --aot -prod 
cd dist/;
git init;
git config user.name "preetham" && git config user.email "preetham.salehundam@gmail.com";
#git remote add origin git@github.com:TutorialsOrg/angular-travis-ci-heroku.git
git add .;
git commit -m "github page code"
#git push origin gh-pages
git push --force --quiet "https://${GH_TOKEN}@${GH_REF}" master:gh-pages > /dev/null 2>&1

