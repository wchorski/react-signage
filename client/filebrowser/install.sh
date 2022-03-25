#! /bin/bash
curl -fsSLk https://raw.githubusercontent.com/filebrowser/get/master/get.sh | bash
### needed -k to bypass security check

### might use this later
#project_root=$(dirname $(dirname $(dirname $(realpath $0 ))))
#echo $project_root

echo "copy ./filebrowser.service -> /etc/systemd/system/"

### Linux
sudo cp ./filebrowser.service /etc/systemd/system/
echo "[[ use 'sudo systemctl enable filebrowser.service' to make it persistant ]]"
#sudo systemctl enable filebrowser.service
sudo systemctl start filebrowser.service