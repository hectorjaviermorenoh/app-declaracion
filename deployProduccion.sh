eval "$(ssh-agent -s)"
ssh-add ~/.ssh/appdeclaraciondian

git remote remove origin
git remote add origin git@github.com:appdeclaraciondian/app-declaracion.git
npm run deploy






