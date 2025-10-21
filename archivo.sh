cd AppsScript
./pull.sh
cd ..

eval "$(ssh-agent -s)"
ssh-add ~/.ssh/hectorjaviermorenoh

git remote remove origin
git remote add origin git@github.com:hectorjaviermorenoh/app-declaracion.git

git add .
git commit -m "201025Funcionando"
git push origin main

npm run deploy






