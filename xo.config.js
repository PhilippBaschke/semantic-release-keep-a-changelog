module.exports = {
  overrides: [
    {
      files: '**/*.test.js',
      envs: ['jest'],
    },
  ],
  prettier: true,
  rules: { 'unicorn/prefer-module': 'off' },
};
