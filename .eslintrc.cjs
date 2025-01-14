module.exports = {
  extends: '@it-incubator/eslint-config',
  settings: {
    'import/resolver': {
      alias: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        map: [['@', './src']],  
      },
    },
  },
};
