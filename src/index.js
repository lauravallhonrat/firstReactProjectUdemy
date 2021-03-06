//get react and give me acces to this file import packages from node_modules
import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

//api key that allows to request  youtube from google developers console website then install package youtube-api-search on terminal, remember to activate API and refresh key on your google account

import YTSearch from 'youtube-api-search';
const API_KEY = 'AIzaSyBmxKRbOQZ1O9fgkkAkXcnYaTnaefTJHQo';

//import components

import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';


class App extends Component {
    constructor(props) {
        super(props);

        //list of videos and selected video initial states

        this.state = {
            videos: [],
            selectedVideo: null
        };
        this.videoSearch('overwatch');
    }

    videoSearch(term) {

        //youtube request--> create and object for youtube search, second argument with a function that respons data(callback function), set state on video data and first selected video from the array

        YTSearch({ key: API_KEY, term: term }, (videoData) => {
            this.setState({
                videos: videoData,
                selectedVideo: videoData[0]
            });
        });
    }

    render() {

        //_.debounce from lodash it returns a new function that can only be called once every 300 milliseconds

        const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 300);
        return (
            <div>
                <SearchBar onSearchTermChange={videoSearch} />
                <VideoDetail video={this.state.selectedVideo} />
                <VideoList
                    onVideoSelect={selectedVideo => this.setState({ selectedVideo })}
                    videos={this.state.videos} />

            </div>
        );
    }
    //passing data(prop called videos) from parent component to child component
}

//take this component and put it on the page(DOM)

ReactDOM.render(<App />, document.querySelector('.container'));