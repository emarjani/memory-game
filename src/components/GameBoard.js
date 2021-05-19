function GameBoard(props){

    const {pick, cards} = props;

    return(
        <div id="gameboard">
            {
            cards.map((card) => {
                const [image, name] = card;
                return(
                    <div key={name}>
                        <img src={image} alt="" onClick={() => { pick(name) }}/>
                        <p>{name}</p>
                    </div>
                )
            })
            }
        </div>
    )
};

export default GameBoard;

