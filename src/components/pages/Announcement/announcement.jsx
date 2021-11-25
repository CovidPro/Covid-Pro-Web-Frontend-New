import AudioPlayer from "./Audioplayer/AudioPlayer";
import tracks from "./Audioplayer/tracks";
import voice from "./Audioplayer/voice";
import React, {useEffect} from "react";
import Count from "./count";


function Announcement() {
    const [seconds, setSeconds] = React.useState(10);

    useEffect(() => {
        if (seconds > 0) {
            setTimeout(() => setSeconds(seconds - 1), 1000);
        } else {
            setSeconds('BOOOOM!');
        }
    });


    return (
        <div className="announcement__content">
            <h1 className="announcement__title">
                Announcement
            </h1>
            <p className="announcement__text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Pellentesque euismod, urna eu tincidunt consectetur,
                nisi nisl aliquam nunc, eu aliquet nisl nunc eu nisl.
                Nulla facilisi.
            </p>

            {seconds}
            <Count/>




            <div className="AudioClass">
                {/*<AudioPlayer tracks={tracks}/>
                <AudioPlayer tracks={voice}/>*/}
            </div>

        </div>
    );
}

export default Announcement;