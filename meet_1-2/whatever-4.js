let songArr = [];
const songList = (song) =>
  new Promise(
    (res) => {
      songArr.push(song);
      console.log("Promise Resolved");
    },
    (err) => {
      console.log(err.message);
      console.log("Promise Rejected");
    }
  );

songList({
  title: "Song",
  artist: [{ name: "Artist Who?" }],
  duration: 200,
}).then(console.log(songArr));
