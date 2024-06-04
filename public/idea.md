//display song list
function funListItem() {
  songList.forEach(item => {
    const listItem = document.createElement('li');

    listItem.classList.add('flex');
    listItem.classList.add('align');

    listItem.innerHTML = `<div><img src="music.svg"></div><div class="ellips">${item.name.replace(/%/g, '').charAt(0).toUpperCase() + item.name.slice(1).toLowerCase().replaceAll('_', ' ').replace('.mp3', '')}</div><div><img src="pause.svg" width="40"></div>`;

    function playByCall() {
      playMp3(item);
      pause.classList.add('none');
      play.classList.remove('none');
      const fileNameToFind = currentSong.src;
      index = songList.findIndex(song => song.download_url === fileNameToFind);
      if (index !== -1) {
        // console.log(`Index of ${fileNameToFind}: ${index}`);
      } else {
        console.log(`${fileNameToFind} not found in the song list.`);
      }
    }
    listItem.addEventListener('click', () => {
      playByCall()
    });

    // Create a copy of listItem for searchGaaneList
    const searchListItem = listItem.cloneNode(true);
    gaaneList.appendChild(listItem);
    const searchListCont = document.querySelector('.searchListCont');
    if (!searchListCont.classList.contains('searchNone') && searchListCont.style.display !== 'none') {
      searchGaaneList.appendChild(searchListItem); // Append the copied listItem to searchGaaneList
    }

    searchListItem.addEventListener('click', () => {
      playByCall()
    });
  });
}