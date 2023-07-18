const songList = async (song) => {
  let songArr = [];
  try {
    await songArr.push(song);
    console.log(songArr);
  } catch (err) {
    console.log(err);
  }
};

songList({
  title: "Song",
  artist: [{ name: "Artist Who?" }],
  duration: 200,
});
