#!/bin/bash

echo "Starting get ready!!!"

echo "====== install package ======"
npm install --ignore-scripts
echo "====== run migrate ======"
sleep 3
npx sequelize-cli db:migrate
echo "====== run develop ======"
npm run dev