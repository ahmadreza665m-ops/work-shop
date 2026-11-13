const soundifyApp = {
  artister: [
    {
      namn: 'Luna',
      album: [
        {
          titel: 'Midnight Sessions',
          latar: [
            { nr: 1, titel: 'Night Walk', sekunder: 210 },
            { nr: 2, titel: 'Starlight', sekunder: 195 },
          ],
        },
      ],
    },
  ],
};

//Uppgift 3:
console.log(soundifyApp.artister[0].album[0].latar[1].sekunder);

// Uppgift 2:
const fn = () => {
  let latar = soundifyApp.artister[0].album[0].latar;
  let totalSekunder = 0;

  for (const sek of latar) {
    totalSekunder += sek.sekunder;
  }

  return totalSekunder;
};

const total = fn();
console.log(total);

// Uppgift 3:
const musik = soundifyApp.artister[0].album[0].latar;
musik.push({ nr: 3, titel: 'Moonlight', sekunder: 150 });

console.log(soundifyApp.artister[0].album);

// Uppgift 4:
// let album = [];

// soundifyApp.artister.forEach((artist) => {
//     if (artist.namn === 'Luna') {
//         album = artist.album;
//     }
// });

// console.log(album);

const hamtaAlbum = (artistNamn) => {
    let album = [];

    soundifyApp.artister.forEach((artist) => {
        if (artist.namn.toLowerCase() === artistNamn.toLowerCase()) {
            album = artist.album;
        }
    });

    return album;
};

console.log(hamtaAlbum('Luna'));