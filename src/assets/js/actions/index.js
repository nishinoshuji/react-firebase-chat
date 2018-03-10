import uuidv4 from 'uuid';

export const addMessage = (user, text) => ({
  type: 'ADD_MESSAGE',
  id: uuidv4(),
  user,
  text,
  created: Date.now()
});
