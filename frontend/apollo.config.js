module.exports = {
  client: {
    service: {
      name: 'conexia-app',
      url: 'http://localhost:4000/graphql',
    },
    // Files processed by the extension
    includes: [
      'src/**/*.vue',
      'src/**/*.js',
    ],
  },
}
