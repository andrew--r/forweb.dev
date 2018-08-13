const presets = [
  [
    '@babel/env',
    {
      targets: {
        node: 'current',
      },
    },
  ],
  '@babel/preset-react',
];

module.exports = { presets };
