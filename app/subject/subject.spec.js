'use strict';

describe('myApp.subject module', function() {

  beforeEach(module('myApp.subject'));

  describe('subject controller', function(){

    it('should ....', inject(function($controller) {
      //spec body
      var subjectCtrl = $controller('SubjectCtrl');
      expect(subjectCtrl).toBeDefined();
    }));

  });
});