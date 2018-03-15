import uuidv4 from 'uuid';

export const addMessage = (user, text) => ({
  type: 'ADD_MESSAGE',
  id: uuidv4(),
  user,
  text,
  created: Date.now()
});

export const deleteMessage = (id) => ({
  type: 'DELETE_MESSAGE',
  id
});

export const switchUser = (selectedUser) => ({
  type: 'SWITCH_USER',
  selectedUser
});

export const addUser = (userName) => ({
  type: 'ADD_USER',
  userName
});
