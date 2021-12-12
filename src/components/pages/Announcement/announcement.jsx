import AudioPlayer from "./Audioplayer/AudioPlayer";
import tracks from "./Audioplayer/tracks";
import React from "react";
import Wave from "react-wavify";


function Announcement() {
    return (
        <div className="announcement__content">
            <div className="pt-8">

                <h1 className="text-center text-4xl">
                    Announcement
                </h1>
            </div>

            <div className="AudioClass pt-16">
                <AudioPlayer tracks={tracks}/>
            </div>

            <div className="pt-20">
                <div className=" inset-x-0 bottom-0 ">
                    <Wave
                        fill="url(#gradient)"
                        paused={false}
                        options={{
                            height: 20,
                            opacity: 1,
                            amplitude: 10,
                            speed: 0.2,
                            points: 3,
                        }}>
                        <defs>
                            <linearGradient id="gradient" gradientTransform="rotate(45)">
                                <stop stopColor="#7A5FFF">
                                    <animate attributeName="stop-color" values="#7A5FFF; #01FF89; #7A5FFF" dur="4s"
                                             repeatCount="indefinite"/>
                                </stop>

                                <stop stopColor="#01FF89">
                                    <animate attributeName="stop-color" values="#01FF89; #7A5FFF; #01FF89" dur="4s"
                                             repeatCount="indefinite"/>
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
