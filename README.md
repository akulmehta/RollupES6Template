# RollupES6Template

This repo contains a bare-bones example of how to use ES6 modules with Rollup.js to create a modular framework like D3.js or Jquery. It is built on the original repo: https://github.com/rollup/rollup-starter-app

  

## Getting started

Before you begin, make sure to install Rollup with NPM using the command: 
```
npm install --global rollup
```
Clone this repository and install its dependencies:

```bash
git clone https://github.com/akulmehta/RollupES6Template

cd rollup-starter-app

npm install
```
## How it works

 - The `public/index.html` file contains a `<script src='bundle.js'>` tag, which means we need to create `public/bundle.js`. The `rollup.config.js` file tells Rollup how to create this bundle, starting with `src/main.js`.
 - The file `src/main.js` imports functions and variables from `src/modules/*.js` and then exports them out as a module to be imported in other projects. 
 - The `rollup.config.js` file pulls information from `package.json` for copyright details  such as homepage, version, author name. 
 - The export object in the `rollup.config.js`  file has the entry point as `input: 'src/main.js'`. 
 - There are two outputs provided by the `rollup.config.js` file in Universal Module Definition (UMD) format:
    - The first output produces the file `public/bundle.js` which is the non-minified version of the module.
    - The second output produces the file `public/bundle.min.js` which is the terser minified module for production.
    - The sourcemap options are commented out but can be un-commented for debugging.

`npm run build` builds the application to `public/bundle.js` and `public/bundle.min.js`


`npm start` launches a server, using [serve](https://github.com/zeit/serve). Navigate to [localhost:3000](http://localhost:3000).

  

`npm run watch` will continually rebuild the application as your source files change.

  

`npm run dev` will run `npm start` and `npm run watch` in parallel.

  

## License

  

[MIT](LICENSE).
