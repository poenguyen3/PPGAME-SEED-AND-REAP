(function(angular, $, window){
  var app = angular.module('seedreap');

  app.factory('appInterceptor', ['$location', '$q', function($location, $q){
    return {
      response: function(response) {
        // What you want to do when success
        return response;
      },
      responseError: function(response){
        // U got an error! let's handle this
        if (response.state === 401){
          $location.url('/login');
        }
        return $q.reject(response);
      },
      tryit: function(){
        console.log("HELO");
      }
    }
  }])
})(angular, $, window);
