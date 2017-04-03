import uuid from 'uuid';

export var showTextReducer = (state = 'hk_intro', action) => {
  switch (action.type) {
    case 'SHOW_TEXT':
      return action.instruction;
    default:
      return state;
  }
};

export var locationReducer = (state = 'hong kong', action) => {
  switch (action.type) {
    case 'SET_LOCATION':
      return action.location;
    default:
      return state;
  }
};
