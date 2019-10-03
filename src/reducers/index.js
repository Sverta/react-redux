const initialState = {
    addedItems: []
}

const addedIds = (state = initialState.addedItems, action) => {
    debugger;
    switch (action.type) {
        case 'ADD_DATA':
            console.log(state, action);
            // if (state.indexOf(action.productId) !== -1) {
            //     return state
            //   }
              return state
        default:
            return state
    }
}

export default addedIds;
