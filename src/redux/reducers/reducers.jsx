
const initialState = {
  showText: 'hk_intro',
  location: 'castle',
  signpost: {
    right: { destination: 'darkwoods', position: {x: 3, y: 1.5, z: -3}, rotation: {x:0, y:-45, z:0}, textvalue: 'To Forest', isVisible: false },
		left: { destination: 'field',
			position: {x: -7.5, y: 2.4, z: 3},
			rotation: {x:0, y:120, z:0},
			textvalue: 'To Fields', isVisible: false },
  },
  playerItems: {
    hasKey: false
  }
};

export var itemReducer = (state = initialState.playerItems, action) => {
	switch (action.type) {
		case 'GET_KEY':
			return {
				...state,
				hasKey: action.getkey
			}
		default:
			return state
	}
};

export var showTextReducer = (state = initialState.showText, action) => {
	switch (action.type) {
		case 'SHOW_TEXT':
			return action.instruction;
		default:
			return state;
	}
};

export var locationReducer = (state = initialState.location, action) => {
	switch (action.type) {
		case 'SET_LOCATION':
			return action.location;
		default:
			return state;
	}
};

export var signpostReducer = (state = initialState.signpost , action) => {
	switch (action.type) {
		case 'SET_SIGN_R_LOCATION':
			return {
				...state,
				right:{
					destination: action.destination,
					position: action.position,
					rotation: action.rotation,
					textvalue: action.textvalue,
					isVisible: action.isVisible
				}
			}
		case 'SET_SIGN_L_LOCATION':
			return {
				...state,
				left:{
					destination: action.destination,
					position: action.position,
					rotation: action.rotation,
					textvalue: action.textvalue,
					isVisible: action.isVisible
				}
			}
    case 'SHOW_POSTS':
      return {
          ...state,
          left: {
          ...state.left,
            isVisible: action.visibility,
          },
          right: {
          ...state.right,
            isVisible: action.visibility,
          }
          // isVisible: action.visibility,
          // ...state.right,
          // isVisible: action.visibility,
        };
		default:
			return state;
	}
};
