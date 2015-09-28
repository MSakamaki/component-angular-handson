'use strict';

angular.module('exampleApp')
  .controller('MainCtrl', [
    '$scope',
    'app.component.events.service',
    'app.component.events.sheard.service',
    function($scope, eventService, eventData) {
      $scope.eventData = eventData;

      $scope.search = ()=>{
        eventService.search($scope.eventfilter).then(data=>{
          eventData.event.create(data);
        });
      };

      $scope.allSearch = ()=>{
        eventService.getAll({}).then(data=>{
          eventData.event.create(data);
        });
      };
    }]);
