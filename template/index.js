require('babel-core/register')({
  presets: [
    [
      'env',
      {
        targets: {
          node: true,
        },
      },
    ],
  ],
  ignore: /node_modules\/(?!koa-*)/,
  babelrc: false,
});
require('./server/app');
