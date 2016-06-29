(function () {
  angular.module('portfolio')
  .directive('bnBody', bnBody);

  function bnBody() {
    return {
      restrict: 'E',
      scope: {},
      templateUrl: '/partials/body.html',
      controller: 'mainCtrl',
    };
  }
})();
