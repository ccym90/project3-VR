export var showText = (instruction) => {
	return { type: 'SHOW_TEXT', instruction };
};

export var setLocation = (location) => {
	return {
		type: 'SET_LOCATION',
		location
	};
};

export var setSignPostR = (location) => {
	switch (location) {
		case 'newyork':
			return {
				type: 'SET_SIGN_R_LOCATION',
				destination: 'hawaii',
				position: {x: 3, y: 1.5, z: -3},
				rotation: {x:0, y:-45, z:0},
				textvalue: 'welcome to new york',
				isVisible: false
			};
		case 'hongkong':
			return {
				type: 'SET_SIGN_R_LOCATION',
				destination: 'iceland',
				position: {x: 3, y: 1.5, z: -5},
				rotation: {x:0, y:-45, z:0},
				textvalue: 'welcome to new york',
				isVisible: false
			};
		default:
			return {
				type: 'SET_SIGN_R_LOCATION',
				destination: 'ERROR LAND',
				position: {x: 1, y: 1.5, z: -3},
				rotation: {x:0, y:-45, z:0},
				textvalue: 'OH SHI-',
				isVisible: false
			};
	};
};


export var setSignPostL = (location) => {
	switch (location) {
		case 'newyork':
			return {
				type: 'SET_SIGN_L_LOCATION',
				destination: 'alaska',
				position: {x: 3, y: 1.5, z: -3},
				rotation: {x:0, y:-45, z:0},
				textvalue: 'welcome to new york',
				isVisible: false
			};
		case 'hongkong':
			return {
				type: 'SET_SIGN_L_LOCATION',
				destination: 'greenland',
				position: {x: 3, y: 1.5, z: -5},
				rotation: {x:0, y:-45, z:0},
				textvalue: 'welcome to new york',
				isVisible: false
			};
		default:
			return {
				type: 'SET_SIGN_L_LOCATION',
				destination: 'ERROR LAND',
				position: {x: 1, y: 1.5, z: -3},
				rotation: {x:0, y:-45, z:0},
				textvalue: 'OH SHI-',
				isVisible: false
			};
	};
};
