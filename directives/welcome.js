(function () {
  angular.module('portfolio')
  .directive('bnWelcome', bnWelcome);

  function bnWelcome() {
    return {
      restrict: 'E',
      scope: {},
      templateUrl: '/directives/welcome.html',
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
