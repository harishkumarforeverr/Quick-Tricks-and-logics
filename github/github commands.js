1. initial git application

2. the setup the envrionemnt variable
   url : https://www.youtube.com/watch?v=v3RCp26naoI
   
3. git --version

4. git config --list

5. git config --global user.name "harish kumar"
   git config --global user.email "harishking809@gmail.com"

   To check/get old values:

   git config --global user.email
   git config --global user.name
   Output:

   youold@email.com
   youroldgoodname

   To set new values

   git config --global user.email yournew@email.com
   git config --global user.name yournewgoodname
   
6.git init

7. git status

8. create a file .gitignore

9. git add .

10. git status

11. git reset
    these comamnd will unstage the completed stage file
  
12 git rest <secific file name>
    these commmand will unstage only one file
    
13. git log

14. git add .

15. git commit -m "message "

16. git clone url 

17. git diff

18 after the creating the branch , if we want publish tat branch , then we shud write these command
   git push -u origin <branch name>
   
19. git checkout -b BRANCH_NAME creates a new branch and checks out the new branch while git branch BRANCH_NAME creates a new branch but leaves you on the same branch.

    In other words git checkout -b BRANCH_NAME does the following for you.

    git branch BRANCH_NAME    # create a new branch
    git switch BRANCH_NAME    # then switch to the new branch
   
20. git branch -a (shows all the branches)

21. git checkout -b  branch_name 

22. git checkout master

23. git pull origin master

24. git brnch --merged

25. git merge <branch name>

26. git push origin

27. git commit -m "messgae"
   so if we want to remove the above commit message then we must need to
   write these below command

28**   git commit --amend -m "new message"
     these command changes only the last commited message

29.    
    To check/get old values:

    git config --global user.email
    git config --global user.name
   Output:

   youold@email.com
   youroldgoodname

   To set new values

    git config --global user.email yournew@email.com
    git config --global user.name yournewgoodname

 // hello