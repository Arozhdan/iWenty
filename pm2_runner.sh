if ! type pm2 > /dev/null
then
    sudo npm install -g pm2 && pm2 start npm --name app -- serve
else
    pm2 restart app
fi
