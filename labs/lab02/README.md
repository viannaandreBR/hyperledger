
DEPLOY HYPERLEDGER SERVER VERSION 0.6.1 WITH JAVA SUPPORT

**IN CASE YOU HAVE OTHER HYPERLEGER DOCKER IMAGES, YOU SHOULD REMOVE THEM FIRST**

1. sudo docker pull hyperledger/fabric-peer:x86_64-0.6.1-preview
2. sudo docker pull hyperledger/fabric-javaenv:x86_64-0.6.1-preview

3. docker run  --name vp0 -it   -e CORE_VM_ENDPOINT=unix:///var/run/docker.sock -v /var/run/docker.sock:/var/run/docker.sock  -p 7050:7050 -e CORE_LOGGING_LEVEL=DEBUG -e CORE_PEER_ID=vp0 -e CORE_PEER_ADDRESSAUTODETECT=true hyperledger/fabric-javaenv:x86_64-0.6.1-preview peer node start 

4. Install Firefox [RestClient](https://addons.mozilla.org/en-US/firefox/addon/restclient/)

5. http://localhost:7050/chain

6. Deploy Java Contract 
![Deploy](https://github.com/plucena/smartcontracts/blob/master/labs/lab02/img/img01.png)
``` 
5. http://localhost:7050/chaincode

{
		"jsonrpc": "2.0",
		"method": "deploy",
		"params": {
				"type": 4,
				"chaincodeID": {
					"path": "https://github.com/zamrokk/JavaCDD"
				},
				"ctorMsg": {
					"args": ["init","farmer","10", "42"]
				}
			},
		"id": 1
}

```
6. Execute Java Contract

![Deploy](https://github.com/plucena/smartcontracts/blob/master/labs/lab02/img/img02.png)
``` 
{
      "jsonrpc": "2.0",
      "method": "query",
      "params": {
          "type": 4,
          "chaincodeID": {
              "name": "YOUR_CONTRACT_ID"
          },
          "ctorMsg": {
              "args":["query","farmer"]
          }
      },
      "id": 2
}
``` 


