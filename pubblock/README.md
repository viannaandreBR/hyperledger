BOOK COPIES BLOCKCHAIN API



AUTH
-------

    https://0d236f00feec4cabb327e6325b9813f2-vp0.us.blockchain.ibm.com:5003/registrar
    {
     "enrollId": "admin",
      "enrollSecret": "4411a0a98b"
    }	


INSTALAR SMART CONTRACT
-------------------------


POST     https://0d236f00feec4cabb327e6325b9813f2-vp0.us.blockchain.ibm.com:5003/chaincode

    {
    "jsonrpc": "2.0",
    "method": "deploy",
    "params": {
    "type": 1,
    "chaincodeID": {"path": "https://github.com/plucena/smartcontracts/pubblock"},
    "ctorMsg": {
    "function": "init",
    "args": ["200"]
     },
      "secureContext": "admin"
    },
    "id": 0
    }



REGISTRAR NOVO ASSET NA COMPRA
----------------------------------

POST     https://0d236f00feec4cabb327e6325b9813f2-vp0.us.blockchain.ibm.com:5003/chaincode

    {
      "jsonrpc": "2.0",
      "method": "invoke",
      "params": {
      "type": 1,
      "chaincodeID": {
      "name": "19cfab4581100238f1f3b4564ce167e4df277be8d7a3ab3587671bb1ea03c2e854c3e197e181bb12c54e7a54487247ee931eb91d3932dae54a8463bc1ff151e9"
      },
      "ctorMsg": {
      "function": "init_marble",
      "args": ["livrodobob" ,  "pequeno principe", "0", "bb@lala.com"] 
      },
      "secureContext": "admin"
      },
      "id": 0
      }
  


CONSULTAR ASSET REGISTRADO
----------------------------

POST     https://0d236f00feec4cabb327e6325b9813f2-vp0.us.blockchain.ibm.com:5003/chaincode

    {
    "jsonrpc": "2.0",
    "method": "query",
    "params": {
    "type": 1,
    "chaincodeID": {
    "name":  "19cfab4581100238f1f3b4564ce167e4df277be8d7a3ab3587671bb1ea03c2e854c3e197e181bb12c54e7a54487247ee931eb91d3932dae54a8463bc1ff151e9"
    },
    "ctorMsg": {
    "function": "read",
    "args": ["livrodobob"]
    },
    "secureContext": "admin"
    },
    "id": 0
    }



