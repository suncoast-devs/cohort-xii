'use strict';

/**
 * @ngdoc function
 * @name helloWorldApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the helloWorldApp
 */
angular.module('helloWorldApp')
  .controller('AboutCtrl', function () {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
