import React, { Component } from 'react';
import { observer } from 'mobx-react'

@observer
class Popup extends Component {

    handleChange = (e) => {
        this.setState({
            itemPrice: e.target.value
        })
    }

    editItem = () => this.props.store.editPrice(this.props.item.name, this.state.itemPrice)

    render() {
        return (
            <div className='popup'>
                <div className='popup_inner'>
                    <h1>{this.props.item.name}</h1>
                    <p>Current price : {this.props.item.price}</p>
                    <input onChange={this.handleChange}></input>
                    <button onClick={this.editItem}>Edit</button>
                    <button onClick={this.props.closePopup}>Back</button>
                </div>
            </div>
        );
    }
}

export default Popup;