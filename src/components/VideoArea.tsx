import * as React from "react";
import {connect} from 'react-redux';

import {IGlobalState} from '../global';

interface IVideoAreaProps {
    video: {name:string, type: string}
}

function mapStateToProps(state:IGlobalState) {
    return {
        video: {name: state.currentVideoName, type: state.currentVideoType}
    };
}

class VideoArea extends React.Component<IVideoAreaProps, {}> {
    public render() {
        return (
            <div id="video-area" className="twelve wide column">
                <video id="player" controls>
                    <source src={this.props.video.name} type={this.props.video.type} />
                </video>
            </div>
        );
    }
}

export default connect(mapStateToProps)(VideoArea);

