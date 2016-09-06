(function() {
    function SongPlayer() {
          var SongPlayer = {};
         
          var currentSong = null;
        
          /**
          * @desc Buzz object audio file
          * @type {Object}
          */
          var currentBuzzObject = null;
        
          /**
          * @function setSong
          * @desc Stops currently playing song and loads new audio file as currentBuzzObject
          * @param {Object} song
          */
          var setSong = function(song) {
            if (currentBuzzObject) {
                currentBuzzObject.stop();
                currentSong.playing = null;
            }
  
            currentBuzzObject = new buzz.sound(song.audioUrl, {
                formats: ['mp3'],
                preload: true
            });
 
            currentSong = song;
          };
         
          /**
          * @function playSong
          * @desc plays currently selected song, and changes status of playing to "true".
          * @param {Object} song
          */
          var playSong = function(song) {
                currentBuzzObject.play();
                song.playing = true;
          };
        
          /**
          * @function (Method) SongPlayer.play 
          * @desc plays the selected song or un-pauses if paused
          * @param {Object} song
          */
          SongPlayer.play = function(song) {
            if (currentSong !== song) {
                setSong(song);
                playSong(song)
            } else if (currentSong === song) {
                if (currentBuzzObject.isPaused()) {
                    currentBuzzObject.play();
                }
            }
          };

           /**
          * @function (Method) SongPlayer.pause
          * @desc pauses curently playing song
          * @param {Object} song
          */
          SongPlayer.pause = function(song) {
            currentBuzzObject.pause();
            song.playing = false;
          };
     
      return SongPlayer;
    };
 
    angular
        .module('blocJams')
        .factory('SongPlayer', SongPlayer);
})();