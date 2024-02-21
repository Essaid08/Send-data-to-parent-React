import React from 'react'
import { Card } from './Card'

export const Cards = ({ checked, user}) => {

    let repositories = user ;

    if(checked) {
        repositories = user.sort((a , b) => b.stars - a.stars) ;
        repositories = repositories.slice(0 , 10)

    }

    return (
        <>
            {
                repositories.map((ele , i) => <Card key={i} user={ele}/>)
            }
        </>
    )
}
