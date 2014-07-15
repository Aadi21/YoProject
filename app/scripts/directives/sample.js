'use strict';

angular.module('Aadi21.Yoproject')

  .directive('ngHelloWorld', function() {

    return {
      restrict: 'EAC',
      scope: true,
      compile: function compile(tElement, tAttrs) {
        tElement.html('<span>hello {{name}}</span>');
        return function postLink(scope, element, attrs, controller) {
          scope.name = 'world';
        };
      }
    };

  });
