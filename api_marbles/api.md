Deploy cahin code
==================


POST https://b62d1cc14d7941df9e2a6eb4fb84a2d8-vp0.us.blockchain.ibm.com:5001/chaincode

     {
      "jsonrpc": "2.0",
       "method": "deploy",
       "params": {
       "type": 1,
       "chaincodeID": {
        "path": "https://github.com/plucena/smartcontracts/chaincode2"
      },
      "ctorMsg": {
      "function": "init",
      "args": [
        "100"
      ]
      },
      "secureContext": "admin"
    },
    "id": 0
    }


INVOKE CHAINCODE
=================

POST https://b62d1cc14d7941df9e2a6eb4fb84a2d8-vp0.us.blockchain.ibm.com:5001/chaincode
