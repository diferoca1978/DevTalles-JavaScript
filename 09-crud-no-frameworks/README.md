# Start project

1. Run ``` npm install ``` to bring the node modules.

2. Run ``` npm install json-server --save-dev ``` to install it as Dev dependency.

3. Create a folder called server, and into it create a file called db.json with data.

4. Create a new script into package.json file like this:
    ``` "server": "json-server server/db.json --port 3001"```
    This run the json-server package,then take the path and finally set the port.

5. Run ``` npm run server ``` to use the endpoints provided.