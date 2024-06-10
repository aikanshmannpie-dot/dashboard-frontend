#!/bin/bash 
set -e

source ~/.nvm/nvm.sh
nvm install 18.19
# nvm use --delete-prefix v18.15.0 --silent
# nvm list

nvm alias default 18.19

nvm use 18.19
# go to the directory
echo "Going to directory"
cd <SERVER_BUILD_PATH>

echo "Removing the server"
rm -rf ./node_modules

echo "Installing node"
node -v

echo "Installing node modules"
npm install
 
echo "installing pm2"
npm install pm2

#Restart the node server  
echo "server reset"

npm run build --prod

npm run dev
