<!-- HTML code to create a video element -->
<video id="my-video" width="640" height="360" controls>
  <source src="C:\Users\Lalan\Desktop\Code folder\htdocs_stuff/sus.mp4.mp4" type="video/mp4">
  <source src="path/to/video.webm" type="video/webm">
  Your browser does not support the video tag.
</video>

<!-- JavaScript code to control the video -->
<script>
  const video = document.getElementById('my-video'); // Get the video element by its ID
  
  video.addEventListener('play', () => {
    console.log('Video is playing!');
  }); // Add a listener to log a message when the video starts playing
  
  video.addEventListener('pause', () => {
    console.log('Video is paused.');
  }); // Add a listener to log a message when the video is paused
</script>
