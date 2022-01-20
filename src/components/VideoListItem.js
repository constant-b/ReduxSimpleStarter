import React, {Component} from "react";

class VideoListItem extends Component {
    constructor(props) {
        super(props);

        const htmlDecode = text => {
            return (new DOMParser().parseFromString(text, 'text/html')).documentElement.textContent;
        }

        this.videoThumbnail = htmlDecode(this.props.video.snippet.thumbnails.medium.url);
        this.videoTitle = htmlDecode(this.props.video.snippet.title);
    }


    render() {
        return (
            <li onClick={() => this.props.onVideoSelect(this.props.video)} className={'list-group-item'}>
                <div className={'video-list media'}>
                    <div className={'media-left'}>
                        <img className={'media-object'} src={this.videoThumbnail} alt={this.videoTitle}/>
                    </div>
                    <div className={'video-body'}>
                        <div className={'vide-heading'}>
                            {this.videoTitle}
                        </div>
                    </div>
                </div>
            </li>
        );
    }
}

export default VideoListItem
