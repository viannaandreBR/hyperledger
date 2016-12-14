1. FORK  http://github.com/plucena/learn-chaincode-1/

![fork](https://github.com/plucena/learn-chaincode-1/blob/master/imgs/fork.png)


2. RETRIEVE YOUR BLOCKCHAIN REST URLS (USE CAR LEASE DEPLOY OR CREATE NEW SERVICE)

![go1](https://github.com/plucena/smartcontracts/blob/master/labs/lab06/img/img1.png)

![go2](https://github.com/plucena/smartcontracts/blob/master/labs/lab06/img/img2.png)


FOR THE NEXT EXAMPLES USE YOUR BLOCKCHAIN URL!


REGISTER
--------
	https://b20d828038124c06b200c36d49738e7d-vp0.us.blockchain.ibm.com:5003/registrar
	{
  	"enrollId": "admin",
  	"enrollSecret": "b13fe85cb3"
	}


DEPLOY
------
 	http://172.24.14.100:7050/chaincode
	{
      	"jsonrpc": "2.0",
      	"method": "deploy",
      	"params": {
          "type": 1,
          "chaincodeID": {
              "path": "https://github.com/YOUR-GIT-ID/learn-chaincode-1/finished"
          },
          "ctorMsg": {
            "function": "init",
      		"args": ["hi there"]
          },
          "secureContext": "admin"
      	},
      	"id": 1
  	}


QUERY
------
	http://172.24.14.100:7050/chaincode
	{
      	"jsonrpc": "2.0",
     	 "method": "query",
     	 "params": {
          "type": 2,
          "chaincodeID": {
              "name": "3aeb9793d67968f966f2b093c361c70cdbf7a2813a02f7a5da344386580d3b519899b73003b335c587e3d016d44b54eb7d8030bddddbc3e9abf05db81c20eaef"
          },
          "ctorMsg": {
			"function": "read",
      		"args": ["hello_world"]
      	  },
          "secureContext": "admin"
       	},
      	"id": 2
  	}
  
  
INVOKE
------
	http://172.24.14.100:7050/chaincode
	{
    	"jsonrpc": "2.0",
   	 "method": "invoke",
    	"params": {
        "type": 1,
        "chaincodeID": {
 			 "name": "3aeb9793d67968f966f2b093c361c70cdbf7a2813a02f7a5da344386580d3b519899b73003b335c587e3d016d44b54eb7d8030bddddbc3e9abf05db81c20eaef"        },
        "ctorMsg": {
            "function": "write",
            "args": [
                "hello_world",
                "go away"
            ]
        },
        "secureContext": "admin"
   	 },
	"id": 2
  	}




QUERY
------
	http://172.24.14.100:7050/chaincode
	{
      	"jsonrpc": "2.0",
     	 "method": "query",
     	 "params": {
          "type": 2,
          "chaincodeID": {
              "name": "3aeb9793d67968f966f2b093c361c70cdbf7a2813a02f7a5da344386580d3b519899b73003b335c587e3d016d44b54eb7d8030bddddbc3e9abf05db81c20eaef"
          },
          "ctorMsg": {
			"function": "read",
      		"args": ["hello_world"]
      	  },
          "secureContext": "admin"
       	},
      	"id": 2
  	}
  
