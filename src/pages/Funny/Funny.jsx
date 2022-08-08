import { useEffect } from "react";
import getRandInt from "../../getRandInt";

const Funny = () => {

    const getYTFunnyID = () => {
    window.gapi.client.setApiKey("AIzaSyAKE0eHUmg7c4HaC46ImLfxBfRIbq3hbnU");
    return window.gapi.client.load("https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest")
        .then(function() {
            console.log("получилось!")
            return window.gapi.client.youtube.playlistItems.list({
                "part": [
                    "snippet,contentDetails"
                ],
                "maxResults": 50,
                "playlistId": "PLnoEE6xVWIwL-RThs5BmQr5L-uwl3D6lS"
            })
            .then(function(res) {
                window.location.replace(`https://youtube.com/watch?v=${res.result.items[getRandInt(50)].contentDetails.videoId}`);
                console.log(res.result.items[getRandInt(50)].contentDetails.videoId);
            }, function(err) {
                console.error(err)
            })
        }, function(err) {
            console.log("не получилось! " + err);
        })
    }

    useEffect(() => {
        window.gapi.load("client", getYTFunnyID);
    }, [])

    return <>
        <h5 style={{color: "#ae00ff", margin: 0}}>Redirecting to my Telegram... Please, wait.</h5>
    </>
}

export default Funny;