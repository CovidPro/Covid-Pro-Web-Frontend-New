import ReactInterval from 'react-interval';
import AudioPlayer from "./Audioplayer/AudioPlayer";
import tracks from "./Audioplayer/tracks";
import AudioControls from "./Audioplayer/AudioControls";
import {render} from "react-dom";

const {Component} = require("react");

let isPlaying = true;

const onTimer = (count) => {
    if (!(count === 0)) {
        if (count === 10) {
            play();
        }
        else if ((count % 12) === 0) {
            console.log(count);
            console.log(isPlaying);
            if (isPlaying){
                pause();
            }
            else{
                play();
            }
        }
    }
};

var audio = new Audio(tracks[0].audioSrc);

function play() {
    changeState()
    audio.play();
}

function pause() {
    changeState();
    audio.pause();
}

function changeState() {
    isPlaying = !isPlaying;
}



class Count extends Component {


    constructor(props) {
        super(props);
        this.state = {
            callback: this.inc1,
            destroy: false,
            enabled: false,
            timeout: 200,
            count: 0
        };
    }


    onChangeTimeout = ({target: {value}}) => {
        this.setState({timeout: parseInt(value, 10)});
    };

    onToggleInterval = () => {
        const {enabled} = this.state;
        this.setState({enabled: !enabled});
    };

    inc1 = () => {
        const {count} = this.state;
        this.setState({count: count + 1});
    };

    render() {
        const {destroy, callback, timeout, enabled, count} = this.state;

        return (
            <div className="app">

                <div style={{background: destroy ? `#f1f2f3` : `#f1fef3`, padding: 10}}>

                    {destroy ? null : <ReactInterval {...{timeout, enabled, callback}} />}

                    <input
                        max="5000"
                        min="200"
                        onChange={this.onChangeTimeout}
                        step="200"
                        type="number"
                        value={timeout}/>

                    <button disabled={enabled} onClick={this.onToggleInterval}>
                        Start
                    </button>

                    <button disabled={!enabled} onClick={this.onToggleInterval}>
                        Stop
                    </button>
                    &nbsp;



                    {count}


                    {onTimer(count)}



                </div>



            </div>
        );
    }
}

export default Count;