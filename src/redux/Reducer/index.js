import {
  GET_ARTICULOS,
  POST_ARTICULOS,
  DELETE_ARTICULOS,
  PATCH_ARTICULOS,
} from '../Actions/index.js';

const initialState = {
  articulos: [],
  allArticulos: [],
  changeArticles: false,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ARTICULOS:
      console.log(action.payload.data);
      return {
        ...state,
        articulos: action.payload,
        allArticulos: action.payload,
        changeArticles: false,
      };
    // case GET_ARTICULOSS:
    //   return {
    //     ...state,
    //     articulos: action.payload,
    //   };
    case DELETE_ARTICULOS:
      return {
        ...state,
        changeArticles: action.payload,
      };
    case PATCH_ARTICULOS:
      console.log(action.payload);
      return {
        ...state,
        changeArticles: action.payload,
      };
    case POST_ARTICULOS:
      return {
        ...state,
        changeArticles: action.payload,
      };
    default:
      return state;
  }
};
export default rootReducer;
