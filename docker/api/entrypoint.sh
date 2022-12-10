#!/bin/sh

echo "Starting get ready!!!"

echo "====== run migrate ======"
ls -la
sleep 5
npx sequelize-cli db:migrate
echo "====== run server ======"
npm run start
