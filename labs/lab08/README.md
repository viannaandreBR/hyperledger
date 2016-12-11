Open Points App
-----------------

1 - [Deploy open points App](ibm.biz/Bdrp5r)

2 - Navigate through the app

3 - Access 
GscLabBlockchainApp App on [Bluemix](https://console.ng.bluemix.net)

![Image of  GscLabBlockchainApp]
(https://github.com/plucena/smartcontracts/blob/master/labs/lab08/img/img01.png)

3 - Choose Edit Code

![Image of  GscLabBlockchainApp]
(https://github.com/plucena/smartcontracts/blob/master/labs/lab08/img/img2.png)

4  IBM Bluemix DevOps Services
-  Rename the Application - "Programa de Pontos"
- /public/openPoints/home.html - line 376
- Click deploy

![Image of  GscLabBlockchainApp]
(https://github.com/plucena/smartcontracts/blob/master/labs/lab08/img/img3.png)


5 - Wait ~1 min for deploy to complete
- Return to [Bluemix Console](https://console.ng.bluemix.net)
- Click on the GscLabBlockchainApp link

![Image of  GscLabBlockchainApp]
(https://github.com/plucena/smartcontracts/blob/master/labs/lab08/img/img4.png)


6  Return to IBM Bluemix DevOps Services

https://github.com/IBM-Blockchain/ibm-blockchain-js

- npm install ibm-blockchain-js

```
    var Ibc1 = require('ibm-blockchain-js');
    var ibc = new Ibc1(/*logger*/);             //you can pass a logger such as winston here - optional
    var chaincode = {};

chaincode.query
chaincode.invoke
```

-  Review app.js


![Image of  GscLabBlockchainApp]
(https://github.com/plucena/smartcontracts/blob/master/labs/lab08/img/img5.png)

![Image of  GscLabBlockchainApp]
(https://github.com/plucena/smartcontracts/blob/master/labs/lab08/img/img6.png)


![Image of  GscLabBlockchainApp]
(https://github.com/plucena/smartcontracts/blob/master/labs/lab08/img/img7.png)


Student Exercice
----------

Adapt test.js so it can query existing chaincode


