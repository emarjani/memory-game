const img_paths = [
    "src/imgs/Abed Nadir.jpg",
    "src/imgs/Annie Edison.jpg",
    "src/imgs/Annie's Boobs.PNG",
    "src/imgs/Britta Perry.jpg",
    "src/imgs/Coach Bogner.PNG",
    'src/imgs/Dean Pelton.PNG',
    'src/imgs/Dr Escodera.PNG',
    'src/imgs/Elroy Patashnik.PNG',
    'src/imgs/Fat Neil.PNG',
    'src/imgs/Frankie Dart.PNG',
    'src/imgs/Garrett Lambert.PNG',
    'src/imgs/Human Being.PNG',
    'src/imgs/Jeff Winger.PNG',
    'src/imgs/Kickpuncher.PNG',
    'src/imgs/Magnitude.PNG',
    'src/imgs/Marshall Kane.PNG',
    'src/imgs/Officer Cackowski.PNG',
    'src/imgs/Pierce Hawthorne.PNG',
    'src/imgs/Shirley Bennett.PNG',
    'src/imgs/Subway.png',
    'src/imgs/Troy Barnes.jpg',
    'src/imgs/Evil Abed.PNG',
    'src/imgs/Evil Annie.jpg',
    'src/imgs/Evil Jeff.PNG',
    'src/imgs/Evil Pierce.PNG',
    'src/imgs/Evil Shirley.PNG',
    'src/imgs/Evil Troy.PNG',
    'src/imgs/Vaughn.PNG',
    'src/imgs/Vicki.PNG',
    'src/imgs/Todd.PNG',
    'src/imgs/The Black Rider.PNG',
    'src/imgs/Stephen Spreck.PNG',
    'src/imgs/Star-Burns.PNG',
    'src/imgs/Professor Bauer.PNG',
    'src/imgs/Professor Garrity.PNG',
    'src/imgs/Rich Stephenson.PNG',
    'src/imgs/Richie.PNG',
    'src/imgs/Leonard.PNG',
    'src/imgs/Gilbert Lawson.PNG',
    'src/imgs/Cornelius Hawthorne.PNG'
];

const getCards = () => {

    const processPaths = () => {
        let cards = [];
        for (let i=0; i < img_paths.length; i++) {
            let path = img_paths[i].split("/").slice(-1)[0];
            let name = path.split(".")[0];
            cards.push([require(`./imgs/${path}`).default, name]);
        }
        return cards;
    };

    return (processPaths());
};

export default getCards;

