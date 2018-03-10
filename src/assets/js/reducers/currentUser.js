const initialState = 'A';

const currentUser = (state = initialState, action) => {
  switch (action.type) {
    case 'SWITCH_USER':
      return action.selectedUser
    default:
      return state;
  }
}

export default currentUser;
