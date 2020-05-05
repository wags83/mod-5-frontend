import React from 'react';

class SearchBox extends React.Component {
    
    render (){
        return (
            <div>
                <h3>Search Box</h3>
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