echo 'stop nodejs and pull latest code'

git reset --hard

git pull --rebase origin master

cnpm i --production

cnpm run build

pm2 restart resume

echo 'deploy success...'
