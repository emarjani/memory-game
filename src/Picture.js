const img_paths = [
    "src/imgs/Abed Nadir.jpg",
    "src/imgs/Annie Edison.jpg",
    "src/imgs/Annie's Boobs.PNG",
    "src/imgs/Britta Perry.jpg",
    "src/imgs/Coach Bogner.PNG",
    'src/imgs/Dean Pelton.PNG',
    'src/imgs/Dr. Escodera.PNG',
    'src/imgs/Elroy Patashnik.PNG',
    'src/imgs/Fat Neal.PNG',
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
    'src/imgs/Troy Barnes.jpg'
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

