module.exports = {
  branches: ['main'],
  plugins: [
    '@semantic-release/commit-analyzer',
    'semantic-release-keep-a-changelog-local',
    '@semantic-release/npm',
    '@semantic-release/github',
  ],
};
