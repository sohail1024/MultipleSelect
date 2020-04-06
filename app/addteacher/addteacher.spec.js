'use strict';

describe('myApp.addteacher module', function() {

  beforeEach(module('myApp.addteacher'));

  describe('addteacher controller', function(){

    it('should ....', inject(function($controller) {
      //spec body
      var addTeacherCtrl = $controller('AddTeacherCtrl');
      expect(addTeacherCtrl).toBeDefined();
    }));

  });
});