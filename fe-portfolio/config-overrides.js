const path = require('path');

module.exports = function override(config, env) {
  console.log('PARHHHPARHHHPARHHH', path, config.resolve.alias)
  config.resolve.alias = {
    ...config.resolve.alias,
    '@sharedComponents': path.resolve(__dirname, 'src/common/sharedComponents/'),
    '@hooks': path.resolve(__dirname, 'src/common/hooks/')
  };
  return config;
};