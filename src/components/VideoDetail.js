import React from "react";

const VideoDetail = props => {
    if (!props.video) return <div>Loading...</div>

    const htmlDecode = text => {
        return (new DOMParser().parseFromString(text, 'text/html')).documentElement.textContent;
    }

    const videoTitle = htmlDecode(props.video.snippet.title);
    const videoDescription = htmlDecode(props.video.snippet.description);
    const videoId = props.video.id.videoId;
    const videoUrl = `https://www.youtube.com/embed/${videoId}`;

    return (
        <div className={'video-detail col-md-8'}>
            <div className={'embed-responsive embed-responsive-16by9'}>
                <iframe className={'embed-responsive-item'} src={videoUrl}/>
            </div>
            <div className={'details'}>
                <div>{videoTitle}</div>
                <div>{videoDescription}</div>
            </div>
        </div>
    );
}

export default VideoDetail;
