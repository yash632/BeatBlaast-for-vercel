//…………………………PlayMp3……………………………
function playMp3(mp3File) {

  if (currentSong) {
    currentSong.pause();
  }//play function 

  funCurrentSong(mp3File);
  funTime();
  funSeeker();
  funSeek_bar();
  funNextSong();
  funSongName();
}
//…………………………PlayMp3 END……………………………

