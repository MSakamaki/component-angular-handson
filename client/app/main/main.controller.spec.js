'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('exampleApp'));
  beforeEach(module(function($provide) {
    $provide.value('app.component.events.service',{
      getAll: jasmine.createSpy().andCallFake(() => {
        return {
          then:cb=> cb([{"no":1,"name":"event1","detail":"the event no 1","tag":"no"},
                        {"no":2,"name":"event2","detail":"the event no 2","tag":"no"}])
        };
      }),
      search: jasmine.createSpy().andCallFake(() => {
        return {
          then:cb=> cb([{"no":1,"name":"event1","detail":"the event no 1","tag":"no"}])
        }
      })
    });
  }));

  var MainCtrl,
      scope,
      eventService;

  // Initialize the controller and a mock scope
  beforeEach(inject([
    '$controller',
    '$rootScope',
    'app.component.events.service',
    function ($controller, $rootScope, _eventService_) {
      eventService = _eventService_;
      scope = $rootScope.$new();
      MainCtrl = $controller('MainCtrl', {
        $scope: scope
      });
    }]));

  it('getAll', function () {
    scope.allSearch();
    expect(scope.events.length).toBe(2);
    expect(eventService.getAll).toHaveBeenCalled();
    expect(eventService.getAll).toHaveBeenCalledWith({});
  });

  it('search', function () {
    scope.eventfilter = 10;
    scope.search(1);
    expect(scope.events.length).toBe(1);
    expect(eventService.search).toHaveBeenCalled();
    expect(eventService.search).toHaveBeenCalledWith(10);
  });
});
