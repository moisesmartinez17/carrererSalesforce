#!/bin/bash -x

if [[ $# -eq 0 ]] ; then
 echo ‘you need to pass in a string name for your scratch org’
 exit 1
fi

echo "* Creating a new scratch org for developer"
sfdx force:org:create -a $1 -s -f config/project-scratch-def.json -d 5

echo "* Push metadata to scratch org..."
sfdx force:source:push -f -u $1

echo "* Opening Scratch..."
sfdx force:org:open -r -u $1