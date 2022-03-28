#! /bin/bash
### read://https_pimylifeup.com/?url=https%3A%2F%2Fpimylifeup.com%2Fraspberry-pi-kiosk%2F#copy


### rm unneeded packages
sudo apt purge wolfram-engine scratch scratch2 nuscratch sonic-pi idle3 -y
sudo apt purge smartsim java-common minecraft-pi libreoffice* -y
sudo apt clean
sudo apt autoremove -y

sudo apt update && sudo apt upgrade -y

## needed tools
sudo apt install xdotool unclutter sed

### raspi-config settings
echo ">> boot / auto login to desktop. not CLI [sudo raspi-config]"
echo ">>>>> 3 Boot Options -> B1 Desktop / CLI -> B4 Desktop Autologin"
echo ">> set correct resolution of display [sudo raspi-config]"
echo ">>>> 7 Advanced Options -> A5 Resolution"
#sudo raspi-config

### create service
sudo cp ./kiosk.service /etc/systemd/system/
#sudo systemctl enable kiosk.service
sudo systemctl start kiosk.service
sudo systemctl status kiosk.service