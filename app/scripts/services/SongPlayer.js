(function() {
    function SongPlayer($rootScope, Fixtures) {

          var SongPlayer = {};

          /**
          * @desc Pull and store album information
          * @type Function
          */
          var currentAlbum = Fixtures.getAlbum();

          /**
          * @desc Buzz object audio file
          * @type {Object}
          */
          var currentBuzzObject = null;

          /**
          * @function setSong
          * @desc Stops currently playing song and loads new audio file as currentBuzzObject
          * @param Function - song
          */
          var setSong = function(song) {
            if (currentBuzzObject) {
                currentBuzzObject.stop();
                SongPlayer.currentSong.playing = null;
            }

            currentBuzzObject = new buzz.sound(song.audioUrl, {
                formats: ['mp3'],
                preload: true
            });

            currentBuzzObject.bind('timeupdate', function() {
                $rootScope.$apply(function() {
                    SongPlayer.currentTime = currentBuzzObject.getTime();
                });
            });

            SongPlayer.currentSong = song;
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
          * @function stopSong
          * @desc stops currently playing song, and changes status of playing to "null".
          * @param {Object} song
          */
          var stopSong = function(song) {
                currentBuzzObject.stop();
                song.playing = null;
          };

          var getSongIndex = function(song) {
            return currentAlbum.songs.indexOf(song);
          };

          /**
          * @desc Active song object from list of songs
          * @type {Object}
          */
          SongPlayer.currentSong = null

          /**
          * @desc Current playback time (in seconds) of currently playing song
          * @type {Number}
          */
          SongPlayer.currentTime = null;

          /**
          * @function (Method) SongPlayer.play
          * @desc plays the selected song or un-pauses if paused
          * @param {Object} song
          */
          SongPlayer.play = function(song) {
            song = song || SongPlayer.currentSong;
            if (SongPlayer.currentSong !== song) {
                setSong(song);
                playSong(song)
            } else if (SongPlayer.currentSong === song) {
                if (currentBuzzObject.isPaused()) {
                    playSong(song);
                }
            }
          };

          SongPlayer.eventPlay= function(songObj) {
            songObj['playedAt'] = new Date();
            $rootScope.events.push(songObj);
            console.log($rootScope.events)
          };
          /**
          * @function (Method) SongPlayer.pause
          * @desc pauses curently playing song
          * @param {Object} song
          */
          SongPlayer.pause = function(song) {
            song = song || SongPlayer.currentSong;
            currentBuzzObject.pause();
            song.playing = false;
          };

          /**
          * @function (Method) SongPlayer.previous
          * @desc select and play previouse song in list (index), if on song "1", wrap to song last song in list. Also,, stops currently playing song.
          * @param {Object} album
          */
          SongPlayer.previous = function() {
            var currentSongIndex = getSongIndex(SongPlayer.currentSong);
            currentSongIndex--;

            if (currentSongIndex < 0) {
              currentSongIndex = (currentAlbum.songs.length -1);
                var lastSong = currentAlbum.songs[currentSongIndex];
                setSong(lastSong);
                playSong(lastSong);
            } else {
                var song = currentAlbum.songs[currentSongIndex];
                setSong(song);
                playSong(song);
            }
          };

          SongPlayer.next = function() {
            var currentSongIndex = getSongIndex(SongPlayer.currentSong);
            currentSongIndex++;

            if (currentSongIndex > (currentAlbum.songs.length)) {
                currentSongIndex = (currentAlbum.songs.length - currentAlbum.songs.length);
                var firstSong = currentAlbum.songs[currentSongIndex]
                setSong(firstSong);
                playSong(firstSong);
            } else {
                var song = currentAlbum.songs[currentSongIndex];
                setSong(song);
                playSong(song);
            }
          };

          /**
          * @function setCurrentTime
          * @desc Set current time (in seconds) of currently playing song
          * @param {Number} time
          */
          SongPlayer.setCurrentTime = function(time) {
            if (currentBuzzObject) {
                currentBuzzObject.setTime(time);
            }
          };

          SongPlayer.volume = 30;

          SongPlayer.setCurrentVolume = function(volume) {
              currentBuzzObject.setVolume(volume)
          };

      return SongPlayer;
    };

    angular
        .module('blocJams')
        .factory('SongPlayer', ['$rootScope', 'Fixtures', SongPlayer]);
})();
