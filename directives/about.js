(function () {
  angular.module('portfolio')
  .directive('bnAbout', bnAbout);

  function bnAbout() {
    return {
      restrict: 'E',
      scope: {},
      templateUrl: '/partials/about.html',
      controller: 'mainCtrl',
    };
  }
})();
