AGRICULTURE INSURANCE - HYPERLEDGE 0.6
=======================================

INSTRUCTOR DEMO
-----------------

Open a shell

ssh hyper4@172.24.14.100

cd /home/vagrant/plucena/smartcontracts/labs/lab04/JavaCDD

gradle -b build.gradle build

gradle -b build.gradle run

Open a second shell

ssh hyper4@172.24.14.100

peer chaincode deploy -l java -n JavaCDD -c '{"Args": ["init", "farmer","10", "42"]}'

peer chaincode query -l java -n JavaCDD -c '{"Args": ["query", "farmer"]}'

peer chaincode invoke -l java -n JavaCDD -c '{"Args": ["executeContract", "farmer","99701", "US"]}'

peer chaincode query -l java -n JavaCDD -c '{"Args": ["query", "farmer"]}'



*QUERIES USANDO POSTMAN
--------------------------


STUDENTS EXERCICE - IMPLEMENT CHANGES TO CONTRACT
--------------------------------------------------

