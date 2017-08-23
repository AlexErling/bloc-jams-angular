(function() {
    function config($stateProvider, $locationProvider) {
      $locationProvider
          .html5Mode({
              enabled: true,
              requireBase: false
          });
<<<<<<< HEAD

=======
>>>>>>> a3e737dc50e72ce46f78de2fc58a08ef9b13525d
          $stateProvider
              .state('landing', {
                  url: '/',
                  templateUrl: '/templates/landing.html'
                })
                .state('album', {
                    url: '/album',
                    templateUrl: '/templates/album.html'
                });
    }
<<<<<<< HEAD

angular.module('blocJams', ['ui.router']);
    angular
=======
    angular
        .module('blocJams', ['ui.router'])
>>>>>>> a3e737dc50e72ce46f78de2fc58a08ef9b13525d
        .config(config);
})();
