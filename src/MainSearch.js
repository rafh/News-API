import React, { Component } from 'react';
// import logo from './logo.svg';
import Content from './Content';
import './style/MainSearch.scss';

class MainSearch extends Component {

    handleSearch(event) {
        event.preventDefault();
    }

    render() {
        return (
            <div className="MainSearch">
                <div className="MainSearch__header">
                    <h2>It's all in one place</h2>
                    <form action="" onSubmit={this.handleSearch}>
                        <input type="text" placeholder="Search"  className="MainSearch__input"/>
                        <input type="submit" value="Search" className="MainSearch__btn"/>
                    </form>
                </div>
                <p className="MainSearch-intro"></p>
                <Content />
            </div>
        );
    }
}

export default MainSearch;
