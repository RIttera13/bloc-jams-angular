 (function() {
     function Fixtures($rootScope) {
       $rootScope.songPlays = [];
       var blocmetrics = {};

         var Fixtures = {};

            var albumTuxicity = {
                title: 'Loung Lizzards',
                artist: 'Richard Cheese',
                label: 'Lounge Against The Machine',
                year: '2003',
                albumArtUrl: '/assets/images/album_covers/Tuxicitycheese.jpg',
                songs: [
                    { title: '(You Drive Me) Crazy', duration: '108.83', audioUrl: '/assets/music/(You Drive Me) Crazy' },
                    { title: 'Baby Got Back', duration: '164.91', audioUrl: '/assets/music/Baby Got Back' },
                    { title: 'One Step Closer', duration: '96.5', audioUrl: '/assets/music/One Step Closer' },
                    { title: 'Down With The Sickness', duration: '139.21', audioUrl: '/assets/music/Down With The Sickness' },
                    { title: 'Relax', duration: '114', audioUrl: '/assets/music/Relax' }
                ]
            };

            var albumPicasso = {
                title: 'The Colors',
                artist: 'Pablo Picasso',
                label: 'Cubism',
                year: '1881',
                albumArtUrl: '/assets/images/album_covers/01.png',
                songs: [
                    { title: 'Blue', duration: '161.71', audioUrl: '/assets/music/blue' },
                    { title: 'Green', duration: '103.96', audioUrl: '/assets/music/green' },
                    { title: 'Red', duration: '268.45', audioUrl: '/assets/music/red' },
                    { title: 'Pink', duration: '153.14', audioUrl: '/assets/music/pink' },
                    { title: 'Magenta', duration: '374.22', audioUrl: '/assets/music/magenta' }
                ]
            };

            var albumMarconi = {
                title: 'The Telephone',
                artist: 'Guglielmo Marconi',
                label: 'EM',
                year: '1909',
                albumArtUrl: '/assets/images/album_covers/20.png',
                songs: [
                    { title: 'Hello, Operator?', duration: '1:01' },
                    { title: 'Ring, ring, ring', duration: '5:01' },
                    { title: 'Fits in your pocket', duration: '3:21' },
                    { title: 'Can you hear me now?', duration: '3:14' },
                    { title: 'Wrong phone number', duration: '2:15' }
                ]
             };

         Fixtures.getAlbum = function() {
            return albumTuxicity;
         };

         Fixtures.report = function(eventName){
           var event = {event: { name: eventName }};
           var request = new XMLHttpRequest();

           request.open("POST", "http://localhost:4000/api/events", true);
           request.setRequestHeader('Content-Type', 'application/json');
           request.send(JSON.stringify(event));
         }

         Fixtures.eventAlbum= function(albumObj) {
           $rootScope.songPlays.push(albumObj);
           console.log($rootScope.songPlays);
         };

         Fixtures.eventPageLoad= function(pageObj) {
           $rootScope.songPlays.push(pageObj);
           console.log($rootScope.songPlays);
         };

         Fixtures.getCollection = function(numberOfAlbums) {
            this.collection = [];
            for (var i = 0; i < numberOfAlbums; i++) {

                this.collection.push(angular.copy(albumTuxicity));
            }
            return this.collection;
         };

         return Fixtures;
     }

     angular
         .module('blocJams')
         .factory('Fixtures', ['$rootScope', Fixtures]);
 })();
