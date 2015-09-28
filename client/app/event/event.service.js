(function(){
  'use strict';

  class EventService{
    constructor($resource){
      this.resource = $resource('/api/events/:eventId',{eventId: '@id'},{
        search: {method:'GET', params:{charge:true} },
        save: {method:'POST', params:{charge:true} },
      });
    }

    getAll(){
      return this.resource.search({}).$promise.then(req=> req.data);
    }

    search(id){
      return this.resource.search({eventId: id }).$promise.then(req=> req.data);
    }


    save(name, detail){
      return this.resource.save({
        name:name,
        detail:detail
      }).$promise;
    }

    static eventFactory($resource){
      return new EventService($resource);
    }
  }

  EventService.eventFactory.$inject = ['$resource'];
  angular.module('exampleApp')
    .factory('app.component.events.service', EventService.eventFactory);
})();
