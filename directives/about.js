(function () {
  angular.module('portfolio')
  .directive('bnAbout', bnAbout);

  function bnAbout() {
    return {
      restrict: 'E',
      scope: {},
      templateUrl: '/partials/about.html',
      controller: controller,
      controllerAs: 'vm',
      bindToController: true,
    };
  }

  controller.$inject = [];
  function controller() {
    const vm = this;
  }
})();
