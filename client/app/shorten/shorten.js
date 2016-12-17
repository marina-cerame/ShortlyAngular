angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  $scope.link = {};
  $scope.addLink = function(link) {
    console.log('THIS IS LINK', link);
    Links.addOne(link); // This... might... not work...
  };
});
