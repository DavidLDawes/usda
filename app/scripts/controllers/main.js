'use strict';

/**
 * @ngdoc function
 * @name usdaRdrApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the usdaRdrApp
 */
angular.module('usdaRdrApp')
  .controller('MainCtrl', function ($scope, usda) {

    $scope.apple = usda.searchFoods('apple');
  });

