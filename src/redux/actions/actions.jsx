// ****************instead of nextMemberType have showNextGraphic//changeLocation???????

export var showText = (instruction) => {
  return { type: 'SHOW_TEXT', instruction };
};


export var setLocation = (location) => {
  return {
    type: 'SET_LOCATION',
    location
  };
};

// export function nextMemberType(memberId) {
//   return { type: 'NEXT_MEMBER_TYPE', memberId }
// }
//***********?????????????????????????????????????????????????????
// export function enableVRMode() {
//   return { type: 'ENABLE_VR_MODE' }
// }

// export function disableVRMode() {
//   return { type: 'DISABLE_VR_MODE' }
// }
