import uuid from 'uuid';

export var showTextReducer = (state = true, action) => {
  switch (action.type) {
    case 'SHOW_TEXT':
      return action.showText;
    default:
      return state;
  }
};
