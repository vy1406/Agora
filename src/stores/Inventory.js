import { observable, action } from 'mobx'
import { Item } from './Item'

export class Inventory {
    @observable items = []
    @observable length

    @action addItem = argItemName => {
        const itemToAdd = new Item(argItemName)
        this.checkIfExist(argItemName) ? this.findAndUpdate(argItemName) : this.items.push(itemToAdd)
    }

    @action buyItem = argItemName => {
        const itemToBuy = this.getItemByName(argItemName)
        itemToBuy.quantity > 1 ? itemToBuy.quantity-- : this.removeItemFromArray(argItemName)
    }

    @action editPrice = (name, price) => this.getItemByName(name).price = price
    
    removeItemFromArray = argItemName => {
        const items = this.items.filter(item => item.name !== argItemName)
        this.items = items
    }

    getItemByName = argItemName => this.items.filter(item => item.name === argItemName)[0]

    checkIfExist = argItemName => this.getItemByName(argItemName) ? true : false

    findAndUpdate = argItemName => {
        const filtered = this.getItemByName(argItemName)
        filtered.quantity++
    }

}