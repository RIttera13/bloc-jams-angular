(function() {
     function CollectionCtrl($rootScope, Fixtures) {
         this.albums = Fixtures.getCollection(12);
         this.fixtures = Fixtures;
     }

     angular
         .module('blocJams')
         .controller('CollectionCtrl', ['$rootScope', 'Fixtures', CollectionCtrl]);
})();
