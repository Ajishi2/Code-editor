module.exports = {
    webpack: (config) => {
      // Add source map loader rule
      config.module.rules.push({
        test: /\.js$/,
        enforce: 'pre',
        use: ['source-map-loader'],
      });
      return config;
    },
  };
  