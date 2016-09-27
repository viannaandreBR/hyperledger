# hyperledger

    Write Chaincode - https://github.com/IBM-Blockchain/learn-chaincode/

1.  Setup VM https://github.com/hyperledger/fabric/blob/master/docs/dev-setup/devenv.md?cm_mc_uid=35478756853214604766575&cm_mc_sid_50200000=1465483110#setting-up-the-development-environment
2.  Start Hyperledger VM
2.  ssh vagrant@10.0.2.15 pwd: vagrant

# Run Membership Servives
1. cd /opt/gopath/src/github.com/hyperledger/fabric
2. make membersrvc
3. (cd membersrvc; ./membersrvc)

# Run a validate peer
1. cd $GOPATH/src/github.com/hyperledger/fabric
2. make peer
3. cd ./peer
4. export CORE_SECURITY_ENABLED=true 
5. export CORE_SECURITY_PRIVACY=true 
6. ./peer node start --peer-chaincodedev


# Authenticate on blockchain
1. bcauth jim (pwd: 6avZQLwcUe9b)


# Deploy a contract
1. cd $GOPATH/src/github.com/hyperledger/fabric/peer
2. export CORE_SECURITY_ENABLED=true 
3. export CORE_SECURITY_PRIVACY=true 
4. ./peer chaincode deploy -u jim -n mycc -c '{"Function":"init", "Args": ["a","100", "b", "200"]}'

# Invoke a contract
./peer chaincode invoke -u jim -l golang -n mycc -c '{"Function": "invoke", "Args": ["a", "b", "10"]}'

# Info about the chain
1. bstatus 

# Read Blocks
1. bcnode 0

# Peers
bcpeers

# Transactions
bctrans c3e1a653-decf-4a84-bd70-8e51425c5a40

