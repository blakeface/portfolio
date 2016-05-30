(function () {
  angular.module('portfolio')
  .directive('bnProjects', bnProjects);

  function bnProjects() {
    return {
      restrict: 'E',
      scope: {},
      templateUrl: '/partials/projects.html',
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
