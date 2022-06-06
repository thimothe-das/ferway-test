## Installation

Nécéssite [Node.js](https://nodejs.org/)
Nécéssite [yarn](https://yarnpkg.com/) ou [npm](https://docs.npmjs.com/)

Installer les dépendances et démarrer le serveur.

```sh
git clone
cd ferway
yarn install
yarn start
```

## Version en ligne

[Application déployé sur Firebase](https://react-ferway.web.app)

## Bilan

### 2 difficultés

- Créé des valeurs pars défaut pour les <select/>,
- Problème de création de projet via le CLI firebase, j'ai du créé mon projet via l'interface graphique pour pouvoir
  déployer l'application

### 2 réussites

- Le responsive a été très rapide à faire évoluer, juste deux modifications de classe css résolvent
  les principaux problèmes
- Division du code qui permet une meilleure lecture
  (Exemple : chaque useEffect gère leur propre partie dans leur propre component)

### 2 évolutions possibles

- Pouvoir choisir dans quel sens, on veut les prochaines horaires (A, R ou A+R)
- Pouvoir utiliser la localisation GPS pour sélectionner automatiquement la station la proche

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
