(function () {
  angular.module('portfolio')
  .directive('bnProjects', bnProjects);

  function bnProjects() {
    return {
      restrict: 'E',
      scope: {},
      templateUrl: '/partials/projects.html',
      controller: 'mainCtrl',
    };
  }
})();
