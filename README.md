*instructions are still a work in progress*

# react-signage ♐️
live full screen web page that scrolls through user created content
- React: frontend
- Express: backend & api
- filebrowser: end user file managment
- raspberry pi kiosk: chromium full screen browser setup


# [ Setup ] 🛠
## React & Express - setup
0. *you'll need <a href="https://nodejs.org/en/">node & npm</a> installed on the host machine. <a href="https://www.w3schools.com/nodejs/nodejs_raspberrypi.asp">raspberry pi nodejs install</a>*
1. `cd react-signage/`
2. `npm i` - install npm packages with
3. `npm start` - spin up React & Express

## filebrowser - setup
1. `cd ./client/filebrowser`
2. `./install.sh` - intial install of filebrowser to a **Linux System**
3. `./start.sh` 

## kiosk - setup
1. `cd ./client/kiosk`
2. `./install.sh` - intial install of filebrowser to a **Raspberry Pi** *must use pi with Desktop Environment*
3. `./start.sh`  

# Feature Wishlist
0. integrated file manager. password protected. ✅
1. support files -> .mp4, .gif, .png, .jpg, .mp3
2. Create & edit html slides with a web GUI. Create Title & Text with choice of background.
3. build and select folders for quick "playlist" switching
4. GUI for 
  - auto play speed tweaks
  - show / hide previous & advance slide arrow buttons.
  - a few options for previous & advance slide arrow buttons.
  - a few options for slide transitions. 

# Credits
React front end & Express Backend <a href="https://www.youtube.com/watch?v=19CcxzZHwuI">youtube link - TheShow</a>
React slideshow / carosel <a href="https://www.youtube.com/watch?v=l1MYfu5YWHc">youtube link - Brian Design</a>
filebrowser setup <a href="read://https_tonyteaches.tech/?url=https%3A%2F%2Ftonyteaches.tech%2Ffilebrowser-tutorial%2F">Tony Teaches Tech</a>
raspberry pi kiosk setup <a href="https://pimylifeup.com/raspberry-pi-kiosk/">Pi My Life Up</a>

<details><summary>React "Get Started" info</summary><br/>

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
