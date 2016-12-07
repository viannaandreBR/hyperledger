# WALLET


cd /home/vagrant/youruser/smartconracts/labs/deploygo

COMPILE COMTRACT

go build XXX

IN ORDER TO RUN A CONTRACT YOU NEED TO DEFINE A NAME FOR IT.

CORE_CHAINCODE_ID_NAME={CONTRACTNAME} CORE_PEER_ADDRESS=0.0.0.0:7051 ./XXX &

 peer chaincode deploy -n {CONTRACTNAME} -c '{"function":"init", "args":["a", "100", "b", "200"]}'
 
 peer chaincode invoke -l golang -n {CONTRACTNAME} -c '{"function":"invoke","args":["a","b","10"]}'
 
 peer chaincode query -l golang -n {CONTRACTNAME} -c '{"function":"query","args":["b"]}'

 # REGISSTRY


#start go code
CORE_CHAINCODE_ID_NAME=myassets2 CORE_PEER_ADDRESS=0.0.0.0:7051 ./finished

peer chaincode deploy -n myassets2 -c '{"function":"init", "args":["hello_world", "ola"]}'

peer chaincode invoke -n myassets2 -c '{"function":"invoke", "args":["hello_world", "ola_mundo"]}'

peer chaincode query -l golang -n myassets2 -c '{"function":"read","args":["hello_world"]}'
