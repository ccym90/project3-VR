export var getKey = () => {
	return { type: 'GET_KEY', getkey: true }
};

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
				position: {x: 6.28, y: 1.5, z: -3.65},
				rotation: {x:0, y:-68.1, z:0},
				textvalue: 'To Dark Woods',
				isVisible: false
			};
		case 'castle2':
			return {
				type: 'SET_SIGN_R_LOCATION',
				destination: 'darkwoods',
				position: {x: 6.28, y: 1.5, z: -3.65},
				rotation: {x:0, y:-68.1, z:0},
				textvalue: 'To Dark Woods',
				isVisible: true
			};
		case 'darkwoods':
			return {
				type: 'SET_SIGN_R_LOCATION',
				destination: 'field',
				position: {x: -5.76, y: 2.18, z: -6.86},
				rotation: {x:0, y:69.9, z:0},
				textvalue: 'To Fields',
				isVisible: true
			};
		case 'field':
			return {
				type: 'SET_SIGN_R_LOCATION',
				destination: 'castle2',
				position: {x: 1, y: 1.5, z: -5},
				rotation: {x:0, y:-45, z:0},
				textvalue: 'To Castle',
				isVisible: true
			};
		default:
			return {
				type: 'SET_SIGN_R_LOCATION',
				destination: 'castle',
				position: {x: 1, y: 1.5, z: -3},
				rotation: {x:0, y:-45, z:0},
				textvalue: 'ERROR: OH SHI-',
				isVisible: true
			};
	}
}

export var setSignPostL = (location) => {
	switch (location) {
		case 'castle':
			return {
				type: 'SET_SIGN_L_LOCATION',
				destination: 'field',
				position: {x: -7.23, y: 2.4, z: 5.39},
				rotation: {x:0, y:163.8, z:0},
				textvalue: 'To Fields',
				isVisible: false
			};
		case 'castle2':
			return {
				type: 'SET_SIGN_L_LOCATION',
				destination: 'field',
				position: {x: -7.23, y: 2.4, z: 5.39},
				rotation: {x:0, y:163.8, z:0},
				textvalue: 'To Fields',
				isVisible: true
			};
		case 'darkwoods':
			return {
				type: 'SET_SIGN_L_LOCATION',
				destination: 'castle2',
				position: {x: -4.05, y: 1.5, z: 7.39},
				rotation: {x:0, y:103.7, z:0},
				textvalue: `To Castle`,
				isVisible: true
			};
		case 'field':
			return {
				type: 'SET_SIGN_L_LOCATION',
				destination: 'darkwoods',
				position: {x: -4.1, y: 1.5, z: 4.7},
				rotation: {x:0, y:140.3, z:0},
				textvalue: `To Dark Woods`,
				isVisible: true
			};
		default:
			return {
				type: 'SET_SIGN_L_LOCATION',
				destination: 'castle',
				position: {x: 1, y: 1.5, z: -3},
				rotation: {x:0, y:45, z:0},
				textvalue: 'ERROR: OH SHI-',
				isVisible: true
			};
	}
};
