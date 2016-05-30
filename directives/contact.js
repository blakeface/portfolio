(function () {
  angular.module('portfolio')
  .directive('bnContact', bnContact);

  function bnContact() {
    return {
      restrict: 'E',
      scope: {},
      templateUrl: '/partials/contact.html',
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
