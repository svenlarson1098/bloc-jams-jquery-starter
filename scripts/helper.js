class Helper {
  playPauseAndUpdate(song) {
    player.playPause(song);

    playPauseAndUpdate (song = this.currentlyPlaying) {
      if (this.currentlyPlaying !== song)
      $('#total-time .duration').val(duration);
  }
}
const helper = new Helper();


//Add a method to the Helper class called `playPauseAndUpdate` that takes one parameter, `song`.
//The method should call `player.playPause` (passing the song parameter) and update the total time.
//Replace every call of `player.playPause` with `helper.playPauseAndUpdate`.
