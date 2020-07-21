import React, { useState, useEffect } from 'react'
import { AxiosWithAuth } from '../utils/AxiosWithAux'
import { FriendCard } from './FriendCard'




export const FriendsList = () => {

    const [friends, setFriends] = useState([])
    const [error, setError] = useState('')
    const [isLoading, setIsLoading] = useState(false)


    useEffect(() => {
        setIsLoading(true)
        setError('')
        AxiosWithAuth()
            .get('http://localhost:5000/api/friends')
            .then(res => {
                console.log(res.data)
                setFriends(res.data)
                setIsLoading(false)
            })

            .catch(err => {
                console.log(err)
                setIsLoading(false)
                setError(`Wrong credentials ${err.response.status} ${err.response.statusText}`)

            })
    }, [])

    return (
        <div>
            {isLoading && (
                <div>
                    <h3>Loading 'Migos</h3>
                </div>
            )}
            {error && !isLoading && (
                <div>
                    <h3>{error}</h3>
                </div>
            )}
            {!error && !isLoading && (
                <div>
                    {friends.map(friend =>
                        <FriendCard
                            friend={friend}
                            key={friend.id}
                        />
                    )}
                </div>
            )
            }
        </div>
    )
}


