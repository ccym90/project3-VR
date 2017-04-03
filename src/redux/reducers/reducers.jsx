import uuid from 'uuid';

export var showTextReducer = (state = true, action) => {
  switch (action.type) {
    case 'SHOW_TEXT':
      return action.instruction;
    default:
      return state;
  }
};

export var locationReducer = (state = 'hongkong', action) => {
  switch (action.type) {
    case 'SET_LOCATION':
      return action.location;
    default:
      return state;
  }
};
