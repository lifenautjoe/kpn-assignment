(function() {
  'use strict';

  angular
    .module('kpnAssignment')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
