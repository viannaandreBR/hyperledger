#1.0 -Install fabric-composer on  Ubuntu 14.04/16.04 (as root)
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

3.1 curl -sL https://goo.gl/Jq2uVP | sh

![](https://raw.githubusercontent.com/plucena/hyperledger/master/composer/composer-ui.png)

3.2 Create a connection Profile on Composer-UI

3.2.2 select settings button (right corner)

3.2.3 add new connection  *USE YOUR IP* 

![](https://raw.githubusercontent.com/plucena/hyperledger/master/composer/profile.png)

3.2.4 enter user info WebAppAdmin DJY27pEnl16d

![](https://raw.githubusercontent.com/plucena/hyperledger/master/composer/password.png)

3.2.5  switch to hlfabric profile

![](https://raw.githubusercontent.com/plucena/hyperledger/master/composer/select.png)

3.2.6 - create your own Assets, 

3.2.7 - deploy

3.2.8 - create web service 



# 2.0 Develop Chain Code using Visual Studio Code and GitHub
=============================================================

1. Download Visual Studio Code - https://code.visualstudio.com/

Install Hyperledger Extension


git clone http://github.com/plucena/marbles-network

Open marbles-network project and  edit it

Deploy using command line

cd marbles-network

composer archive create --sourceType dir --sourceName . -a ./dist/my-network.bna
 
composer deploy network -a /root/hyperledger/marbles-network/dist/my-network.bna -p hlfabric -i  WebAppAdmin -s DJY27pEnl16d

composer-rest-server -p hlfabric -n marbles-network -i WebAppAdmin -s DJY27pEnl16d -N never -P 3000 -S false

test yourserverip:3000


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
