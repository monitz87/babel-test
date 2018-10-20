require('@babel/register')({
  cwd: __dirname,
  rootMode: 'upward',
  ignore: [/node_modules/],
});
