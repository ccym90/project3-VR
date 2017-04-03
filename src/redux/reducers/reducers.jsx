import uuid from 'uuid';

export var showGraphicReducer = (state = true, action) => {
  switch (action.type) {
    case 'SHOW_NEXT_GRAPHIC':
      return action.showGraphic;
    default:
      return state;
  }
};
