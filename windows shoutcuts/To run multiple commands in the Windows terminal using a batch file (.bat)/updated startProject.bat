 
@echo off

cd /d D:\dev2prod\Provider_Project\ub_api_provider
start cmd /k "code . &&  nodemon" 

cd /d D:\dev2prod\userApp_Project\ub_api_user
start cmd /k "code . &&  nodemon"

cd /d D:\dev2prod\Provider_Project\ub_provider
start cmd /k "code . &&  npm start"

cd /d D:\dev2prod\userApp_Project\ub_web_user
start cmd /k "code . &&  npm start"

