function Scoreboard(props){

    const {score, highscore} = props;

    return(
        <div id="scoreboard">
            <p>Score: {score}</p>
            <p id="highscore">Best record: {highscore}</p>
        </div>
    );
};

export default Scoreboard;