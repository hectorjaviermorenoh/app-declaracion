cd AppsScript
./pull.sh
cd ..

eval "$(ssh-agent -s)"
ssh-add ~/.ssh/hectorjaviermorenoh

git remote remove origin
git remote add origin git@github.com:hectorjaviermorenoh/app-declaracion.git

git add .
git commit -m "Cambios en Backend reestrcuturacion subirArchivo y creacion funcion subirArchivoFacturas, permitir crear varios productos desde postman"
git push origin main

npm run deploy






