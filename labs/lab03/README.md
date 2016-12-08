HYPERLEGER 0.6.1 server
================================

1. Login to github using your credentials

2. Fork https://github.com/plucena/smartcontracts/

3. Login to Hyperledger VM
  
      ssh hyper4@172.24.14.100
      password: XXXX

4. mkdir youruser

5. cd youruser

6. git clone https://github.com/{YOURGITID}/smartcontracts/

* DO NOT CLONE https://github.com/plucena/smartcontracts/, CLONE YOUR FORK

7. cd /home/vagrant/{yoruruser}/smartcontracts/labs/deployjava/SimpleSample

5. gradle -b build.gradle build

6. gradle -b build.gradle run


7. Open a second vagrant window

      ssh hyper4@172.24.14.100
      password: XXXX


8. peer chaincode deploy -l java -n SimpleSample -c '{"Args": ["init", "a", "100", "b", "200"]}'

9. peer chaincode invoke -l java -n SimpleSample -c '{"Args": ["transfer", "a", "b", "10"]}'

10. peer chaincode query -l java -n SimpleSample -c '{"Args": ["query", "b"]}'



