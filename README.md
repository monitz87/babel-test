# Introduction

This is the most minimal use case I could assemble to showcase my problem. I hope it helps illustrate the issue. If something is missing please contact me at `monitz87@gmail.com`

# Steps to reproduce

1. Install dependencies from root (`yarn`)
2. Navigate to the main package (`cd packages/main`)
3. Run the start script (`yarn start`)

The start script just runs `node -r ./babel.register.js src/index.js` which only imports a dummy function from the shared package.

All 3 babel configs (`babel.config.js` in the root and both `.babelrc.js` in each package) have `console.log` statements to check if they are loaded. As you can see, only the root and `main` configs are loaded, but not the `shared` one. It also throws an error because it cannot resolve `export` in `shared/utils/index.js`, which means that babel isn't transpiling that file, even though `babel.register.js` should take care of that (according to our previous conversation).

Another thing I need to be able to do is to transpile all the needed files beforehand in order to deploy them and run them with node in a remote server (like heroku). For this purpose I added a `yarn build` script to the `main` package, and a `yarn run-build` script that should run that build with `node`. That one doesn't work either (but I assume that is because I should tell babel to transpile the other package explicitly, which I don't know how to do).

If you could help me out I would be extremely grateful.