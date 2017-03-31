// import uuid from 'uuid';
// import moment from 'moment';
//
// export var searchTextReducer = (state = '', action) => {
//   switch (action.type) {
//     case 'SET_SEARCH_TEXT':
//       return action.searchText;
//     default:
//       return state;
//   }
// };
// export var showCompletedReducer = (state = false, action) => {
//   switch (action.type) {
//     case 'TOGGLE_SHOW_COMPLETED':
//       return !state;
//     default:
//       return state;
//   }
// };
// export let nameReducer = (state = 'Anonymous', action ) => {
//   switch (action.type) {
//     case 'CHANGE_NAME':
//       return {
//         ...state,
//         name: action.name
//       };
//     default:
//       return state
//   }
// }
// export let todoReducer = ( state = [], action ) => {
//   switch (action.type) {
//     case 'ADD_TODO':
//         return [
//           ...state,
//           {
//             id: uuid(),
//             text: action.text,
//             completed: false,
//             createdAt: moment().unix(),
//             completedAt: undefined
//           }
//         ];
//       case 'REMOVE_TODO':
//         return {
//           ...state,
//           todos: state.todos.filter((todo) => todo.id !== action.id)
//         }
//       case 'TOGGLE_TODO':
//         return state.map((todo) => {
//           if (todo.id === action.id) {
//             var nextCompleted = !todo.completed;
//             return {
//               ...todo,
//               completed: nextCompleted,
//               completedAt: nextCompleted ? moment().unix() : undefined
//             };
//           } else {
//               return todo;
//           }
//         });
//       case 'ADD_TODOS':
//         return [
//           ...state,
//           ...action.todos
//         ];
//     default:
//       return state
//   }
// }
