const initialState = {
  showText: 'hk_intro',
  location: 'hongkong',
  signpost: {
    // right: { destination: '', position: {}, rotation: {}, textvalue: '', isVisible: false },
		// left: { destination: '', position: {}, rotation: {}, textvalue: '', isVisible: false },
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
		default:
			return state;
	}
};
