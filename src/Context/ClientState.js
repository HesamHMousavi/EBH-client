import {
  createContext,
  useReducer,
  useEffect,
  useRef,
  useCallback,
} from "react";
import axios from "axios";
import ClientReducer from "./ClientReducer";
import {
  SET_PRODUCTS,
  SET_PRODUCT,
  ADD_TO_CART,
  REMOVE_FROM_CART,
  ALERT,
  SET_CART,
  SET_LOADING,
} from "./Types";

export const ClientContext = createContext();

axios.defaults.baseURL = "https://api.fleure.co.uk";
// axios.defaults.baseURL = "http://localhost:5001/";

export const ClientState = (props) => {
  const initialState = {
    SelectedBouquet: null,
    SelectedBalloon: null,
    SelectedProduct: null,
    Products: [],
    Alerts: [],
    Cart: JSON.parse(localStorage.getItem("cart")) || [],
    prodLoading: false,
  };
  const [state, dispatch] = useReducer(ClientReducer, initialState);

  useEffect(() => {
    fetch();
    // eslint-disable-next-line
  }, []);
  const alertsRef = useRef(state.Alerts);
  useEffect(() => {
    alertsRef.current = state.Alerts;
  }, [state.Alerts]);

  const fetch = async () => await GetProducts();

  const SetProduct = (payload) => {
    dispatch({ type: SET_PRODUCT, payload: payload });
    localStorage.setItem("PRODUCT", JSON.stringify(payload));
  };

  // ✅ Add to Cart
  const AddCart = (product) => {
    dispatch({ type: ADD_TO_CART, payload: product });
    const updatedCart = [...state.Cart, product];
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  // ✅ Remove from Cart
  const DeleteCart = (productId) => {
    const updatedCart = state.Cart.filter((item) => item.id !== productId);

    dispatch({ type: REMOVE_FROM_CART, payload: productId });

    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const SetLoading = (flag) => {
    dispatch({
      type: SET_LOADING,
      payload: flag,
    });
  };

  const GetProducts = async () => {
    try {
      SetLoading(true);
      const res = await axios.get(`/api/products/`);
      SetLoading(false);
      dispatch({ type: SET_PRODUCTS, payload: res.data });
      return res.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.log(
          error.response ? error.response?.data?.message : error.message
        );
      } else {
        console.log(error.message);
      }
    }
  };

  const SetAlert = useCallback((message, type = "success", timeout = 3000) => {
    if (alertsRef.current.some((alert) => alert.message === message)) return;

    const newAlert = { id: Date.now(), message, type };
    const updatedAlerts = [...alertsRef.current, newAlert].slice(-3); // Keep max 3 alerts

    dispatch({ type: ALERT, payload: updatedAlerts });

    setTimeout(() => {
      dispatch({
        type: ALERT,
        payload: alertsRef.current.filter((alert) => alert.id !== newAlert.id),
      });
    }, 2000);
  }, []);

  const GetAddress = async (number, postcode) => {
    try {
      const res = await axios.post(`/api/address/`, { number, postcode });
      if (!res.data) SetAlert("Invalid Address", "warning");
      return res.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        SetAlert(
          error.response ? error.response?.data?.message : error.message
        );
      } else {
        SetAlert(error.message);
      }
    }
  };

  const CreateOrder = async (bulk) => {
    const order = {
      Email: bulk.email,
      FirstName: bulk.firstName,
      LastName: bulk.lastName,
      PhoneNumber: bulk.phone,
      Products: bulk.items,
      Status: "Pending",
      ShippingType: bulk.type,
      CollectionDate: bulk.date,
      DeliveryAddress: {
        Street: bulk.street + " " + bulk.address,
        PostCode: bulk.postalCode,
        Town: bulk.city,
      },
    };
    try {
      const res = await axios.post(`/api/orders`, order);
      // dispatch({ type: SET_CART });
      // localStorage.setItem("cart", JSON.stringify(""));

      if (res.data.success) {
        window.location.href = res.data.sessionUrl;
        setTimeout(() => {
          // window.location.reload();
        }, 100);
      } else {
        SetAlert("Something Went Wrong", "error");
      }
      return res.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        SetAlert(
          error.response ? error.response?.data?.message : error.message,
          "error"
        );
      } else {
        SetAlert(error.message, "error");
      }
    }
  };

  const EmptyCart = () => {
    dispatch({ type: SET_CART });
  };

  return (
    <ClientContext.Provider
      value={{
        Products: state.Products,
        GetProducts: GetProducts,
        SelectedProduct: state.SelectedProduct,
        SetProduct: SetProduct,
        Cart: state.Cart,
        AddCart: AddCart,
        DeleteCart: DeleteCart,
        Alerts: state.Alerts,
        SetAlert: SetAlert,
        CreateOrder: CreateOrder,
        prodLoading: state.prodLoading,
        SetLoading: SetLoading,
        EmptyCart: EmptyCart,
        GetAddress: GetAddress,
      }}
    >
      {props.children}
    </ClientContext.Provider>
  );
};
