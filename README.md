# Foobar

This is Discord Bot Code the deletes a messages that includes certain domains

## Installation

Node 14+ required

```bash
npm install #install the dependancy
```

## Usage

Going to need to make two files 

1. .env file is gonna need to be created (base dir)
    - with AUTH_TOKEN=#Your_Bot_Token#
2. config.json
    - with 
    ```json
    "discord_server_ids":[#####,#####,...]
    ```
        - Note: you can just throw your server id directly if you want(So no need for this). I just have so I could flip easy between my test server and desired server  


## TODO

 1. Intergrate the sub_domain list to makes sure nothing gets past(Its just another loop)
 2. Allow for to run on more than one discord server (also just another loop)
 
 Nice to have 
 3. Async and try catch the necessary items(not really need for this simple of a project, but proper) 
## License
[ISC]





### Why
    - I have a friend who keeps posting twitter links to others dismay.
        -- so spite... 