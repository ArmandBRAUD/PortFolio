#!/bin/bash

message="$1"

git add .
git commit -m "$message"
git push -u origin main
