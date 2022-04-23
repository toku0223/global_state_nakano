import { GET_DATA } from '../actions/index'

const reducer = (state, action) => {
    switch (action.type) {
        case GET_DATA:
            console.log(action)
            const fildata = action.data.filter(d => d.id < 6)
            return { ...state, user_data: fildata }
        default:
            return state
    }
}

export default reducer