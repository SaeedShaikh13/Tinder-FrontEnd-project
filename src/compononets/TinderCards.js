import React, {useEffect, useState } from 'react'
import TinderCard from 'react-tinder-card'
import './TinderCards.css'
import axios from './axios'


const TinderCards = () => {
    const [people, setpeople] = useState([])


    useEffect(() => {
                const fetchData = async () => {
            const req = await axios.get("/tinder/cards")
            setpeople(req.data)
        }
        fetchData()
    }, [])

        const swiped = (direction, nameToDelete) => {
            console.log("receiving" + nameToDelete )
        }
        
        const outOfFrame = (name) => {
            console.log(name + "left the screen!!")
        }

    return (
        <div  className="tinderCards">
            <div className="tinderCards__container">
            {people.map(person =>(
                <TinderCard
                  className="swipe"
                  key={person.name}
                  preventSwipe={['up','down']}
                  onSwipe={(dir) => swiped(dir, person.name)}
                  onCardLeftScreen={() => outOfFrame(person.name,)}
                >
             
             {/* style={{backgroundImage:"url(${person.imgUrl})"}}  */}
             <div className="card" > 

                <img className='img' src={person.imgUrl} />
                <h3>{person.name}</h3>
                </div>
                
                </TinderCard>
            ))} 
           </div>
            
         </div>
    )
}

export default TinderCards
