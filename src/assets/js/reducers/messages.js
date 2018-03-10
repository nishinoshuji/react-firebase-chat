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
      ]
    default:
      return state;
  }
}

export default messages;
