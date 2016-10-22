import * as React from "react";
import {connect} from 'react-redux';

interface IListItemProps {
    videoName: string
    onItemClick: any
}

class ListItem extends React.Component<IListItemProps, {}> {
    
    handleItemClick(event:any) {
        event.stopPropagation();
        this.props.onItemClick(this.props.videoName);
        console.log("Item Clicked");
    }

    handleButtonClick(event: any) {
        event.stopPropagation();
        console.log("Button Clicked");
    }

    public render() {
        return (
            <div className="item" onClick={this.handleItemClick.bind(this)}>
                <div className="right floated content">
                    <div className="ui button" onClick={this.handleButtonClick}>Download</div>
                </div>
                <div className="content">
                    {this.props.videoName}
                </div>
            </div>
        );
    }
}

export default ListItem;