'use strict';

describe('myApp.teacher module', function() {

  beforeEach(module('myApp.teacher'));

  describe('teacher controller', function(){

    it('should ....', inject(function($controller) {
      //spec body
      var teacherCtrl = $controller('TeacherCtrl');
      expect(teacherCtrl).toBeDefined();
    }));

  });
});