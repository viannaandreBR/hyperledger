

HYPERLEGER 0.6.1 server
================================

1. Login to github using your credentials

2. Fork https://github.com/plucena/smartcontracts/

3. Open a shell  
  
4. ssh hyper4@172.24.14.100
      
5. mkdir youruser

6. cd youruser

7. git clone https://github.com/{YOURGITID}/smartcontracts/  

   DO NOT CLONE https://github.com/plucena/smartcontracts/, CLONE YOUR FORK

8. cd /home/vagrant/{yoruruser}/smartcontracts/labs/lab03/SimpleSample

9. gradle -b build.gradle build

10. gradle -b build.gradle run


11. Open a second shell   

12. ssh hyper4@172.24.14.100
     
13. peer chaincode deploy -l java -n SimpleSample -c '{"Args": ["init", "a", "100", "b", "200"]}'

14. peer chaincode invoke -l java -n SimpleSample -c '{"Args": ["transfer", "a", "b", "10"]}'

15. peer chaincode query -l java -n SimpleSample -c '{"Args": ["query", "b"]}'



