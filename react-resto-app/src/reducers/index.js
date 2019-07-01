const initialState = {
    menu: [],
    loading: true,
    error: false,
    items: [],
    total: 0
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'MENU_LOADED':
            return {
                ...state,
                menu: action.payload,
                loading: false,
                error: false
            };
        case 'MENU_REQUESTED':
            return {
                ...state,
                menu: state.menu,
                loading: true,
                error: false
            };
        case 'MENU_CANCELLED':
            return {
                ...state,
                menu: state.menu,
                loading: false,
                error: true
            }; 
        case 'ITEM_ADD_TO_CART': 
            const id = action.payload;
            const item = state.menu.find(item => item.id === id);
            const anotherItem = state.items.find(item => item.id === id);
            const anotherItemIndex = state.items.findIndex(item => item.id === id);
            const sum = state.total + item.price;
            const newItem = {
                title: item.title,
                price: item.price,
                url: item.url,
                id: item.id,
                quantity: 1
            };
            if (anotherItem) {
                ++anotherItem.quantity;
                return {
                    ...state,
                    items: [
                        ...state.items.slice(0, anotherItemIndex),
                        anotherItem,
                        ...state.items.slice(anotherItemIndex + 1)
                    ],
                    total: sum
                }
            }
            return {
                ...state,
                items: [
                    ...state.items,
                    newItem
                ],
                total: sum
            };
        case 'ITEM_REMOVE_FROM_CART':
            const idx = action.payload;
            const itemIndex = state.items.findIndex(item => item.id === idx);
            const newSum = state.total - state.items[itemIndex].quantity*state.items[itemIndex].price;
            return {
                ...state,
                items: [
                    ...state.items.slice(0, itemIndex),
                    ...state.items.slice(itemIndex + 1)
                ],
                total: newSum
            };
        default:
            return state;
    }
}

export default reducer;