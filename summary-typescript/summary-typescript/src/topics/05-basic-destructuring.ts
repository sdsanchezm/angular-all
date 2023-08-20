


interface AudioPlayer {
    audioVolume: number;
    songDuration: number;
    song: string;
    details: Details;
}


interface Details {
    author: string;
    year: number;
}

const audioPlayer: AudioPlayer = {
    audioVolume: 80,
    songDuration: 55,
    song: "hey you",
    details: {
        author: "the clickers",
        year: 2020
    }
}

// destructuriong can be applied in modules, objects, etc etc
const {} = audioPlayer;

console.log(audioPlayer.song);


const { song:anothersong, songDuration:duration, details:{author: authx} } = audioPlayer;

console.log(anothersong);
console.log(duration);
console.log(authx);


// destructuring arrays


const pets1: string[] = ["jara", "marrana", "azabache", "jamecho", "tiche"];

const [ , , , , tiche1] = pets1;

console.info(tiche1);



export {};