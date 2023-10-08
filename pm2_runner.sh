if ! type pm2 > /dev/null
then
    sudo npm install -g pm2 && pm2 start npm --name app -- run serve
else
    sudo pm2 restart app || sudo pm2 start npm --name app -- run serve
fi
