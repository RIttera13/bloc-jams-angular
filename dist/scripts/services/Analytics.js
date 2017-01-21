 (function() {
     function Analytics($rootScope) {
       $rootScope.eventsSong = [];
       $rootScope.eventsAlbum = [];
       $rootScope.eventsPage = [];

         Analytics.eventPlay= function(song) {
           song['playedAt'] = new Date();
           $rootScope.eventsSong.push(song);
           console.log($rootScope.eventsSong);
         }

         Analytics.eventAlbum= function(albumObj) {
           delete albumObj['artist'];
           albumObj['viewedAt'] = new Date();
           $rootScope.eventsAlbum.push(albumObj);
           console.log($rootScope.eventsAlbum);
         };

         Analytics.eventArtist= function(artistObj) {
           delete artistObj['title'];
           artistObj['viewedAt'] = new Date();
           $rootScope.eventsAlbum.push(artistObj);
           console.log($rootScope.eventsAlbum);
         };

         Analytics.eventPageLoad= function() {
           var collectionPage = {page: 'Collection'};
           collectionPage['visitedAt'] = new Date();
           $rootScope.eventsPage.push(collectionPage);
           console.log($rootScope.eventsPage);
         };

         return Analytics;
     }

     angular
         .module('blocJams')
         .factory('Analytics', ['$rootScope', Analytics]);
 })();
