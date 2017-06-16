npm install -g hashtable

cd /root

wget http://67.207.83.133/composer.zip

unzip composer.zip

ln -s /root/node_modules/composer-rest-server/cli.js /usr/bin/composer-rest-server

ln -s /root/node_modules/composer-cli/cli.js /usr/bin/composer-cli

ln -s /root/node_modules/composer-ui/cli.js /usr/bin/composer-ui

nohup composer-ui -p 80&
