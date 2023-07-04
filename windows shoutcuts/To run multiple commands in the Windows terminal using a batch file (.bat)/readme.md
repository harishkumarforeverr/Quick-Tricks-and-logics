#  https://chat.openai.com/share/f693cd7c-c71e-426f-a392-f5a36c825002


To run multiple commands in the Windows terminal using a batch file (.bat), you can modify your batch file as follows:

```batch
@echo off

cd /d D:\dev2prod\Provider_Project\ub_api_provider
start code .

cd /d D:\dev2prod\userApp_Project\ub_api_user
start code .

cd /d D:\dev2prod\Provider_Project\ub_provider
start code .

cd /d D:\dev2prod\userApp_Project\ub_web_user
start code .
```

The `start` command is added before `code .` to open each directory in Visual Studio Code in separate instances.

Save the file with a .bat extension, for example, `runcode.bat`. Then double-click the batch file to execute it. This will open each specified directory in separate instances of Visual Studio Code.

Note: Ensure that the `code` command is recognized by your system. If you have installed Visual Studio Code, it should be added to the system's PATH variable automatically. If you encounter any issues, try providing the complete path to the `code` command in the batch file, like `"C:\Program Files\Microsoft VS Code\Code.exe" .`.

Make sure the paths provided in the batch file are correct and correspond to existing directories on your system.
