import { FETCHING_FRIENDS, SUCCESS, ERROR, ADD_FRIEND, UPDATE_FRIEND } from '../Actions/index';

const initialState = {
    fetchingFriends: false,
    friendsFetched: false,
    friendsSaved: false,
    savingFriends: false,
    updatingFriend: false,
    friendUpdated: false,
    deletingFriend: false,
    friendDeleted: false,
    friends: [],
    error: null
}

const friendReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCHING_FRIENDS:
            return Object.assign({}, state, { fetchingFriends: true })
        case SUCCESS:
            return Object.assign({}, state, { fetchingFriends: false, friends: action.payload })
        case ERROR:
            return Object.assign({}, state, { error: action.payload })
        case ADD_FRIEND:
            return Object.assign({}, state, { fetchingFriends: false, friends: action.payload })
        case UPDATE_FRIEND:
            return Object.assign({}, state, { fetchingFriends: false, friends: action.payload })
        default:
            return state
    }
}

export default friendReducer;