(function () {
  angular.module('portfolio')
  .directive('bnWelcome', bnWelcome);

  function bnWelcome() {
    return {
      restrict: 'E',
      scope: {},
      templateUrl: '/partials/welcome.html',
      controller: 'mainCtrl',
    };
  }

})();
