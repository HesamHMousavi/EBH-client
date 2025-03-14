import React, { useContext } from "react";
import { MdShoppingCart } from "react-icons/md";
import { useLocation, Link } from "react-router-dom";
import { ClientContext } from "../Context/ClientState";

const CartC = () => {
  const { Cart } = useContext(ClientContext);
  const path = useLocation();
  return (
    path.pathname !== "/checkout" &&
    Cart.length > 0 && (
      <div className="cart">
        {
          <Link to="/checkout">
            <>
              <p className="cart-counter">{Cart.length}</p>
              <MdShoppingCart size={70} className="cart-icon" />
            </>
          </Link>
        }
      </div>
    )
  );
};

export default CartC;
