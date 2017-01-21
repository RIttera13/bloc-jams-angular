(function() {
     function AlbumCtrl(Fixtures, Analytics, SongPlayer) {
       this.albumData = Fixtures.getAlbum();
       this.songPlayer = SongPlayer;
       this.fixtures = Fixtures;
       this.analytics = Analytics;
     }

     angular
         .module('blocJams')
         .controller('AlbumCtrl', ['Fixtures', 'Analytics','SongPlayer', AlbumCtrl]);
})();
