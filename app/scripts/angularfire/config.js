angular.module('firebase.config', [])
  .constant('FBURL', 'https://the-ark-dev.firebaseio.com')
  .constant('SIMPLE_LOGIN_PROVIDERS', ['password'])

  .constant('loginRedirectPath', '/login');