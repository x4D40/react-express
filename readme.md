# Template for React + Express Apps

## Running
Once you clone the repo run `npm i`  
To start run `npm start`

## Server
- `server/routes` folder contains all api routes, changes response type to `application/json`
  - `server/routes/index.js` registers all api routes with the application
    - sub folders group together related endpoints to make code cleaner
- `server.js` minimal setup for express server, if you need to add cors or other middleware that can be done here

## Client
- React front end, `client/public` folder doesnt have to be changed unless you want to add public files
- App.js has the browser router set up to route different pages
  - there is a landing page at `/` and a test page at `/test`

## Config
You can change any of the start up scripts etc to what fits you best, this is just a sample repo to get an Express/React app fast.

## AWS deployment EC2 (amazon linux)
1. create ec2 instance and ssh using private key, when creating open port 80 for inbound rules
1. `sudo yum update -y`
1. `sudo install git -y`
1. `sudo install nginx` command will say to run a different command, copy paste that and run it
1. `curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.34.0/install.sh | bash`
1. `. ~/.nvm/nvm.sh`
1. `nvm install node`
1. `sudo vim /etc/nginx/nginx.conf`
Find the server config area and put this:
```
server {
   listen         80 default_server;
   listen         [::]:80 default_server;
   server_name    localhost;
   root           /usr/share/nginx/html;
   location / {
       proxy_pass http://127.0.0.1:5000;
       proxy_http_version 1.1;
       proxy_set_header Host $host;
   }
}
```
1. `sudo service nginx restart`
1. clone your repo and run `npm i` then `npm run prod &`, the & will push app into background, to stop type `fg` then press `ctrl+c`
Feel free to change any of the config or use a different reverse proxy, you should also make sure you are using correct user permissions  
The app should be live at the URL of your ec2 instace. You should also look into running the app as a service in case it crashes.
