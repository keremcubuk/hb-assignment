This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), using the [Redux](https://redux.js.org/) and [Redux Toolkit](https://redux-toolkit.js.org/) template. In this project, you can see the react, redux best practices and tests. 

To react the project before download. Follow this [link](https://hb-assignment.keremcubuk.now.sh/). This react app, deployed by the [now.sh or vercel](https://vercel.com/)

- [HB Assignment Playground](https://hb-assignment.keremcubuk.now.sh/)

## Before Start

In the project directory, you can run:

### `npm install`

Before starting development, you must install npm modules. To install, npm modules run this command in terminal.

```shell
npm install
```


### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

```shell
npm start
```

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

```shell
npm test
```

### `npm build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

```shell
npm build
```

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.



## Folder Structure

This folder structure is created according to react best practices. All project files listed under `app` folder.

```shell
hb-assignment
├── app
│   ├── components          # UI components
│   ├── containers          # Screen components
│   ├── data                # Dummy datas for initialize
│   ├── images              # All app images goes here
│   ├── redux               # Redux, Actions, Contants define under this folder
│   ├── theme               # All SCSS files goes here
│   └── utils               # Helper functions
├── index.js                # Application start here
└── serviceWorker.js        # Service Integrations
└── setupTests.js           # Enzyme & Jest Test Integrations
```

## Theme

And also, in this project `React-Bootstrap` have been used. With this UI framework, all most all sample UI components used from `react-boootstrap`.

- UI Components are created with React Bootstrap.
- `SCSS` files listed under `theme` folder. And also, this folder is overrides the `bootstrap` theme, so that I have used `bootstrap` and `node-sass`. Thanks to `node-sass`, I override the some `scss` files. With the minimum customizing css.


## NPM Libraries

To create project and some screens, I have used `ready-to-use` libraries. This libraries, helps to create simple components.

- [React Bootstrap](https://react-bootstrap.github.io/) - UI Framework
- [Bootstrap](https://getbootstrap.com/) - UI Framework Stylings
- [node-sass](https://github.com/sass/node-sass) - To enable write `SCSS` & `SASS`
- [@primer/octicons-react](https://octicons.github.com) - Icon Library
- [react-router-dom](https://github.com/ReactTraining/react-router#readme) - Router
- [react-toastify](https://github.com/fkhadra/react-toastify#readme) - Toast Messages
- Redux, React-redux, Immer - For Redux Usage