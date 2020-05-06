import React from 'react';
import FollowerCard from './FollowerCard'


class FollowerContainer extends React.Component {

    render (){
        return (
            <div>
                <h3>Followers:</h3>
                {this.props.displayFollower.map(follower => <FollowerCard follower={follower}/>)}
            </div>
        )
    }
}

export default FollowerContainer;