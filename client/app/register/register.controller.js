'use strict';

angular.module('exampleApp')
  .controller('RegisterCtrl', [
    '$scope',
    'app.component.events.service',
    function ($scope, eventsService) {

      $scope.register = ()=>{
        console.log('register', eventsService);
        eventsService.save($scope.name, $scope.detail)
          .then(()=> alert('保存しました。'));
      };

    }]);
