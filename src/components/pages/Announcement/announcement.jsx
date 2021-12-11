import AudioPlayer from "./Audioplayer/AudioPlayer";
import tracks from "./Audioplayer/tracks";
import voice from "./Audioplayer/voice";
import React, {useEffect} from "react";
import Count from "./count";
import Wave from "react-wavify";


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
            <div className="pt-8">

                <h1 className="text-center text-4xl">
                    Announcement
                </h1>
            </div>
            {/*seconds*/}
            <Count/>


            <div className="AudioClass">
                <AudioPlayer tracks={tracks}/>
                {/*<AudioPlayer tracks={voice}/>*/}
            </div>


            <div className="pt-20">
                <div className=" inset-x-0 bottom-0 ">

                    <Wave
                        fill="url(#gradient)"
                        paused={false}
                        options={{
                            height: 20,
                        opacity:1,
                            amplitude: 10,
                            speed: 0.2,
                            points: 3,
                        }}>
                        <defs>
                            <linearGradient id="gradient" gradientTransform="rotate(45)">
                                <stop stop-color="#7A5FFF">
                                    <animate attributeName="stop-color" values="#7A5FFF; #01FF89; #7A5FFF" dur="4s"
                                             repeatCount="indefinite"></animate>
                                </stop>

                                <stop stop-color="#01FF89">
                                    <animate attributeName="stop-color" values="#01FF89; #7A5FFF; #01FF89" dur="4s"
                                             repeatCount="indefinite"></animate>
                                </stop>

                            </linearGradient>
                        </defs>
                    </Wave>
                </div>
            </div>


        </div>
    );
}

export default Announcement;
