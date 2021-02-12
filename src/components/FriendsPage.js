import React from 'react';

const FriendsPage = (props) => {
    console.log(props)
    return (
       <div>
        {props.potentialFriends.map(friend => (
            <div>     
                <img src={friend.picture.thumbnail}/>
                <h3>{friend.name.first}{friend.name.last}</h3>
                <p>{friend.login.username}</p>
            </div>
        )
        )}
       </div>

    )
}

export default FriendsPage