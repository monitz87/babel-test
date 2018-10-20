module.exports = api => {
  console.log('Loading root config');
  api.cache(true);
  return {
    babelrcRoots: ['.', './packages/*'],
    plugins: [
      '@babel/proposal-export-default-from'
    ],
  };
};
