class Helper {
     playPauseAndUpdate (song) {
      player.playPause(song);
      $('#time-control .total-time').text(player.prettyTime(player.getDuration()));
  }
}
const helper = new Helper();
