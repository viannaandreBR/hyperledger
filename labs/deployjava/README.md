cd /opt/gopath/src/github.com/hyperledger/fabric/examples/chaincode/java/SimpleSample

gradle build 

gradle -b build.gradle run

cd /home/vagrant/smartcontracts/labs/deployjava/SimpleSample

gradle build 

gradle -b build.gradle run


peer chaincode deploy -l java -n SimpleSample -c '{"Args": ["init", "a", "100", "b", "200"]}'

peer chaincode invoke -l java -n SimpleSample -c '{"Args": ["transfer", "a", "b", "10"]}'

peer chaincode query -l java -n SimpleSample -c '{"Args": ["query", "b"]}'


