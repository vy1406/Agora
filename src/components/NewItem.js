import React, { Component } from 'react';

class NewItem extends Component {
    
    render() {
        return (
             <div>
                 <input onChange={this.handleChange} name="item" type="text"></input>
                 <button onClick={this.addItem}>Add item</button>
             </div>
        )
    }
}

export default NewItem;