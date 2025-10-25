cd AppsScript
./pull.sh
cd ..

eval "$(ssh-agent -s)"
ssh-add ~/.ssh/hectorjaviermorenoh

git remote remove origin
git remote add origin git@github.com:hectorjaviermorenoh/app-declaracion.git

git add .
git commit -m "2410251058pm modificacion y eliminacion varios Todo funcionando Ok "
git push -f origin auth

# npm run deploy






