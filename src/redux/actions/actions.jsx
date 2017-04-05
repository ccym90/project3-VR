
export var setLocation = (location) => {
	return {
		type: 'SET_LOCATION',
		location
	};
};

export var showText = (instruction) => {
	return { type: 'SHOW_TEXT', instruction };
};

export var showSignPosts = () => {
	return { type: 'SHOW_POSTS', visibility: true };
};


export var setSignPostR = (location) => {
	switch (location) {
		case 'castle':
			return {
				type: 'SET_SIGN_R_LOCATION',
				destination: 'darkwoods',
				position: {x: 3, y: 1.5, z: -3},
				rotation: {x:0, y:-45, z:0},
				textvalue: 'To Forest',
				isVisible: false
			};
		case 'darkwoods':
			return {
				type: 'SET_SIGN_R_LOCATION',
				destination: 'field',
				position: {x: 2, y: 1.5, z: -5},
				rotation: {x:0, y:-45, z:0},
				textvalue: 'To Fields',
				isVisible: false
			};
		case 'field':
			return {
				type: 'SET_SIGN_R_LOCATION',
				destination: 'castle',
				position: {x: 1, y: 1.5, z: -5},
				rotation: {x:0, y:-45, z:0},
				textvalue: 'To Castle',
				isVisible: false
			};
		default:
			return {
				type: 'SET_SIGN_R_LOCATION',
				destination: 'castle',
				position: {x: 1, y: 1.5, z: -3},
				rotation: {x:0, y:-45, z:0},
				textvalue: 'ERROR: OH SHI-',
				isVisible: false
			};
	};
};

export var setSignPostL = (location) => {
	switch (location) {
		case 'castle':
			return {
				type: 'SET_SIGN_L_LOCATION',
				destination: 'field',
				position: {x: -3, y: 1.5, z: -3},
				rotation: {x:0, y:45, z:0},
				textvalue: 'To Fields',
				isVisible: false
			};
		case 'darkwoods':
			return {
				type: 'SET_SIGN_L_LOCATION',
				destination: 'castle',
				position: {x: -2, y: 1.5, z: -5},
				rotation: {x:0, y:45, z:0},
				textvalue: `To Castle`,
				isVisible: false
			};
		case 'field':
			return {
				type: 'SET_SIGN_L_LOCATION',
				destination: 'darkwoods',
				position: {x: -1, y: 1.5, z: -5},
				rotation: {x:0, y:45, z:0},
				textvalue: `To Forest`,
				isVisible: false
			};
		default:
			return {
				type: 'SET_SIGN_R_LOCATION',
				destination: 'castle',
				position: {x: 1, y: 1.5, z: -3},
				rotation: {x:0, y:45, z:0},
				textvalue: 'ERROR: OH SHI-',
				isVisible: false
			};
	};
};
