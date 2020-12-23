#!/bin/bash

export S3_HOME=s3://ittimfn-public/HLS/

cd ./app

aws s3 rm ${S3_HOME}
aws s3 cp `dirname $0`/app/dist/* ${S3_HOME} --recursive

