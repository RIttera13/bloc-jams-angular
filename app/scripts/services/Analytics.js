 (function() {
     function Analytics($rootScope) {

       Analytics.report = function(eventName){
         var event = {event: { name: eventName }};
         var request = new XMLHttpRequest();

         $http.post("http://localhost:4000/api/events", JSON.stringify(event), headers: {
'Content-Type': 'application/json'},)
       };

       Analytics.eventAlbum= function(albumObj) {
         Analytics.report("Album Viewed: " + albumObj)
       };

       Analytics.eventArtist= function(artistObj) {
         Analytics.report("Artist Viewed: " + artistObj)
       };

       Analytics.eventPageLoad= function(pageObj) {
         Analytics.report("Page Visited: " + pageObj)
       };

       Analytics.songPlayed = function(song){
         Analytics.report("Song Played: " + song.title)
       };

          return Analytics;
     }

     angular
         .module('blocJams')
         .factory('Analytics', ['$rootScope', Analytics]);
 })();
