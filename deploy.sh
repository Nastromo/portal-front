#!/bin/bash

npm run build
cp empraws.pem build
cd build

tar czf app.tar.gz static/ asset-manifest.json favicon.ico index.html manifest.json service-worker.js

sftp -i "empraws.pem" ec2-user@18.222.204.34 << 'ENDSSH'
put app.tar.gz
exit
ENDSSH

rm app.tar.gz

ssh -i "empraws.pem" ec2-user@18.222.204.34 << 'ENDSSH'
rm -rf portal/* portal/.*
tar xf app.tar.gz -C portal
rm app.tar.gz
ENDSSH