class Helper {
     playPauseAndUpdate (song) {
      console.log(song)
      player.playPause(song);
      $('#time-control .total-time').text(player.getDuration());
  }

}
const helper = new Helper();


//Add a method to the Helper class called `playPauseAndUpdate` that takes one parameter, `song`.
//The method should call `player.playPause` (passing the song parameter) and update the total time.
//Replace every call of `player.playPause` with `helper.playPauseAndUpdate`.
