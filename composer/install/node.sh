sudo apt-get update

sudo apt-get -y install build-essential libssl-dev python-pip git

curl -sL https://deb.nodesource.com/setup_6.x > node-install

sudo chmod 777 node-install

sudo ./node-install

sudo apt-get install -y nodejs

sudo chown -R $(whoami) $(npm config get prefix)/{lib/node_modules,bin,share}




