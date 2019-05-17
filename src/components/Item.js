import React, { Component } from 'react';
import { observer } from 'mobx-react'
import Popup from './Popup'

@observer
class Item extends Component {
    constructor() {
        super()
        this.state = {
            showPopup: false,
            itemName: "",
            itemPrice: ""
        }
    }
    
    togglePopup = (itemName, itemPrice) => {
        this.setState({
            showPopup: !this.state.showPopup,
            itemName,
            itemPrice
        })
    }

    buyItem = () => this.props.store.buyItem(this.props.item.name)

    showEditPopup = () => {
        this.togglePopup(this.props.item.name, this.props.item.price)
    }
    render() {
        return (
            <div>
                {this.props.item.name} , (quantity: {this.props.item.quantity} ) \ (price : {this.props.item.price} $)
                <button onClick={this.buyItem}>Buy me</button>
                <button onClick={this.showEditPopup}>Change price</button>

                {this.state.showPopup ?
                    <Popup
                        text='Close Me'
                        item={this.props.item}
                        closePopup={this.togglePopup}
                        store={this.props.store}
                    />
                    : null
                }
            </div>
        )
    }
}

export default Item;