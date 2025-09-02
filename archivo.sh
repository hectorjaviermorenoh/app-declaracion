eval "$(ssh-agent -s)"
ssh-add ~/.ssh/hectorjaviermorenoh

git add .
git commit -m "deploy appDeclaracion"
git push origin main

npm run deploy






