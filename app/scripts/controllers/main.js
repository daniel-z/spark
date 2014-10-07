'use strict';

/**
 * @ngdoc function
 * @name sparkApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the sparkApp
 */
angular.module('sparkApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
