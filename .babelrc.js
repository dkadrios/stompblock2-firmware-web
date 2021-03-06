module.exports = {
  env: {
    test: {},
    development: {
      plugins: [
        [
          'babel-plugin-jsx-remove-data-test-id',
          { attributes: 'data-testid' },
        ],
        'react-hot-loader/babel',
      ],
    },
    production: {
      plugins: [
        [
          'babel-plugin-jsx-remove-data-test-id',
          { attributes: 'data-testid' },
        ],
      ],
    },
  },
  presets: ['@babel/preset-env', '@babel/preset-react'],
  plugins: [
    ['@babel/plugin-proposal-class-properties', { loose: false }],
    '@babel/plugin-proposal-export-default-from',
    '@babel/plugin-proposal-export-namespace-from',
    '@babel/plugin-proposal-optional-chaining',
    '@babel/plugin-syntax-async-generators',
    '@babel/plugin-syntax-import-meta',
    [
      '@babel/plugin-transform-runtime',
      {
        absoluteRuntime: false,
        corejs: false,
        helpers: true,
        regenerator: true,
        useESModules: false,
      },
    ],
  ],
  retainLines: true,
}
