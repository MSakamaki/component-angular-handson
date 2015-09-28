/**
 * This file uses the Page Object pattern to define the main page for tests
 * https://docs.google.com/presentation/d/1B6manhG0zEXkC-H-tPo2vwU06JhL8w9-XCF9oehXzAQ
 */

'use strict';

var MainPage = function() {
  this.inputEventfilter = element(by.model('eventfilter'));
  this.btnSearch = element(by.css('button[ng-click="search()"]'));
  this.listEvents = element.all(by.repeater('event in eventData.event.get() | filter:eventData.tag.filter()'));//element.all(by.repeater('event in eventData.event.get() | filter:eventData.tag.filter()'));

  this.eventSearch = function(eventNo){
    var mainPage  = new MainPage();
    return browser.wait(function(){
      return mainPage.inputEventfilter.isPresent();
    }).then(function(){
      mainPage.inputEventfilter.sendKeys(eventNo);
      return mainPage.btnSearch.click();
    });
  }
};

module.exports = new MainPage();

