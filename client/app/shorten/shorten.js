angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  $scope.link = {};
  $scope.addLink = function(link) {
    Links.addOne(link); // This... might... not work...
  };
});
