

BUILD HYPERLEDGER 0.7
======================

To build Hyperledger you need Vagrant, Virtualbox, golang and git installed on your host machine (Linux, Windows, MacOsX)
MacOSX instructions --> https://github.com/hyperledger/fabric/blob/master/docs/dev-setup/devenv.md

1. cd

2. mkdir fabric

3. git clone http://github.com/hyperledger/fabric/

4. cd fabric/devenv

5. vagrant up

6. vagrant ssh

7. cd /hyperledger

8. make


RUN HYPERLEDGER
===============

Two vagrant ssh windows


1. orderer

2. CORE_CHAINCODE_MODE=dev peer node start --peer-chaincodedev
