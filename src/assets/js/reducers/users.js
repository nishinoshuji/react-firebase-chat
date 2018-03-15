const initialState = ['A', 'B', 'C'];

const users = (state = initialState,action) => {
  switch(action.type) {
    case 'ADD_USER':
      if(!state.includes(action.userName)){
        return [
          ...state,
          action.userName
        ]
      } else {
        return state;
      }
    default:
      return state;
  }
}
export default users;
