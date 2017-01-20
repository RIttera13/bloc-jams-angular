(function() {
     function CollectionCtrl($rootScope, Fixtures, Analytics) {
         this.albums = Fixtures.getCollection(12);
         this.fixtures = Fixtures;
         this.analytics = Analytics;
     }

     angular
         .module('blocJams')
         .controller('CollectionCtrl', ['$rootScope', 'Fixtures', 'Analytics', CollectionCtrl]);
})();
