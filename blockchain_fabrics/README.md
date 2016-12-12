
VERSION 0.6.1 WITH JAVA SUPPORT

**IN CASE YOU HAVE OTHER HYPERLEGER DOCKER IMAGES, YOU SHOULD REMOVE THEM FIRST**

1. sudo docker pull hyperledger/fabric-peer:x86_64-0.6.1-preview
2. sudo docker pull hyperledger/fabric-javaenv:x86_64-0.6.1-preview

docker run  --name vp0 -it   -e CORE_VM_ENDPOINT=unix:///var/run/docker.sock -v /var/run/docker.sock:/var/run/docker.sock  -p 7050:7050 -e CORE_LOGGING_LEVEL=DEBUG -e CORE_PEER_ID=vp0 -e CORE_PEER_ADDRESSAUTODETECT=true hyperledger/fabric-javaenv:x86_64-0.6.1-preview peer node start 




