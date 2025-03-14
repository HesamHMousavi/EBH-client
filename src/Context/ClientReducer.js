import {
  SET_BOUQUET,
  SET_BALLOON,
  SET_PRODUCTS,
  SET_PRODUCT,
  ADD_TO_CART,
  REMOVE_FROM_CART,
  SET_CART,
  ALERT,
  SET_LOADING
} from "./Types";
const ClientReducer = (state, action) => {
  switch (action.type) {
    default:
      return { ...state };
    case SET_BOUQUET: {
      return {
        ...state,
        SelectedBouquet: action.payload,
      };
    }
    case ALERT: {
      return {
        ...state,
        Alerts: action.payload,
      };
    }
    case SET_BALLOON: {
      return {
        ...state,
        SelectedBalloon: action.payload,
      };
    }
    case SET_PRODUCTS: {
      return {
        ...state,
        Products: action.payload,
      };
    }
    case SET_PRODUCT: {
      return {
        ...state,
        SelectedProduct: action.payload,
      };
    }
    case ADD_TO_CART:
      return { ...state, Cart: [...state.Cart, action.payload] };

    case REMOVE_FROM_CART:
      return {
        ...state,
        Cart: state.Cart.filter((item) => item.id !== action.payload),
      };
    case SET_LOADING:
      return {
        ...state,
        prodLoading: action.payload,
      };

    case SET_CART:
      return { ...state, Cart: [] };
  }
};
export default ClientReducer;
