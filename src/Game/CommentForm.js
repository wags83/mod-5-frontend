import React from 'react';


class CommentForm extends React.Component {

    render (){
        return (
            <div>
                <h3>Comment Form</h3>
                <form >
            <label>
            Title: 
            <input 
            type="text" 
            name='title' 
            value={this.props.title} 
            onChange={this.props.handleChange} />
            </label><br></br>
            <label>
            Content: 
            <input 
            type="text" 
            name='content' 
            value={this.props.content}
            onChange={this.props.handleChange}/>
            </label><br></br> 
            <button className='btn' onClick={this.props.addComment}>Submit Comment</button> 
        </form>
            </div>
        )
    }
}

export default CommentForm;