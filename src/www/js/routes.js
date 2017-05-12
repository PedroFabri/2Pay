angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

  .state('2Pay', {
    cache: false,
    url: '/home',
    templateUrl: 'templates/2Pay.html',
    controller: '2PayCtrl'
  })

  .state('addNew', {
    url: '/add',
    templateUrl: 'templates/addNew.html',
    controller: 'addNewCtrl'
  })

  .state('details', {
    url: '/details/:id',
    templateUrl: 'templates/details.html',
    controller: 'detailsCtrl'
  })

$urlRouterProvider.otherwise('/home')

  

});