#! /bin/bash

sudo cp ./react-signage.sh /etc/react-signage.sh
sudo cp ./react-signage.service /etc/systemd/system/react-signage.service

systemctl daemon-reload
systemctl enable react-signage.service
systemctl restart react-signage.service
systemctl status react-signage.service