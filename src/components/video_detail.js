import React from 'react';

const VideoDetail = ({ video }) => {

    //to avoid the error "Cannot read property 'id' of undefined" as the first video from the array is undefined, we check with this condition below

    if (!video) {
        return <div>Loading...</div>
    }
    const videoId = video.id.videoId;

    //es6 string interpolation

    const url = `https://www.youtube.com/embed/${videoId}`;
    return (
        <div className="video-detail col-md-8">
            <div className="embed-responsive embed-responsive-16by9">
                <iframe className="embed-responsive-item" src={url}></iframe>
            </div>
            <div className="details">
                <div>{video.snippet.title}</div>
                <div>{video.snippet.description}</div>
            </div>
        </div>
    );

};


export default VideoDetail;