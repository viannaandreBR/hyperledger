
# 1.0 Install fabric-composer on  Ubuntu 14.04/16.04

sudo apt-get update

sudo apt-get -y install build-essential libssl-dev python-pip git

curl -sL https://deb.nodesource.com/setup_6.x > node-install

sudo chmod 777 node-install

sudo ./node-install

sudo apt-get install -y nodejs

npm install -g hashtable

sudo chown -R $(whoami) $(npm config get prefix)/{lib/node_modules,bin,share}

npm install -g composer-cli

npm install -g composer-ui

npm install -g composer-rest-server


wget -qO- https://get.docker.com/ | sh

sudo pip install docker-compose

git clone https://github.com/fabric-composer/sample-applications


# 2.0 - deploy and run Hyperledger 0.6 dockers

/root/sample-applications/packages/getting-started/scripts/setup.sh 

run local hyperledger

    docker ps
    CONTAINER ID        IMAGE                           COMMAND                  CREATED              STATUS              PORTS                              NAMES
    c717ad115502        hyperledger/fabric-peer         "sh -c 'sleep 5; peer"   About a minute ago   Up About a minute   0.0.0.0:7050-7053->7050-7053/tcp   scripts_vp0_1
    b0962c9a784f        hyperledger/fabric-membersrvc   "membersrvc"             About a minute ago   Up About a minute   0.0.0.0:7054->7054/tcp             scripts_membersrvc_1


# 3.0 - deploy a sample project to local hyperledger using composer

run composer ui

nohup composer-ui &

access serverip:8080

select settings

add new connection *USE YOUR IP* and then switch to hlfabric profile

![](https://raw.githubusercontent.com/plucena/fabric-composer-install/master/con2.png)

enter user info WebAppAdmin DJY27pEnl16d

![](https://raw.githubusercontent.com/plucena/fabric-composer-install/master/con.png)

# 4.0 - install hyperledger viewer

*non-root install!!! install as user only*

git clone https://github.com/hyperledger/blockchain-explorer

cd blockchain-explorer/explorer_1/

sudo npm install -g grunt 

sudo npm install -g bower

npm install grunt-auto-install 

npm install grunt-contrib-copy

npm install express

grunt

nohup node exp-server.js&

![](https://raw.githubusercontent.com/plucena/fabric-composer-install/master/con5.png)


# 5.0 - run composer-rest-client
 composer-rest-server -p hlfabric -n org.acme.biznet -i WebAppAdmin -s DJY27pEnl16d -N never -P 3000 -S false

test yourserverip:3000

![](https://raw.githubusercontent.com/plucena/fabric-composer-install/master/con9.png)


# 6.0 - connect to a Bluemix Hyperledger 0.6 blockchain instance

Here's the connection profile that I used to connect to the Bluemix Blockchain service:

Basic.Peer URL: grpcs://c55967394f0b45e78b46f0e8e4f0d1f6-vp0.us.blockchain.ibm.com:30004

Basic.Membership services URL: grpcs://c55967394f0b45e78b46f0e8e4f0d1f6-ca.us.blockchain.ibm.com:30004

Basic.Event Hub URL: grpcs://c55967394f0b45e78b46f0e8e4f0d1f6-vp1.us.blockchain.ibm.com:31004

Basic.Key value store directory: /tmp/keyValStore

Security.certidicate: -----BEGIN CERTIFICATE-----
MIID6TCCA26gAwIBAgIQCiYEWw1faoRpM2xufaiPLTAKBggqhkjOPQQDAjBMMQsw
CQYDVQQGEwJVUzEVMBMGA1UEChMMRGlnaUNlcnQgSW5jMSYwJAYDVQQDEx1EaWdp
Q2VydCBFQ0MgU2VjdXJlIFNlcnZlciBDQTAeFw0xNjA2MDcwMDAwMDBaFw0xOTA2
MTIxMjAwMDBaMIGJMQswCQYDVQQGEwJVUzERMA8GA1UECBMITmV3IFlvcmsxDzAN
BgNVBAcTBkFybW9uazE0MDIGA1UEChMrSW50ZXJuYXRpb25hbCBCdXNpbmVzcyBN
YWNoaW5lcyBDb3Jwb3JhdGlvbjEgMB4GA1UEAwwXKi51cy5ibG9ja2NoYWluLmli
bS5jb20wWTATBgcqhkjOPQIBBggqhkjOPQMBBwNCAARTKAZypDOqw34HWujQeL82
j1e9rN1inpN6ngrq49+OpYIe8ckHnJhsWPpf+zeIQePboDQVUTDtYXh7212BsVoX
o4IB8jCCAe4wHwYDVR0jBBgwFoAUo53mH/naOU/AbuiRy5Wl2jHiCp8wHQYDVR0O
BBYEFK+1RoBnUnb8nr2hNtkUu3FRrbYuMDkGA1UdEQQyMDCCFyoudXMuYmxvY2tj
aGFpbi5pYm0uY29tghV1cy5ibG9ja2NoYWluLmlibS5jb20wDgYDVR0PAQH/BAQD
AgeAMB0GA1UdJQQWMBQGCCsGAQUFBwMBBggrBgEFBQcDAjBpBgNVHR8EYjBgMC6g
LKAqhihodHRwOi8vY3JsMy5kaWdpY2VydC5jb20vc3NjYS1lY2MtZzEuY3JsMC6g
LKAqhihodHRwOi8vY3JsNC5kaWdpY2VydC5jb20vc3NjYS1lY2MtZzEuY3JsMEwG
A1UdIARFMEMwNwYJYIZIAYb9bAEBMCowKAYIKwYBBQUHAgEWHGh0dHBzOi8vd3d3
LmRpZ2ljZXJ0LmNvbS9DUFMwCAYGZ4EMAQICMHsGCCsGAQUFBwEBBG8wbTAkBggr
BgEFBQcwAYYYaHR0cDovL29jc3AuZGlnaWNlcnQuY29tMEUGCCsGAQUFBzAChjlo
dHRwOi8vY2FjZXJ0cy5kaWdpY2VydC5jb20vRGlnaUNlcnRFQ0NTZWN1cmVTZXJ2
ZXJDQS5jcnQwDAYDVR0TAQH/BAIwADAKBggqhkjOPQQDAgNpADBmAjEA7LViaN74
OwIp/zqfwSRvURg965+m73/edCeNKrsLf6GuE0sLwpX6pQNnDlr6SzGnAjEA+qk0
sYRnd2gCQeD9fWbCJIw0vJDqeZr1WJ64aVoJ8kyASzY/yoarSm2wqujXJwEf
-----END CERTIFICATE-----
-----BEGIN CERTIFICATE-----
MIIDrDCCApSgAwIBAgIQCssoukZe5TkIdnRw883GEjANBgkqhkiG9w0BAQwFADBh
MQswCQYDVQQGEwJVUzEVMBMGA1UEChMMRGlnaUNlcnQgSW5jMRkwFwYDVQQLExB3
d3cuZGlnaWNlcnQuY29tMSAwHgYDVQQDExdEaWdpQ2VydCBHbG9iYWwgUm9vdCBD
QTAeFw0xMzAzMDgxMjAwMDBaFw0yMzAzMDgxMjAwMDBaMEwxCzAJBgNVBAYTAlVT
MRUwEwYDVQQKEwxEaWdpQ2VydCBJbmMxJjAkBgNVBAMTHURpZ2lDZXJ0IEVDQyBT
ZWN1cmUgU2VydmVyIENBMHYwEAYHKoZIzj0CAQYFK4EEACIDYgAE4ghC6nfYJN6g
LGSkE85AnCNyqQIKDjc/ITa4jVMU9tWRlUvzlgKNcR7E2Munn17voOZ/WpIRllNv
68DLP679Wz9HJOeaBy6Wvqgvu1cYr3GkvXg6HuhbPGtkESvMNCuMo4IBITCCAR0w
EgYDVR0TAQH/BAgwBgEB/wIBADAOBgNVHQ8BAf8EBAMCAYYwNAYIKwYBBQUHAQEE
KDAmMCQGCCsGAQUFBzABhhhodHRwOi8vb2NzcC5kaWdpY2VydC5jb20wQgYDVR0f
BDswOTA3oDWgM4YxaHR0cDovL2NybDMuZGlnaWNlcnQuY29tL0RpZ2lDZXJ0R2xv
YmFsUm9vdENBLmNybDA9BgNVHSAENjA0MDIGBFUdIAAwKjAoBggrBgEFBQcCARYc
aHR0cHM6Ly93d3cuZGlnaWNlcnQuY29tL0NQUzAdBgNVHQ4EFgQUo53mH/naOU/A
buiRy5Wl2jHiCp8wHwYDVR0jBBgwFoAUA95QNVbRTLtm8KPiGxvDl7I90VUwDQYJ
KoZIhvcNAQEMBQADggEBAMeKoENL7HTJxavVHzA1Nm6YVntIrAVjrnuaVyRXzG/6
3qttnMe2uuzO58pzZNvfBDcKAEmzP58mrZGMIOgfiA4q+2Y3yDDo0sIkp0VILeoB
UEoxlBPfjV/aKrtJPGHzecicZpIalir0ezZYoyxBEHQa0+1IttK7igZFcTMQMHp6
mCHdJLnsnLWSB62DxsRq+HfmNb4TDydkskO/g+l3VtsIh5RHFPVfKK+jaEyDj2D3
loB5hWp2Jp2VDCADjT7ueihlZGak2YPqmXTNbk19HOuNssWvFhtOyPNV6og4ETQd
Ea8/B6hPatJ0ES8q/HO3X8IVQwVs1n3aAr0im0/T+Xc=
-----END CERTIFICATE-----
-----BEGIN CERTIFICATE-----
MIIDrzCCApegAwIBAgIQCDvgVpBCRrGhdWrJWZHHSjANBgkqhkiG9w0BAQUFADBh
MQswCQYDVQQGEwJVUzEVMBMGA1UEChMMRGlnaUNlcnQgSW5jMRkwFwYDVQQLExB3
d3cuZGlnaWNlcnQuY29tMSAwHgYDVQQDExdEaWdpQ2VydCBHbG9iYWwgUm9vdCBD
QTAeFw0wNjExMTAwMDAwMDBaFw0zMTExMTAwMDAwMDBaMGExCzAJBgNVBAYTAlVT
MRUwEwYDVQQKEwxEaWdpQ2VydCBJbmMxGTAXBgNVBAsTEHd3dy5kaWdpY2VydC5j
b20xIDAeBgNVBAMTF0RpZ2lDZXJ0IEdsb2JhbCBSb290IENBMIIBIjANBgkqhkiG
9w0BAQEFAAOCAQ8AMIIBCgKCAQEA4jvhEXLeqKTTo1eqUKKPC3eQyaKl7hLOllsB
CSDMAZOnTjC3U/dDxGkAV53ijSLdhwZAAIEJzs4bg7/fzTtxRuLWZscFs3YnFo97
nh6Vfe63SKMI2tavegw5BmV/Sl0fvBf4q77uKNd0f3p4mVmFaG5cIzJLv07A6Fpt
43C/dxC//AH2hdmoRBBYMql1GNXRor5H4idq9Joz+EkIYIvUX7Q6hL+hqkpMfT7P
T19sdl6gSzeRntwi5m3OFBqOasv+zbMUZBfHWymeMr/y7vrTC0LUq7dBMtoM1O/4
gdW7jVg/tRvoSSiicNoxBN33shbyTApOB6jtSj1etX+jkMOvJwIDAQABo2MwYTAO
BgNVHQ8BAf8EBAMCAYYwDwYDVR0TAQH/BAUwAwEB/zAdBgNVHQ4EFgQUA95QNVbR
TLtm8KPiGxvDl7I90VUwHwYDVR0jBBgwFoAUA95QNVbRTLtm8KPiGxvDl7I90VUw
DQYJKoZIhvcNAQEFBQADggEBAMucN6pIExIK+t1EnE9SsPTfrgT1eXkIoyQY/Esr
hMAtudXH/vTBH1jLuG2cenTnmCmrEbXjcKChzUyImZOMkXDiqw8cvpOp/2PV5Adg
06O/nVsJ8dWO41P0jmP6P6fbtGbfYmbW0W5BjfIttep3Sp+dWOIrWcBAI+0tKIJF
PnlUkiaY4IBIqDfv8NZ5YBberOgOzW6sRBc4L0na4UU+Krk2U886UAb3LujEV0ls
YSEY1QSteDwsOoBrp+uvFRTp2InBuThs4pFsiv9kuXclVzDAGySj4dzp30d8tbQk
CAUw7C29C79Fv1C5qfPrmAESrciIxpg0X40KPMbp1ZWVbd4=
-----END CERTIFICATE-----\n

Security.certificate path: /certs/peer/cert.pem

User/Password: WebAppAdmin 55e0d8c1a1



    {
    "type": "hlf",
    "membershipServicesURL": "grpcs://f8946a6180f2431088ca17ce931a49dc-ca.us.blockchain.ibm.com:30001",
    "peerURL": "grpcs://f8946a6180f2431088ca17ce931a49dc-vp1.us.blockchain.ibm.com:30001",
    "eventHubURL": "grpcs://f8946a6180f2431088ca17ce931a49dc-vp1.us.blockchain.ibm.com:31001",
    "keyValStore": "/home/composer/.composer-credentials",
    "deployWaitTime": 300,
    "invokeWaitTime": 30,
    "certificate": "-----BEGIN CERTIFICATE-----\nMIID6TCCA26gAwIBAgIQCiYEWw1faoRpM2xufaiPLTAKBggqhkjOPQQDAjBMMQsw\nCQYDVQQGEwJVUzEVMBMGA1UEChMMRGlnaUNlcnQgSW5jMSYwJAYDVQQDEx1EaWdp\nQ2VydCBFQ0MgU2VjdXJlIFNlcnZlciBDQTAeFw0xNjA2MDcwMDAwMDBaFw0xOTA2\nMTIxMjAwMDBaMIGJMQswCQYDVQQGEwJVUzERMA8GA1UECBMITmV3IFlvcmsxDzAN\nBgNVBAcTBkFybW9uazE0MDIGA1UEChMrSW50ZXJuYXRpb25hbCBCdXNpbmVzcyBN\nYWNoaW5lcyBDb3Jwb3JhdGlvbjEgMB4GA1UEAwwXKi51cy5ibG9ja2NoYWluLmli\nbS5jb20wWTATBgcqhkjOPQIBBggqhkjOPQMBBwNCAARTKAZypDOqw34HWujQeL82\nj1e9rN1inpN6ngrq49+OpYIe8ckHnJhsWPpf+zeIQePboDQVUTDtYXh7212BsVoX\no4IB8jCCAe4wHwYDVR0jBBgwFoAUo53mH/naOU/AbuiRy5Wl2jHiCp8wHQYDVR0O\nBBYEFK+1RoBnUnb8nr2hNtkUu3FRrbYuMDkGA1UdEQQyMDCCFyoudXMuYmxvY2tj\naGFpbi5pYm0uY29tghV1cy5ibG9ja2NoYWluLmlibS5jb20wDgYDVR0PAQH/BAQD\nAgeAMB0GA1UdJQQWMBQGCCsGAQUFBwMBBggrBgEFBQcDAjBpBgNVHR8EYjBgMC6g\nLKAqhihodHRwOi8vY3JsMy5kaWdpY2VydC5jb20vc3NjYS1lY2MtZzEuY3JsMC6g\nLKAqhihodHRwOi8vY3JsNC5kaWdpY2VydC5jb20vc3NjYS1lY2MtZzEuY3JsMEwG\nA1UdIARFMEMwNwYJYIZIAYb9bAEBMCowKAYIKwYBBQUHAgEWHGh0dHBzOi8vd3d3\nLmRpZ2ljZXJ0LmNvbS9DUFMwCAYGZ4EMAQICMHsGCCsGAQUFBwEBBG8wbTAkBggr\nBgEFBQcwAYYYaHR0cDovL29jc3AuZGlnaWNlcnQuY29tMEUGCCsGAQUFBzAChjlo\ndHRwOi8vY2FjZXJ0cy5kaWdpY2VydC5jb20vRGlnaUNlcnRFQ0NTZWN1cmVTZXJ2\nZXJDQS5jcnQwDAYDVR0TAQH/BAIwADAKBggqhkjOPQQDAgNpADBmAjEA7LViaN74\nOwIp/zqfwSRvURg965+m73/edCeNKrsLf6GuE0sLwpX6pQNnDlr6SzGnAjEA+qk0\nsYRnd2gCQeD9fWbCJIw0vJDqeZr1WJ64aVoJ8kyASzY/yoarSm2wqujXJwEf\n-----END CERTIFICATE-----\n-----BEGIN CERTIFICATE-----\nMIIDrDCCApSgAwIBAgIQCssoukZe5TkIdnRw883GEjANBgkqhkiG9w0BAQwFADBh\nMQswCQYDVQQGEwJVUzEVMBMGA1UEChMMRGlnaUNlcnQgSW5jMRkwFwYDVQQLExB3\nd3cuZGlnaWNlcnQuY29tMSAwHgYDVQQDExdEaWdpQ2VydCBHbG9iYWwgUm9vdCBD\nQTAeFw0xMzAzMDgxMjAwMDBaFw0yMzAzMDgxMjAwMDBaMEwxCzAJBgNVBAYTAlVT\nMRUwEwYDVQQKEwxEaWdpQ2VydCBJbmMxJjAkBgNVBAMTHURpZ2lDZXJ0IEVDQyBT\nZWN1cmUgU2VydmVyIENBMHYwEAYHKoZIzj0CAQYFK4EEACIDYgAE4ghC6nfYJN6g\nLGSkE85AnCNyqQIKDjc/ITa4jVMU9tWRlUvzlgKNcR7E2Munn17voOZ/WpIRllNv\n68DLP679Wz9HJOeaBy6Wvqgvu1cYr3GkvXg6HuhbPGtkESvMNCuMo4IBITCCAR0w\nEgYDVR0TAQH/BAgwBgEB/wIBADAOBgNVHQ8BAf8EBAMCAYYwNAYIKwYBBQUHAQEE\nKDAmMCQGCCsGAQUFBzABhhhodHRwOi8vb2NzcC5kaWdpY2VydC5jb20wQgYDVR0f\nBDswOTA3oDWgM4YxaHR0cDovL2NybDMuZGlnaWNlcnQuY29tL0RpZ2lDZXJ0R2xv\nYmFsUm9vdENBLmNybDA9BgNVHSAENjA0MDIGBFUdIAAwKjAoBggrBgEFBQcCARYc\naHR0cHM6Ly93d3cuZGlnaWNlcnQuY29tL0NQUzAdBgNVHQ4EFgQUo53mH/naOU/A\nbuiRy5Wl2jHiCp8wHwYDVR0jBBgwFoAUA95QNVbRTLtm8KPiGxvDl7I90VUwDQYJ\nKoZIhvcNAQEMBQADggEBAMeKoENL7HTJxavVHzA1Nm6YVntIrAVjrnuaVyRXzG/6\n3qttnMe2uuzO58pzZNvfBDcKAEmzP58mrZGMIOgfiA4q+2Y3yDDo0sIkp0VILeoB\nUEoxlBPfjV/aKrtJPGHzecicZpIalir0ezZYoyxBEHQa0+1IttK7igZFcTMQMHp6\nmCHdJLnsnLWSB62DxsRq+HfmNb4TDydkskO/g+l3VtsIh5RHFPVfKK+jaEyDj2D3\nloB5hWp2Jp2VDCADjT7ueihlZGak2YPqmXTNbk19HOuNssWvFhtOyPNV6og4ETQd\nEa8/B6hPatJ0ES8q/HO3X8IVQwVs1n3aAr0im0/T+Xc=\n-----END CERTIFICATE-----\n-----BEGIN CERTIFICATE-----\nMIIDrzCCApegAwIBAgIQCDvgVpBCRrGhdWrJWZHHSjANBgkqhkiG9w0BAQUFADBh\nMQswCQYDVQQGEwJVUzEVMBMGA1UEChMMRGlnaUNlcnQgSW5jMRkwFwYDVQQLExB3\nd3cuZGlnaWNlcnQuY29tMSAwHgYDVQQDExdEaWdpQ2VydCBHbG9iYWwgUm9vdCBD\nQTAeFw0wNjExMTAwMDAwMDBaFw0zMTExMTAwMDAwMDBaMGExCzAJBgNVBAYTAlVT\nMRUwEwYDVQQKEwxEaWdpQ2VydCBJbmMxGTAXBgNVBAsTEHd3dy5kaWdpY2VydC5j\nb20xIDAeBgNVBAMTF0RpZ2lDZXJ0IEdsb2JhbCBSb290IENBMIIBIjANBgkqhkiG\n9w0BAQEFAAOCAQ8AMIIBCgKCAQEA4jvhEXLeqKTTo1eqUKKPC3eQyaKl7hLOllsB\nCSDMAZOnTjC3U/dDxGkAV53ijSLdhwZAAIEJzs4bg7/fzTtxRuLWZscFs3YnFo97\nnh6Vfe63SKMI2tavegw5BmV/Sl0fvBf4q77uKNd0f3p4mVmFaG5cIzJLv07A6Fpt\n43C/dxC//AH2hdmoRBBYMql1GNXRor5H4idq9Joz+EkIYIvUX7Q6hL+hqkpMfT7P\nT19sdl6gSzeRntwi5m3OFBqOasv+zbMUZBfHWymeMr/y7vrTC0LUq7dBMtoM1O/4\ngdW7jVg/tRvoSSiicNoxBN33shbyTApOB6jtSj1etX+jkMOvJwIDAQABo2MwYTAO\nBgNVHQ8BAf8EBAMCAYYwDwYDVR0TAQH/BAUwAwEB/zAdBgNVHQ4EFgQUA95QNVbR\nTLtm8KPiGxvDl7I90VUwHwYDVR0jBBgwFoAUA95QNVbRTLtm8KPiGxvDl7I90VUw\nDQYJKoZIhvcNAQEFBQADggEBAMucN6pIExIK+t1EnE9SsPTfrgT1eXkIoyQY/Esr\nhMAtudXH/vTBH1jLuG2cenTnmCmrEbXjcKChzUyImZOMkXDiqw8cvpOp/2PV5Adg\n06O/nVsJ8dWO41P0jmP6P6fbtGbfYmbW0W5BjfIttep3Sp+dWOIrWcBAI+0tKIJF\nPnlUkiaY4IBIqDfv8NZ5YBberOgOzW6sRBc4L0na4UU+Krk2U886UAb3LujEV0ls\nYSEY1QSteDwsOoBrp+uvFRTp2InBuThs4pFsiv9kuXclVzDAGySj4dzp30d8tbQk\nCAUw7C29C79Fv1C5qfPrmAESrciIxpg0X40KPMbp1ZWVbd4=\n-----END CERTIFICATE-----\n",
    "certificatePath": "/certs/peer/cert.pem"
    }
    
The hostname and port numbers in the URLs must come from the Bluemix dashboard. I find it easiest to get this information by navigating to "Service Credentials" and viewing the default credentials "Credentials-1". Here's an explanation of where each URL comes from:

membershipServicesURL is always "grpcs://" + url from the "ca" object (url also being discovery_host + ":" + discovery_port).

peerURL is always "grpcs://" + discovery_host + ":" + discovery_port from one of the peers listed in the "peers" array.

eventHubURL is always "grpcs://" + event_host + ":" + event_port from one of the peers listed in the "peers" array.

keyValStore is a directory on the file system of the system running Composer. If using the Docker images, then use the "/home/composer/.composer-credentials" path, otherwise use a directory that exists on your machine.

certificate comes from the "us.blockchain.ibm.com.cert" file which can be downloaded from the "cert" property in the credentials, for example "https://blockchain-certs.mybluemix.net/us.blockchain.ibm.com.cert". If you create this JSON manually, you must ensure that it ends with a "\n" newline character.

certificatePath comes from the "cert_path" property in the credentials.

You can also get the enrolment ID and enrolment secret to use for Bluemix from the credentials page; I recommend using "admin". Note that if you use the REST APIs to interact with the Bluemix service then you cannot use those same credentials with Composer.

One thing to note however is that the Bluemix Blockchain service can be unreliable due to problems with the event hub connection being timed out due to inactivity. When this happens, Composer will terminate and you may see an error. We are awaiting a fix to the hfc (Hyperledger Fabric Client) Node.js module that will correctly handle this error and reconnect as required.


# 7.0 - Yeoman CRUD Angular App Generator

# 8.0 - Run JS BDD tests
https://medium.com/@mrsimonstone/test-your-blockchain-business-network-using-hyperledger-composer-c8e8f112da08
