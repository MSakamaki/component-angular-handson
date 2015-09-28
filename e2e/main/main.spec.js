'use strict';

describe('Main View', function() {
  var page;

  beforeEach(function() {
    browser.get('/');
    page = require('./main.po');
  });

  it('10を設定してフィルタ検索すると、最初の１行目にevent10が表示される', function(done) {
    page.eventSearch(10).then(function(){
      expect(page.listEvents.get(0).getText()).toBe('event10\n10 : the event no 10 to TAG:bazz');
      done();
    });
  });
});
