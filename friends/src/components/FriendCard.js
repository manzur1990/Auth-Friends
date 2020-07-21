import React from 'react'

export const FriendCard = props => {
    return (
        <div className={'friendsCard'}>
            <h3>{props.friend.name}</h3>
            <p>{props.friend.age}</p>
            <p>{props.friend.email}</p>
        </div>
    )
}
