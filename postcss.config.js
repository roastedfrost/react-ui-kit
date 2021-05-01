module.exports = function () {
  return {
    plugins: [
      require('postcss-preset-env')({
        browsers: 'last 2 versions'
      })
    ]
  };
};
