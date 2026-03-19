GIT  - Version control manager

Commands
# Where am I right now?
pwd

# What's inside this folder?
ls

# More detail — shows hidden files, sizes, permissions
ls -la

# Go into a folder
cd Desktop

# Go back one level
cd ..

# Go back two levels
cd ../..

# Go straight to your home directory
cd ~

# Go to your mern-journey project
cd ~/Desktop/mern-journey

FILE OPERATIONS

# Create a new folder
mkdir test-folder

# Create a new file
touch test-file.txt

# Write something into a file
echo "Hello from terminal" > test-file.txt

# Read a file's contents
cat test-file.txt

# Copy a file
cp test-file.txt test-copy.txt

# Move or rename a file
mv test-file.txt renamed-file.txt

# Delete a file (careful — no recycle bin)
rm renamed-file.txt

# Delete a folder and everything inside it (very careful)
rm -rf test-folder

GIT WORKFLOW

# Check the current state of your project
git status

# See your commit history
git log

# Prettier log view
git log --oneline

# See exactly what changed in a file
git diff

# Stage a specific file
git add index.html

# Stage everything
git add .

# Commit with a message
git commit -m "your message here"

# Push to GitHub
git push origin main

# Pull latest changes from GitHub
git pull origin main
```

**The three states of a file in Git:**
```
Untracked → Staged → Committed
   (new)    (git add)  (git commit)


COMMIT Messages
# Good commit messages:
git commit -m "Day 4: add terminal practice notes"
git commit -m "fix: correct email input label mismatch"
git commit -m "feat: add sticky navigation to profile page"

# Bad commit messages:
git commit -m "stuff"        ❌
git commit -m "fix"          ❌
git commit -m "asdfgh"       ❌
git commit -m "final final"  ❌
```


**The concept:**
```
main branch        ●─────────────────────────●
                              ↑ merge
feature branch         ●────●────●

Paste the output of git log --oneline
This will show the commits done in one line


What is the difference between git add and git commit?
git add with move files to staged and git commit will commit the changes


Why do we use branches instead of coding directly on main?
inorder to avoid changes directly in prod and merge back to main

What does rm -rf do and why is it dangerous?
removes everything

what does ls -la will do ?

Let me make sure you understand what you're seeing though. Next time you run it, look for these three things:
bashdrwxr-xr-x  3 harichandana  staff   96 Mar 13 10:22 .
drwxr-xr-x  8 harichandana  staff  256 Mar 13 09:15 ..
-rw-r--r--  1 harichandana  staff  842 Mar 13 10:20 index.html
-rw-r--r--  1 harichandana  staff  631 Mar 13 10:21 style.css
ColumnWhat it meansdrwxr-xr-xpermissions — d means directory, - means fileharichandanawho owns this file842file size in bytesMar 13 10:20last modified dateindex.htmlthe file name