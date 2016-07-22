(function() {
  'use strict';

  angular
    .module('myNewProject')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($http) {
    var cv = this;

    $http.get('app/main/my_cv_data.json').then(function(response) {
      cv.cvData = response.data;
    });

    cv.changeLanguage = function(language){
      var file= 'app/main/my_cv_data.json';

      if(language === 'en'){
          var file= 'app/main/my_cv_data_en.json';
      }
      $http.get(file).then(function(response) {
        cv.cvData = response.data;
      });
    }
    cv.creationDate = 1463473404324;
  }
})();
