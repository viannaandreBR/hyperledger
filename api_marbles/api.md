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

     {
          "jsonrpc": "2.0",
          "method": "invoke",
          "params": {
          "type": 1,
          "chaincodeID": {
          "name":   "ca325065625853d54bb9869ab4c6862c86f72b8056dfbe947415f2880a5465b92f7607871f3df0fbd865ef2dec2b4a0af14ad2a6285fce95719f7d90b9511064"
          },
          "ctorMsg": {
          "function": "init_marble",
          "args": ["asdf", "blue", "35", "bob"]
          },
          "secureContext": "admin"
          },
          "id": 0
          }
          
QUERY

POST https://b62d1cc14d7941df9e2a6eb4fb84a2d8-vp0.us.blockchain.ibm.com:5001/chaincode

     {
     "jsonrpc": "2.0",
     "method": "query",
     "params": {
     "type": 1,
     "chaincodeID": {
     "name": "ca325065625853d54bb9869ab4c6862c86f72b8056dfbe947415f2880a5465b92f7607871f3df0fbd865ef2dec2b4a0af14ad2a6285fce95719f7d90b9511064"
    },
    "ctorMsg": {
      "function": "read",
      "args": [
        "asdf"
      ]
    },
    "secureContext": "admin"
     },
     "id": 0
     }


