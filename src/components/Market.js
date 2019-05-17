import React, { Component } from 'react';
import Item from './Item'

import { observer } from 'mobx-react'

@observer
class Market extends Component {

    render() {
        return (
            <div>
                {this.props.store.items.map((i, ind) => <Item item={i}
                    key={ind}
                    store={this.props.store} />)}
            </div>
        )
    }
}

export default Market;