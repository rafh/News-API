import React, { Component } from 'react';
import axios from "axios";
import Posts from './Components/Posts';
import './style/Content.scss';


class Content extends Component {

    constructor(props) {
        super(props);
        this.state = {
            posts: [],
            value: 'buzzfeed&sortBy=top',
            id: 'Polygon'
        }

        this.change = this.change.bind(this);
        this.apiUrl = 'https://newsapi.org/v1/articles?source='+ this.state.value + '&apiKey=016e628857dd408f8063c17dd2a631f1';
    }

    //Axios Request
    getNews(value) {
        axios.get(this.apiUrl)
            .then((data) => {
            // Set state with result
            this.setState({ posts: [data.data]})
        });

    }

    // Change the axios request depending on selected option
    change(event) {
        window.scrollTo(0,0);
        var id = event.nativeEvent.target.selectedIndex;
        this.setState({id: event.nativeEvent.target[id].text})
        console.log('native: ' + event.nativeEvent.target[id].text);
        var value = event.target.value;
        let api = 'https://newsapi.org/v1/articles?source='+ value + '&sortBy=latest&apiKey=e8d4334db4d949959ede814fa724577a'
        axios.get(api)
            .then((data) => {
            // Set state with result
            this.setState({ posts: [data.data]}, function() {
               console.log(data.data);
           })
        });
    }

    componentDidMount(value) {
        this.getNews();
    }

    render() {
        return (
            <div className="Content">
                <div className="Search">
                    <h2>It's all in one place</h2>
                    <div className="Search__wrap">
                        <select value={this.props.value} onChange={this.change}>
                            <option value="buzzfeed&sortBy=top">Buzzfeed</option>
                            <option value="polygon&sortBy=top">Polygon</option>
                            <option value="mashable&sortBy=top">Mashable</option>
                            <option value="new-scientist&sortBy=top">New Scientist</option>
                            <option value="recode&sortBy=top">Recode</option>
                            <option value="techcrunch&sortBy=top">Tech Crunch</option>
                            <option value="techradar&sortBy=top">Tech Radar</option>
                            <option value="the-next-web&sortBy=latest">TNW (The Next Web)</option>
                            <option value="the-verge&sortBy=top">The Verge</option>
                        </select>
                    </div>
                </div>
                <Posts posts={this.state.posts} />
            </div>
        );
    }
}

export default Content;
