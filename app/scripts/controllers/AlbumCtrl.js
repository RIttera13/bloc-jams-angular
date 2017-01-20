(function() {
     function AlbumCtrl(Fixtures, SongPlayer, Analytics) {
       this.albumData = Fixtures.getAlbum();
       this.songPlayer = SongPlayer;
       this.fixtures = Fixtures;
       this.analytics = Analytics;
     }

     angular
         .module('blocJams')
         .controller('AlbumCtrl', ['Fixtures', 'SongPlayer', 'Analytics', AlbumCtrl]);
})();
