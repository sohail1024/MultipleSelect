'use strict';

describe('myApp.Welcome_Page module', function() {

  beforeEach(module('myApp.Welcome_Page'));

  describe('Welcome_Page controller', function(){

    it('should ....', inject(function($controller) {
      //spec body
      var WelcomePageCtrl = $controller('WelcomePageCtrl');
      expect(WelcomePageCtrl).toBeDefined();
    }));

  });
});