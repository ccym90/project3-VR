import uuid from 'uuid';

export var showGraphicReducer = (state = true, action) => {
  switch (action.type) {
    case 'SHOW_NEXT_GRAPHIC':
      return action.showGraphic;
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
