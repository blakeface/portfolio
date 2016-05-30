(function () {
  angular.module('portfolio')
  .directive('bnFooter', bnFooter);

  function bnFooter() {
    return {
      restrict: 'E',
      scope: {},
      templateUrl: '/partials/footer.html',
      controller: 'mainCtrl',
    };
  }

})();
