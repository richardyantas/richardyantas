# make sure deploy on the main terminal not vscode terminal
npm run deploy
# export PUBLIC_URL=localhost:3000
# export PUBLIC_URL=http://richardyantas.github.io/richardyantas
# yarn build
git add .
git commit -m "deploying .."
git push -u origin master
google-chrome https://richardyantas.github.io/richardyantas/
# echo "changing the public_url to development format ... "
# export PUBLIC_URL=http://localhost:3000/
