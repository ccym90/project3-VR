<<<<<<< HEAD
=======
// import uuid from 'uuid';
const initialState = {
  showText: '',
  location: '',
  signpost: {
    right: { destination: '', position: {}, rotation: {}, textvalue: '', isVisible: false },
		left: { destination: '', position: {}, rotation: {}, textvalue: '', isVisible: false },
  }
};
>>>>>>> 7ad96b512cc6dabee1952b06886eb70ed00c2276

export var showTextReducer = (state = 'hk_intro', action) => {
	switch (action.type) {
		case 'SHOW_TEXT':
			return action.instruction;
		default:
			return state;
	}
};

export var locationReducer = (state = 'hong kong', action) => {
<<<<<<< HEAD
  switch (action.type) {
    case 'SET_LOCATION':
      return action.location;
    default:
      return state;
    }
=======
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
>>>>>>> 7ad96b512cc6dabee1952b06886eb70ed00c2276
};
