import React from 'react';
import './List.css';
import Card from './Card';

class List extends React.Component{

    cardIds = this.props.listCardIds;
    listHeader = this.props.listHeader;
    
    render(){
        return(
            <div className="listContainer">
                <div className="listItem">
                    <h2>{this.listHeader}</h2>
                    <div>
                        {this.cardIds.map((item, index) => (
                         <div key={index}><Card id={item} cardStore={this.props.listStore} /></div>
                        ))}
                    </div>
                </div>
                <div>
                    <button>+ Add Random Card</button>
                </div>
            </div>
        )
    }
}


export default List;