'use strict';

describe('myApp.dormitories module', function() {

  beforeEach(module('myApp.dormitories'));

  describe('dormitories controller', function(){

    it('should ....', inject(function($controller) {
      //spec body
      var dormitoriesCtrl = $controller('DormitoriesCtrl');
      expect(dormitoriesCtrl).toBeDefined();
    }));

  });
});