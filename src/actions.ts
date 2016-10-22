const CHANGE_VIDEO = 'CHANGE_VIDEO';
const ADD_VIDEOS = 'ADD_VIDEOS';

function changeCurrentVideo(videoName:string) {
 return {type: CHANGE_VIDEO, videoName};
}

function addVideos(videos:string[]) {
    return {type: ADD_VIDEOS, videos};
}

export {changeCurrentVideo, CHANGE_VIDEO, ADD_VIDEOS, addVideos};