// Function testing the SDK
// This file contains the most recent tests still being developed.

console.log("Now starting SDKFunctiontest.js");

// Starting out by requiring all dependancies
var test = require('tape');
var Ibc1 = require('..');

// Then define new instances that will be needed
var ibc = new Ibc1();
var chaincode = {};

// configure ibc-js sdk by defining options
var options = {

	// Set existant network credentials
	// Create a network on Bluemix Experimental BlockChain offering
	// Service Credentials are found under the Blockchain instance tab.
	
	network:{ 
		peers:   [
                  {
        "discovery_host": "275f58c4-024a-4d8c-bfb0-9af1d6fdb312_vp0.us.blockchain.ibm.com",
        "discovery_port": 30303,
        "api_host": "275f58c4-024a-4d8c-bfb0-9af1d6fdb312_vp0.us.blockchain.ibm.com",
        "api_port_tls": 443,
        "api_port": 443,
        "type": "peer",
        "network_id": "275f58c4-024a-4d8c-bfb0-9af1d6fdb312",
        "container_id": "671d607ab55c8a43c154d22fbd34bd5e1a42325da5c999621c7a1fd26ed8ec45",
        "id": "275f58c4-024a-4d8c-bfb0-9af1d6fdb312_vp0",
        "api_url": "http://275f58c4-024a-4d8c-bfb0-9af1d6fdb312_vp0.us.blockchain.ibm.com:443"
      },
      {
        "discovery_host": "275f58c4-024a-4d8c-bfb0-9af1d6fdb312_vp1.us.blockchain.ibm.com",
        "discovery_port": 30303,
        "api_host": "275f58c4-024a-4d8c-bfb0-9af1d6fdb312_vp1.us.blockchain.ibm.com",
        "api_port_tls": 443,
        "api_port": 443,
        "type": "peer",
        "network_id": "275f58c4-024a-4d8c-bfb0-9af1d6fdb312",
        "container_id": "1d7a8e50fa59f723cfc6212546ea621775bee42f71fe2f69636b10d08f6faa72",
        "id": "275f58c4-024a-4d8c-bfb0-9af1d6fdb312_vp1",
        "api_url": "http://275f58c4-024a-4d8c-bfb0-9af1d6fdb312_vp1.us.blockchain.ibm.com:443"
      },
      {
        "discovery_host": "275f58c4-024a-4d8c-bfb0-9af1d6fdb312_vp2.us.blockchain.ibm.com",
        "discovery_port": 30303,
        "api_host": "275f58c4-024a-4d8c-bfb0-9af1d6fdb312_vp2.us.blockchain.ibm.com",
        "api_port_tls": 443,
        "api_port": 443,
        "type": "peer",
        "network_id": "275f58c4-024a-4d8c-bfb0-9af1d6fdb312",
        "container_id": "ff8513360f3fbd54743016a6b54c121965856dd128576a287ebeb3e8675a2c5b",
        "id": "275f58c4-024a-4d8c-bfb0-9af1d6fdb312_vp2",
        "api_url": "http://275f58c4-024a-4d8c-bfb0-9af1d6fdb312_vp2.us.blockchain.ibm.com:443"
      },
      {
        "discovery_host": "275f58c4-024a-4d8c-bfb0-9af1d6fdb312_vp3.us.blockchain.ibm.com",
        "discovery_port": 30303,
        "api_host": "275f58c4-024a-4d8c-bfb0-9af1d6fdb312_vp3.us.blockchain.ibm.com",
        "api_port_tls": 443,
        "api_port": 443,
        "type": "peer",
        "network_id": "275f58c4-024a-4d8c-bfb0-9af1d6fdb312",
        "container_id": "36b17a3eeff3f71629d87cdee6aeb50777b6d81ce4983c112642ac4e0fe6a1d7",
        "id": "275f58c4-024a-4d8c-bfb0-9af1d6fdb312_vp3",
        "api_url": "http://275f58c4-024a-4d8c-bfb0-9af1d6fdb312_vp3.us.blockchain.ibm.com:443"
            }
        ],
      "ca": {
      "275f58c4-024a-4d8c-bfb0-9af1d6fdb312_ca": {
        "url": "275f58c4-024a-4d8c-bfb0-9af1d6fdb312_ca.us.blockchain.ibm.com:30303",
        "discovery_host": "275f58c4-024a-4d8c-bfb0-9af1d6fdb312_ca.us.blockchain.ibm.com",
        "discovery_port": 30303,
        "api_host": "275f58c4-024a-4d8c-bfb0-9af1d6fdb312_ca.us.blockchain.ibm.com",
        "api_port_tls": 30303,
        "api_port": 443,
        "type": "ca",
        "network_id": "275f58c4-024a-4d8c-bfb0-9af1d6fdb312",
        "container_id": "98ac5677482140546ad4433efd97d940ab36999bd8cccb0440c739b3baedd139"
      }
     },
        "users":  [   {
        "username": "admin",
        "secret": "fd7dcaa70e",
        "enrollId": "admin",
        "enrollSecret": "fd7dcaa70e"
      }     ] 		
	}, 

	// The chaincode version being tested here is the one deployed in Marbles2. 
	
	chaincode:{
		zip_url: 'https://github.com/ibm-blockchain/marbles-chaincode/archive/master.zip', 
		unzip_dir: 'marbles-chaincode-master/part2',
		git_url: 'https://github.com/ibm-blockchain/marbles-chaincode/part2'
    }
 }   
  
// Load  chaincode, with defined options, and return call-back-when-ready function.
ibc.load(options, cb_ready);
var chaincodeid = "95914b788029573695e31d98072a14343b6bbe10b7bf9cce3298db0ebfcf477324c6b7b07867b4439c0918fba1c0d7e725bc06f90f081f21a72f430dae9cbea6";
var userid = "admin";
var usersecret = "fd7dcaa70e";


// Define the call-back-when-ready function returned above
// call-back-when-ready function has err
function cb_ready(err, cc){
	//response has chaincode functions
	
    ibc.read_block('read', ['hello_world'], chaincodeid, userid, usersecret, function(err, data){
        console.log('read :', data, err);
    });


	// if the deployed name is blank, then chaincode has not been deployed
	if(cc.details.deployed_name === ""){
        cc.deploy('init', ['dia_feliz'], './cc_summaries', cb_deployed);
        function cb_deployed(err){
			console.log('sdk has deployed code and waited');
  		} 
  	}
  	else{
  		console.log('chaincode summary file indicates chaincode has been previously deployed');
	}

	
};


