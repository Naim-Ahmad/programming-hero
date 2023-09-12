const getItem = (property) => {
    const items = localStorage.getItem(property)
    if (items) {
        return JSON.parse(items)
    }
    return []
}

const setItem = (property, value) => {
    const items = getItem(property)
    const string = [...items, value];
    localStorage.setItem(property, JSON.stringify(string))
}

const removeItem = (property, value)=>{
    const items = getItem(property)
    items.splice(items.indexOf(value), 1)
    localStorage.removeItem('cart')
    items.forEach(item=> setItem('cart', item))
}
export { getItem, removeItem, setItem }

