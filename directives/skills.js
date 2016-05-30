(function () {
  angular.module('portfolio')
  .directive('bnSkills', bnSkills);

  function bnSkills() {
    return {
      restrict: 'E',
      scope: {},
      templateUrl: '/partials/skills.html',
      controller: 'mainCtrl',
      bindToController: true,
    };
  }

})();
