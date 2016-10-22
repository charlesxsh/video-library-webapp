import * as React from "react";
import { connect } from 'react-redux';
import ListItem from './ListItem';
import * as global from '../global';
import * as action from '../actions';
import * as $ from 'jquery';

interface IListAreaProps {
    videoLists: string[]
    onListItemClick: (videoName: string) => void
    initialize: (videos: string[])=>void
}

const mapStateToProps = (state: global.IGlobalState) => {
    return {
        videoLists: state.videoLists
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onListItemClick: (videoName: string) => {
            dispatch(action.changeCurrentVideo(videoName))
        },
        initialize: (videos: string[]) => {
            dispatch(action.addVideos(videos));
        }
    }
}

const listStyle = {
    overflow: "scroll",
    height: "100%"
}

class ListArea extends React.Component<IListAreaProps, {}> {
    constructor() {
        super();
        $.ajax({
            url: "/api/video/get",
            dataType: 'json',
            cache: false,
            type:"GET",
            success: function (data) {
                this.props.initialize(data);
            }.bind(this),
            error: function (xhr, status, err) {
                console.error(this.props.url, status, err.toString());
            }.bind(this)
        });
    }
    public render() {
        return (
            <div id="list-area" className="four wide column" >
                <div className="ui middle aligned selection animated list" style={listStyle}>
                    {
                        this.props.videoLists.map((n, i) => {
                            return <ListItem key={i} videoName={n} onItemClick={this.props.onListItemClick} />;
                        }
                        )
                    }
                </div>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListArea);