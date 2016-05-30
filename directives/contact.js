(function () {
  angular.module('portfolio')
  .directive('bnContact', bnContact);

  function bnContact() {
    return {
      restrict: 'E',
      scope: {},
      templateUrl: '/partials/contact.html',
      controller: 'mainCtrl',
      controllerAs: 'vm',
      bindToController: true,
    };
  }
})();
