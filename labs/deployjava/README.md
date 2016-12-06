1. cd /hyperledger/core/chaincode/shim/java

2. gradle build 

3. gradle -b build.gradle run

4. cd /home/vagrant/smartcontracts/labs/deployjava/SimpleSample

5. gradle build 

6. gradle -b build.gradle run

7. peer chaincode deploy -l java -n SimpleSample -c '{"Args": ["init", "a", "100", "b", "200"]}'

8. peer chaincode invoke -l java -n SimpleSample -c '{"Args": ["transfer", "a", "b", "10"]}'

9. peer chaincode query -l java -n SimpleSample -c '{"Args": ["query", "b"]}'



