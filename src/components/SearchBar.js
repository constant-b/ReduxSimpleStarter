import React, {Component} from "react";

class SearchBar extends Component {
    render() {
        return (
            <div className={'search-bar'}>
                <input
                    type="text"
                    onChange={event => this.onSearchInputChange(event.target.value)}/>
            </div>
        );
    }

    onSearchInputChange(searchPhrase) {
        this.props.onVideoSearch(searchPhrase);
    }
}

export default SearchBar;
