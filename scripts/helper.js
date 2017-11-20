class Helper {
     playPauseAndUpdate (song = this.currentlyPlaying) {
      if (this.currentlyPlaying !== song);
      $('#time-control .total-time').text(song.duration);
  }
  helper.playPauseAndUpdate(song);
  }
}
//const helper = new Helper();


//Add a method to the Helper class called `playPauseAndUpdate` that takes one parameter, `song`.
//The method should call `player.playPause` (passing the song parameter) and update the total time.
//Replace every call of `player.playPause` with `helper.playPauseAndUpdate`.
