
# 1.0 Install fabric-composer on  Ubuntu 14.04/16.04 (as root)

_node 6 install_

curl -sL https://goo.gl/XCpds5 | sh

_hyperledger 0.6 install_

curl -sL https://goo.gl/76bvmN | sh


    docker ps
    CONTAINER ID        IMAGE                           COMMAND                  CREATED              STATUS              PORTS                              NAMES
    c717ad115502        hyperledger/fabric-peer         "sh -c 'sleep 5; peer"   About a minute ago   Up About a minute   0.0.0.0:7050-7053->7050-7053/tcp   scripts_vp0_1
    b0962c9a784f        hyperledger/fabric-membersrvc   "membersrvc"             About a minute ago   Up About a minute   0.0.0.0:7054->7054/tcp             scripts_membersrvc_1


npm install -g hashtable

cd /root

wget http://67.207.83.133/composer.zip

unzip composer.zip

ln -s /root/node_modules/composer-rest-server/cli.js  /usr/bin/composer-rest-server

ln -s /root/node_modules/composer-cli/cli.js  /usr/bin/composer-cli

ln -s /root/node_modules/composer-cli/cli.js  /usr/bin/composer-cli

nohup composer-ui -p 80&


# 2.0 - deploy a sample project to local hyperledger using composer (as root)

select settings

add new connection *USE YOUR IP* and then switch to hlfabric profile

![](https://raw.githubusercontent.com/plucena/fabric-composer-install/master/con2.png)

enter user info WebAppAdmin DJY27pEnl16d

![](https://raw.githubusercontent.com/plucena/fabric-composer-install/master/con.png)


# 4.0 - install hyperledger viewer

*non-root install!!! install as user only*

git clone https://github.com/hyperledger/blockchain-explorer

cd blockchain-explorer/explorer_1/

sudo npm install -g grunt 

sudo npm install -g bower

npm install grunt-auto-install 

npm install grunt-contrib-copy

npm install express

grunt

nohup node exp-server.js&

![](https://raw.githubusercontent.com/plucena/fabric-composer-install/master/con5.png)


# create network profile (as root)

git clone http://github.com/plucena/hyperledger


# deploy a business network file 


cd marbles-network 

edit marbles

composer archive create --sourceType dir --sourceName . -a ./dist/my-network.bna
 
composer deploy network -a /root/hyperledger/marbles-network/dist/my-network.bna -p hlfabric -i  WebAppAdmin -s DJY27pEnl16d

composer-rest-server -p hlfabric -n marbles-network -i WebAppAdmin -s DJY27pEnl16d -N never -P 3000 -S false

test yourserverip:3000


# 6.0 - connect to a Bluemix Hyperledger 0.6 blockchain instance

Use Bluemix profile connection.json in this repository

# 7.0 - Yeoman CRUD Angular App Generator

# 8.0 - Run JS BDD tests
https://medium.com/@mrsimonstone/test-your-blockchain-business-network-using-hyperledger-composer-c8e8f112da08
