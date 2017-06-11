
# 1.0 Install fabric-composer on  Ubuntu 14.04/16.04

_node 6 install_

curl -sL https://goo.gl/XCpds5 | sh

npm install -g hashtable

npm install -g composer-cli

npm install -g composer-ui

npm install -g composer-rest-server

_hyperledger 0.6 install_

curl -sL https://goo.gl/76bvmN | sh

# 2.0 - deploy and run Hyperledger 0.6 dockers

/root/sample-applications/packages/getting-started/scripts/setup.sh 

run local hyperledger

    docker ps
    CONTAINER ID        IMAGE                           COMMAND                  CREATED              STATUS              PORTS                              NAMES
    c717ad115502        hyperledger/fabric-peer         "sh -c 'sleep 5; peer"   About a minute ago   Up About a minute   0.0.0.0:7050-7053->7050-7053/tcp   scripts_vp0_1
    b0962c9a784f        hyperledger/fabric-membersrvc   "membersrvc"             About a minute ago   Up About a minute   0.0.0.0:7054->7054/tcp             scripts_membersrvc_1


# 3.0 - deploy a sample project to local hyperledger using composer

sudo nohup composer-ui -p 80&

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


# 5.0 - run composer-rest-client
 composer-rest-server -p hlfabric -n org.acme.biznet -i WebAppAdmin -s DJY27pEnl16d -N never -P 3000 -S false

test yourserverip:3000


# deploy a business network file 
composer archive project

composer deploy network -a /usr/lib/node_modules/composer-rest-server/test/bond-network.bna -p hlfabric -i  WebAppAdmin -s DJY27pEnl16d

composer-rest-server -p hlfabric -n bond-network -i WebAppAdmin -s DJY27pEnl16d -N never -P 3000 -S false



# 6.0 - connect to a Bluemix Hyperledger 0.6 blockchain instance

Use Bluemix profile connection.json in this repository

# 7.0 - Yeoman CRUD Angular App Generator

# 8.0 - Run JS BDD tests
https://medium.com/@mrsimonstone/test-your-blockchain-business-network-using-hyperledger-composer-c8e8f112da08
