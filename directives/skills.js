(function () {
  angular.module('portfolio')
  .directive('bnSkills', bnSkills);

  function bnSkills() {
    return {
      restrict: 'E',
      scope: {},
      templateUrl: '/partials/skills.html',
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
