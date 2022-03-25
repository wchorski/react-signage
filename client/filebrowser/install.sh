#! /bin/bash
#curl -fsSL https://raw.githubusercontent.com/filebrowser/get/master/get.sh | bash
### needed -k to bypass security check
# ???????

project_root=$(dirname $(dirname $(dirname $(realpath $0 ))))
echo $project_root

### Linux
#cp ./filebrowser.service /etc/systemd/system/
#systemctl enable filebrowser.service
#systemctl start filebrowser.service