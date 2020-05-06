import React from 'react';

class SearchBox extends React.Component {
    
    render (){
        return (
            <div>
                Filter results by search term:
                <input
                    name="searchTerm"
                    type="text"
                    placeholder='Search Games'
                    onChange={this.props.handleSearchChange}
                ></input>
            </div>  
        )
    }
}

export default SearchBox;