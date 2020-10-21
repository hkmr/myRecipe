import { act } from 'react-dom/test-utils';
import { createStore } from 'redux';

const initState = {
    items: []
}

const reducer = (state= initState, action) => {
    return state;
}

const store = createStore(reducer);


{
    type: 'ADD_ITEM',
    payload: {id: 1}
}


export default store;





