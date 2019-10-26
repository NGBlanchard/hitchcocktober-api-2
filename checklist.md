mkdir express-boilerplate && cd $_ && git init
echo "node_modules" > .gitignore
npm init -y
npm i express morgan cors dotenv helmet
mkdir src
touch ./src/app.js
touch .env
echo "NODE_ENV=development" > .env
# using >> to append content
echo ".env" >> .gitignore

// Next create a server to start the whole thing
touch ./src/server.js