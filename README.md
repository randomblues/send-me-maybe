# Send Me Maybe

An Insomnia plugin that asks for confirmation before sending restricted HTTP requests. Like, seriously, are you sure?

## Features

- Blocks methods like POST, PUT, DELETE unless you confirm
- Asks for "yes" before sending the request

## Configuration

Set an environment variable `sendMeMaybe` like below along with your other environment variables 
in each of your insomnia environments:

{
"sendMeMaybe": {
        "env": "production",
        "restrictedRequests": [ "POST", "PUT", "DELETE" ]
        },
"host": "domain.com",
"protocol": "https",
...
}

## Restart Insomnia If Needed


