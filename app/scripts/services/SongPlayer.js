(function() {
    function SongPlayer(Fixtures) {

         var SongPlayer = {};

         var currentAlbum = Fixtures.getAlbum();

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
                 SongPlayer.currentSong.playing = null;
             }

             currentBuzzObject = new buzz.sound(song.audioUrl, {
                 formats: ['mp3'],
                 preload: true
             });

             SongPlayer.currentSong = song;
          };

          /**
          * @function playSong
          * @desc Private function to play new song
          * @param {Object} song
          */

          var playSong = function(song) {
            currentBuzzObject.play();
            SongPlayer.currentSong.playing = true;
          }

          var stopSong = function(song) {
            currentBuzzObject.stop();
            SongPlayer.currentSong.playing = null;
          }

          var getSongIndex = function(song) {
              return currentAlbum.songs.indexOf(song);
          };

          SongPlayer.previous = function() {
              var currentSongIndex = getSongIndex(SongPlayer.currentSong);
              currentSongIndex--;

              if (currentSongIndex < 0) {
                stopSong()
              } else {
                  var song = currentAlbum.songs[currentSongIndex];
                  setSong(song);
                  playSong(song);
              }
          };

          SongPlayer.next = function() {
              var currentSongIndex = getSongIndex(SongPlayer.currentSong);
              currentSongIndex++;
              var length = currentAlbum.songs.length

              if (currentSongIndex > length) {
                 stopSong()
              } else {
                  var song = currentAlbum.songs[currentSongIndex];
                  setSong(song);
                  playSong(song);
             }
          };

          /**
          * @desc SongPlayer.currentSong
          * @type {Object}
          */

          SongPlayer.currentSong = null;

          /**
          * @function play
          * @desc plays current or new song
          * @param {Object} song
          */

         SongPlayer.play = function(song) {
           song = song || SongPlayer.currentSong;
           if (SongPlayer.currentSong !== song) {
             setSong(song);
             playSong(song);
           } else if (SongPlayer.currentSong === song) {
               if (currentBuzzObject.isPaused()) {
                   playSong(song);
               }
            }
         };

         /**
         * @function pause
         * @desc pauses current song}
         * @param {Object} song
         */

         SongPlayer.pause = function(song) {
             song = song || SongPlayer.currentSong;
             currentBuzzObject.pause();
             song.playing = false;
         };

         return SongPlayer;
    }

    angular
        .module('blocJams')
        .factory('SongPlayer',['Fixtures', SongPlayer]);
})();
