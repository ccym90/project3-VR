// ****************instead of nextMemberType have showNextGraphic//changeLocation???????
export function showNextGraphic(graphicID) {
  return { type: 'SHOW_NEXT_GRAPHIC', graphicID}
}

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
