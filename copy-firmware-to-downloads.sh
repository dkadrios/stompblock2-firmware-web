#!/bin/bash

parentPath=${PWD%/*}
path=$PWD

cp dist/firmware.zip $parentPath/zds-website/www/includes/anvil2/firmware.zip
