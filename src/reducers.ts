import {IGlobalState} from './global';
import {CHANGE_VIDEO, ADD_VIDEOS} from './actions';

let initialState:IGlobalState = {
    currentVideoName:"",
    currentVideoType:"video/mp4",
    videoLists: ["video1", "video2","video3"]
}

for(let i = 4; i < 100; i++)
{
    initialState.videoLists.push("video"+i)
}

function reducers(state:IGlobalState = initialState, action:any) {
    switch(action.type) {
        case CHANGE_VIDEO:
            return Object.assign({}, state, {currentVideoName:action.videoName});
        case ADD_VIDEOS:
            return Object.assign({}, state, {videoLists: action.videos});
        default:
            return state;
    }
}

export {reducers};