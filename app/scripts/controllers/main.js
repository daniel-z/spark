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
        $scope.getOrderData = function (key) {
            console.debug(key);
        };
    });
