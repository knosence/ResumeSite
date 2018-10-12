#!/bin/bash

git add .
echo Add a commit
read commit
git commit -m '$commit'
git push heroku master
