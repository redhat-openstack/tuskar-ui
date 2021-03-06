angular.module('hz').directive('hrNumberPicker', ['hzConfig', function(hzConfig) {
  return {
    restrict: 'A',
    replace: true,
    scope: { initial_value: '=value' },
    templateUrl: hzConfig.static_url + 'infrastructure/angular_templates/numberpicker.html',
    link: function(scope, element, attrs) {
      input = element.find('input').first();
      angular.forEach(element[0].attributes, function(attribute) {
        input_attr = input.attr(attribute.nodeName);
        if (typeof input_attr === 'undefined' || input_attr === false) {
          input.attr(attribute.nodeName, attribute.nodeValue);
        }
      });

      scope.value = scope.initial_value;
      scope.disabledInput = (angular.isDefined(attrs.readonly)) ? true : false;

      scope.disableArrow = function() {
        return (scope.value === 0) ? true : false;
      };

      scope.incrementValue = function() {
        if(!scope.disabledInput) {
          scope.value++;
        }
      };

      scope.decrementValue = function() {
        if(!scope.disabledInput && scope.value !== 0) {
          scope.value--;
        }
      };
    }
  };
}]);
