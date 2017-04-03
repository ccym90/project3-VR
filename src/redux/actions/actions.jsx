export var showText = (instruction) => {
  return { type: 'SHOW_TEXT', instruction };
};

export var setLocation = (location) => {
  return {
    type: 'SET_LOCATION',
    location
  };
};
