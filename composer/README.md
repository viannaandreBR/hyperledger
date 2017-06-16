#1 - Install fabric-composer on  Ubuntu 14.04/16.04 (as root)
=========================================================

1. _node 6 install_

curl -sL https://goo.gl/XCpds5 | sh

2. _hyperledger 0.6 install_

curl -sL https://goo.gl/76bvmN | sh


    docker ps
    CONTAINER ID        IMAGE                           COMMAND                  CREATED              STATUS              PORTS                              NAMES
    c717ad115502        hyperledger/fabric-peer         "sh -c 'sleep 5; peer"   About a minute ago   Up About a minute   0.0.0.0:7050-7053->7050-7053/tcp   scripts_vp0_1
    b0962c9a784f        hyperledger/fabric-membersrvc   "membersrvc"             About a minute ago   Up About a minute   0.0.0.0:7054->7054/tcp             scripts_membersrvc_1

3. _composer install_

3.1 npm install -g hashtable

3.2 npm install -g composer-cli

3.2 npm install -g composer-rest-server




# 2.0 Develop Chain Code using Visual Studio Code and GitHub
=============================================================

1. Download Visual Studio Code - https://code.visualstudio.com/

2. Install Hyperledger Extension

![](https://raw.githubusercontent.com/plucena/hyperledger/master/composer/ext.png)


3. git clone http://github.com/plucena/marbles-network


4. Open marbles-network project and  edit it

![](https://raw.githubusercontent.com/plucena/hyperledger/master/composer/marbles.png)



5. create a connection profile

5.1 mkdir -r /root/.composer-connection-profiles/hlfabric

4.2 cd -r /root/.composer-connection-profiles/hlfabric

4.3 cp /root/marbles-network/connection.json  /root/.composer-connection-profiles/hlfabric


6. deploy using command line

6.1 cd /root/marbles-network

6.2 mkdir /root/marbles-network/dist

6.3 composer archive create --sourceType dir --sourceName . -a ./dist/my-network.bna
 
6.4 composer deploy network -a /root/hyperledger/marbles-network/dist/my-network.bna -p hlfabric -i  WebAppAdmin -s DJY27pEnl16d

6.5 composer-rest-server -p hlfabric -n marbles-network -i WebAppAdmin -s DJY27pEnl16d -N never -P 3000 -S false


![](https://raw.githubusercontent.com/plucena/hyperledger/master/composer/rest.png)


==================================

# 3.0 - OPTIONAL - install hyperledger viewer

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



# 4.0 - OPTIONAL - connect to a Bluemix Hyperledger 0.6 blockchain instance

Use Bluemix profile connection.json in this repository

# 5.0 - OPTIONAL Yeoman CRUD Angular App Generator

# 6.0 - OPTIONAL Run JS BDD tests
https://medium.com/@mrsimonstone/test-your-blockchain-business-network-using-hyperledger-composer-c8e8f112da08
