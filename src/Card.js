import React from 'react';
import './Card.css'

class Card extends React.Component{    
    render(){
        let currentCardId = this.props.id;
        return(
            <div className="cardContainer">
                <div className="cardContentItem cardContentFirstItems">
                    <div className="cardContentFirstItemsPeta">
                        <h3 className="cardHeader">{this.props.cardStore.allCards[currentCardId]['title']}</h3>
                    </div>
                    <div className="cardContentFirstItemsPeta">
                        <button className="cardButton">delete</button>
                    </div>
                </div>
                <div className="cardContentItem">
                    <div className="cardContentSecondItem">
                        <p className="cardContent">{this.props.cardStore.allCards[currentCardId]['content']}</p>
                    </div>             
                </div>
            </div>
        )
    }
}

export default Card;