'use strict';

/* Controllers */

var controllers = angular.module('controllers', ['services']);

  controllers.controller('ProjectController', ['$scope', 'Project',
    function($scope, Project) {

      $scope.data = Project.query();

      $scope.addResource = function(selectedProject, resourceName) {
        var index = _.findIndex($scope.data, selectedProject);
        $scope.data[index].Resources.push(resourceName);
      };
    }]);

  controllers.controller('ProjectDetailController', ['$scope', '$stateParams', 'Project',
    function($scope, $stateParams, Project) {
      $scope.data = Project.get({id: $stateParams.id});
    }]);
