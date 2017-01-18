(function() {
     function AlbumCtrl(Fixtures, SongPlayer) {
       this.albumData = Fixtures.getAlbum();
       this.songPlayer = SongPlayer;
       this.fixtures = Fixtures;

       $(document).ready(function() {
         $("#song-play").click(function(){
           var song = $(this).attr(song.title);
           Fixtures.report(song)
         });
       });
     }

     angular
         .module('blocJams')
         .controller('AlbumCtrl', ['Fixtures', 'SongPlayer', AlbumCtrl]);
})();
