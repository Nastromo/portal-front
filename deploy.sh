#!/bin/bash

npm run build
cp devempr.pem build
cd build
mkdir prod

cp -R static prod
cp asset-manifest.json prod
cp favicon.ico prod
cp index.html prod
cp manifest.json prod
cp precache-manifest.d175ef180d078ccfc0731afeee44555e.js prod
cp service-worker.js prod

tar czf app.tar.gz static/ asset-manifest.json favicon.ico index.html manifest.json precache-manifest.d175ef180d078ccfc0731afeee44555e.js service-worker.js

sftp -i "devempr.pem" ubuntu@192.168.20.204 << 'ENDSSH'
put app.tar.gz
exit
ENDSSH

rm app.tar.gz

ssh -i "devempr.pem" ubuntu@192.168.20.204 << 'ENDSSH'
rm -rf portal_front/* portal_front/.*
tar xf app.tar.gz -C portal_front
rm app.tar.gz
ENDSSH