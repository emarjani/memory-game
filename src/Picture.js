///import pictures all here, set up an array with all pictures + caption here.
//right now just manually import, find a way to automate later
//not a component. just helper funtion

//maybe make this into array of objects instead, so can call card.img and card.text or something
//iterate over list of all image paths in folder, add require and default, and caption


import britta from "./imgs/britta perry.jpg";
import jeff from "./imgs/Jeff winger (2).jpg";
import humanbeing from "./imgs/human being.PNG";

const getCards = () => {
    return (
        [
            [require('./imgs/britta perry.jpg').default, "Britta Perry"],
            [require("./imgs/Jeff winger (2).jpg").default, "Jeff Winger"],
            [require("./imgs/human being.PNG").default, "Human Being"],
            [require("./imgs/troy barnes.jpg").default, "Troy Barnes"],
            [require("./imgs/subway.png").default, "Subway"],
            [require("./imgs/piece hawthorne.PNG").default, "Pierce Hawthorne"],
            [require("./imgs/ian duncan.PNG").default, "Ian Duncan"],
            [require("./imgs/magnitude.PNG").default, "Magnitude"],
            [require("./imgs/abed nadir.jpg").default, "Abed Nadir"]
        ]
    );
};


export default getCards;