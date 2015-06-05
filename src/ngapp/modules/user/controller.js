(function(angular, $, window){

var app = angular.module('seedreap');

app
  .config(
        [
          '$httpProvider',
          function($httpProvider){
            $httpProvider.interceptors.push('appInterceptor');
          }
        ])
  .controller('user-login-form', ['$scope', function($scope){

  }]);

})(angular, jQuery, window);
