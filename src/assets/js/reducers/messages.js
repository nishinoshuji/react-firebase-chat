const messages = (state = [],action) => {
  switch (action.type){
    case 'ADD_MESSAGE':
      return [
        ...state,
        {
          id: action.id,
          user: action.user,
          text: action.text,
          created: action.created
        }
      ];
    case 'DELETE_MESSAGE':
      return state.filter((message) => {
        if(message.id !== action.id) {
          return true;
        }
      })
    default:
      return state;
  }
}


export default messages;
