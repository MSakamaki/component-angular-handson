'use strict';

describe('Service: event', function () {

  // load the service's module
  beforeEach(module('exampleApp'));

  // instantiate service
  var event, $httpBackend;
  beforeEach(inject([
    'app.component.events.service',
    '$httpBackend',
    function (_event_, _$httpBackend_) {
      event = _event_;
      $httpBackend = _$httpBackend_;
    }]));

  it('should do something', function () {
    expect(!!event).toBe(true);
  });

  describe('get', ()=>{
    afterEach(()=> $httpBackend.verifyNoOutstandingExpectation());
    afterEach(()=> $httpBackend.verifyNoOutstandingRequest());
    beforeEach(()=> $httpBackend.resetExpectations());

    describe('getAll', ()=>{

      var requestJson = {
          "data":[
            {"no":1,"name":"event1","detail":"the event no 1","tag":"no"},
            {"no":2,"name":"event2","detail":"the event no 2","tag":"no"}
          ]};
      beforeEach(()=>{
        $httpBackend.expectGET(/.*\/api\/events.*/).respond(201, requestJson);
      });
      it('call', ()=>{
        var result;
        event.getAll().then(data=>{
          result=data;
        });
        $httpBackend.flush();
        expect(result).toEqual(requestJson.data);
      });
    });

    describe('search', ()=>{
      var requestJson = {
          "data":[
            {"no":1,"name":"event1","detail":"the event no 1","tag":"no"}
          ]};
      beforeEach(()=>{
        $httpBackend.expectGET(/.*\/api\/events\/1.*/).respond(201, requestJson);
      });
      it('call', ()=>{
        var result;
        event.search(1).then(data=>{
          result=data;
        });
        $httpBackend.flush();
        expect(result).toEqual(requestJson.data);
      });
    });
  });

});
