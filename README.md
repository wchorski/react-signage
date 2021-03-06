*instructions are still a work in progress*

# react-signage ♐️
live full screen web page that scrolls through user created content
- React: frontend <a href="http://localhost:3000">http://<HOST-IP>:3000<a>
- Express: backend & api <a href="http://localhost:3001/api/media1">http://<HOST-IP>:3001/api/media1<a>
- filebrowser: end user file managment <a href="http://localhost:8080">http://<HOST-IP>:8080<a>
- raspberry pi kiosk: chromium full screen browser setup
- JSON api. Automatically updates when media folder is changed


# [ Setup ] 🛠
## React & Express - setup
*you'll need <a href="https://nodejs.org/en/">node & npm</a> installed on the host machine. <a href="https://www.w3schools.com/nodejs/nodejs_raspberrypi.asp">raspberry pi nodejs install</a>*

0. cd into **WHEREVER YOU'RE GONNA PUT IT**
0. `git clone https://github.com/wchorski/react-signage.git`
0. `cd ./react-signage/`
0. `npm i` - install backend packages
0. `cd ./client/react-frontend`
0. `npm i` - install react frontend packages
0. `cd ..`
0. `npm start` - spin up React & Express dev environment from **react-signage**'s root directory
*i should probably put this all in one shell script*

# [ Caviats ]
0. all images have to be .jpeg
0. can *NOT* have spaces in the image file name 
0. change autoscroll speed at *./client/react-frontend/src/components/ImageSlider.js* line 41 `autoAdv(5)`

## [filebrowser](https://github.com/filebrowser/filebrowser) - LINUX setup
*you can install filebrowser yourself or use my handy shell scripts. You're funeral*
0. `cd ./client/filebrowser`
0. edit `filebrowser.service` with your /home/**USERNAME**/react-signage/client/filebrowser/config.json
0. `./install.sh` - intial install of filebrowser to a **Linux System**
0. `./start.sh` 

## [kiosk](https://pimylifeup.com/raspberry-pi-kiosk/) - PiMyLifeUp setup
*you can install the pi kiosk using pimylifeup's tutorial or use my handy shell scripts. You're funeral*
1. `cd ./client/kiosk`
2. `./install.sh` - intial install of filebrowser to a **Raspberry Pi** *must use pi with Desktop Environment*
3. `./start.sh`  

## Feature Wishlist 🌠
0. ---> load all images into browser first. Not one at a time per click
0. figure out how to get React Component to update without refreshing the whole page
0. integrated file manager. password protected. ✅
1. support files -> .mp4, .gif, .png, .jpg, .mp3
2. Create & edit html slides with a web GUI. Create Title & Text with choice of background.
3. build and select folders for quick "playlist" switching
4. GUI for 
-  - auto play speed tweaks *right now autoPlay() hard coded to 4 seconds*
-  - show / hide previous & advance slide arrow buttons.
-  - a few options for previous & advance slide arrow buttons.
-  - a few options for slide transitions. 
5. HDMI CEC control

## Credits
- React front end & Express Backend <a href="https://www.youtube.com/watch?v=19CcxzZHwuI">youtube link - TheShow</a>
- React slideshow / carosel <a href="https://www.youtube.com/watch?v=l1MYfu5YWHc">youtube link - Brian Design</a>
- filebrowser setup <a href="read://https_tonyteaches.tech/?url=https%3A%2F%2Ftonyteaches.tech%2Ffilebrowser-tutorial%2F">Tony Teaches Tech</a>
- raspberry pi kiosk setup <a href="https://pimylifeup.com/raspberry-pi-kiosk/">Pi My Life Up</a>

# ♐️ ♐️ ♐️ ♐️ ♐️ ♐️ ♐️ ♐️ ♐️ ♐️ ♐️ ♐️ ♐️ ♐️ ♐️ ♐️ ♐️ ♐️ ♐️ ♐️ ♐️ ♐️ ♐️ ♐️ 
<details><summary>React "Get Started" default info</summary><br/>

  # Getting Started with Create React App

  This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

  ## Available Scripts

  In the project directory, you can run:

  ### `npm start`

  Runs the app in the development mode.\
  Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

  The page will reload when you make changes.\
  You may also see any lint errors in the console.

  ### `npm test`

  Launches the test runner in the interactive watch mode.\
  See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

  ### `npm run build`

  Builds the app for production to the `build` folder.\
  It correctly bundles React in production mode and optimizes the build for the best performance.

  The build is minified and the filenames include the hashes.\
  Your app is ready to be deployed!

  See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

  ### `npm run eject`

  **Note: this is a one-way operation. Once you `eject`, you can't go back!**

  If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

  Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

  You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

  ## Learn More

  You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

  To learn React, check out the [React documentation](https://reactjs.org/).

  ### Code Splitting

  This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

  ### Analyzing the Bundle Size

  This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

  ### Making a Progressive Web App

  This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

  ### Advanced Configuration

  This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

  ### Deployment

  This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

  ### `npm run build` fails to minify

  This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
  
</details>
