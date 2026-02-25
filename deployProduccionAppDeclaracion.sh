eval "$(ssh-agent -s)"
ssh-add ~/.ssh/appdeclaracion

git remote remove origin
git remote add origin git@github.com:AppDeclaracion/appdeclaracion.git
npm run deploy






