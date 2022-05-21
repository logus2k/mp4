#! /bin/bash


IN=$@

args=$(echo $IN | tr " " " space")

for arg in $args
do
    echo ${arg}
done
