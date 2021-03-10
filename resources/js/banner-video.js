window.addEventListener('load', function() {
  var MOBILE_REGEXP = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;
  var PLAYING_TITLE = 'Pause video playback';
  var PAUSED_TITLE = 'Resume video playback';

  function isMobile (){
    return Boolean(MOBILE_REGEXP.test(navigator.userAgent))
  }

  // we only want video on desktop devices
  if (!isMobile()) {
    /////////////////////////////////////////////////////////
    // CALLBACK FUNCTIONS ///////////////////////////////////
    /////////////////////////////////////////////////////////
    function toggleVideoPlayback(video, playbackControls) {
      const playbackTitle = playbackControls.querySelector('#playback-controls-label');
      if (video.paused) {
        video.play();
        playbackControls.classList.remove('paused');
        playbackControls.classList.add('playing');
        playbackTitle.innerHTML = PLAYING_TITLE;

      } else {
        video.pause();
        playbackControls.classList.remove('playing');
        playbackControls.classList.add('paused');
        playbackTitle.innerHTML = PAUSED_TITLE;
      }
    }

    function resizeVideo(video) {
      var container = video.parentElement;
      var width = video.videoWidth;
      var height =  video.videoHeight;
      var ratio = width / height;

      if (container.offsetWidth > container.offsetHeight) {
        width = container.offsetWidth;
        height = width / ratio;
      } else {
        height = container.offsetHeight;
        width = height * ratio;
      }

      if (height < container.offsetHeight) {
        height = container.offsetHeight;
        width = height * ratio;
      }

      video.width = width;
      video.height = height;
    }

    /////////////////////////////////////////////////////////
    // PROCEDURAL CODE //////////////////////////////////////
    /////////////////////////////////////////////////////////
    var container = document.querySelector('.video-container');
    if (container) {
        var video = container.querySelector('#videoplayer');
        var playbackControls = document.querySelector('.playback-controls');
    
        var videoSource = video.querySelector('source');
        // We don't actually have a src attribute set until we determine that we are not on mobile
        // This way we don't load the video at all on mobile
        videoSource.setAttribute('src', videoSource.getAttribute('data-src'));
    
        video.load();
        video.addEventListener('loadeddata', function() {
          resizeVideo(video);
          video.classList.add('loaded');
          playbackControls.classList.add('loaded');
        });
    
        playbackControls.classList.remove('hidden');
        playbackControls.addEventListener('click', function(e) {
          toggleVideoPlayback(video, playbackControls);
          e.preventDefault();
        });
    
    
        var resizeTimeout = null;
        window.addEventListener('resize', function() {
          clearTimeout(resizeTimeout);
          resizeTimeout = setTimeout(resizeVideo.bind(null, video), 50);
        });
    }
  }
});
