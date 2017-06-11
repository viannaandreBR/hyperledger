JAVA ASSET TRANSFER DEMO @ HYPERLEDGER 0.61 SERVER
===================================================

INSTRUCTOR DEMO
----------------

3. Open a shell  
  
4. ssh hyper4@172.24.14.100

5. cd /home/vagrant/plucena/smartcontracts/labs/lab03/SimpleSample

10. gradle -b build.gradle build

11. gradle -b build.gradle run

11. Open a second shell   

12. ssh hyper4@172.24.14.100
     
13. peer chaincode deploy -l java -n SimpleSample -c '{"Args": ["init", "a", "100", "b", "200"]}'

14. peer chaincode invoke -l java -n SimpleSample -c '{"Args": ["transfer", "a", "b", "10"]}'

15. peer chaincode query -l java -n SimpleSample -c '{"Args": ["query", "b"]}'


*QUERIES USANDO POSTMAN
-----------------------


STUDENTS EXERCICE - IMPLEMENT TAXES ON TRANSACTIONS
---------------------------------------------------

**PART I - EDIT CODE ON LOCAL MACHINE**


1. Login to github using your credentials

2. Fork https://github.com/plucena/smartcontracts/

5. mkdir youruser

6. cd youruser

7. git clone https://github.com/{YOURGITID}/smartcontracts/  

* DO NOT CLONE https://github.com/plucena/smartcontracts/, CLONE YOUR FORK

* Update contract name on SimpleSample.java 

```
    @Override
  	public String getChaincodeID() {
		  return "BancoSeuUsuario";
	  }
```

* Implement Bank Taxes on SimpleSample.java 


* git add *

* git commit -m "changes"

* git push



**PART II TEST SMART CONTRACT ON HYPERLEDGER SERVER**

3. Open a shell  
  
4. ssh hyper4@172.24.14.100
      
5. mkdir youruser

6. cd youruser

7. git clone https://github.com/{YOURGITID}/smartcontracts/  

   DO NOT CLONE https://github.com/plucena/smartcontracts/, CLONE YOUR FORK
   
8. cd /home/vagrant/{yoruruser}/smartcontracts/labs/lab03/SimpleSample


10. gradle -b build.gradle build

11. gradle -b build.gradle run


11. Open a second shell   

12. ssh hyper4@172.24.14.100
     
13. peer chaincode deploy -l java -n BancoSeuUsuario -c '{"Args": ["init", "a", "100", "b", "200"]}'

14. peer chaincode invoke -l java -n BancoSeuUsuario -c '{"Args": ["transfer", "a", "b", "10"]}'

15. peer chaincode query -l java -n BancoSeuUsuario -c '{"Args": ["query", "b"]}'





