# https://chat.openai.com/share/704180f1-163b-49d9-8124-f7c312f3499d
To open a single terminal window and execute both `npm start` and `code .` commands, you can modify the script as follows:

```bash
@echo off

cd /d D:\dev2prod\Provider_Project\ub_api_provider
start cmd /k "npm code . && npm start"
```

This will open a new terminal window, execute `npm start`, and then open Visual Studio Code in the same terminal window. The `/k` flag ensures that the terminal window remains open after executing the commands.
