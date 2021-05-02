function Scoreboard(props){

    const {score, highscore} = props;

    return(
        <div id="scoreboard">
            <p>Best record: {highscore}</p>
            <p>Score: {score}</p>
        </div>
    );
};

export default Scoreboard;