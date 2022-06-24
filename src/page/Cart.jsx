import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  clearAllCart,
  removePost,
  increaseQuantity,
  decreaseQuantity,
} from "../redux/cartSlice";
import { products } from "../fakeApi/product";
const Cart = () => {
  const cartSlice = useSelector((state) => state.carts.carts);
  const getNumberCart = useSelector((state) => state.carts.numberCart);
  const [carts, setCarts] = useState([...cartSlice]);
  const [check, setCheck] = useState(false);
  const dispatch = useDispatch();
  const handleQuantity = (type, id) => {
    if (type === "PLUS") {
      setCarts((preV) => {
        return preV.map((item) => {
          if (item.id === id) {
            return {
              ...item,
              quantity: item.quantity + 1,
            };
          }
          return item;
        });
      });
      setCheck(false);
    } else if (type === "MINUS") {
      setCarts((preV) => {
        return preV.map((item) => {
          if (item.id === id) {
            if (item.quantity > 1) {
              return {
                ...item,
                quantity: item.quantity - 1,
              };
            } else if (item.quantity === 1) {
              alert("Số lượng tối thiểu là một");
              return {
                ...item,
              };
            }
          }
          return item;
        });
      });
      setCheck(true);
    }
  };
  const handleDelete = (id) => {
    let result = products.filter((item) => item.id === id);
    let deleteCart = {
      id: result[0].id,
      title: result[0].title,
      description: result[0].description,
      price: result[0].price,
      status: result[0].status,
      imageUrl: result[0].imageUrl,
    };
    dispatch(removePost(deleteCart));
  };
  const handleClearAll = () => {
    dispatch(clearAllCart());
  };
  useEffect(() => {
    setCarts(cartSlice);
  }, [cartSlice]);
  useEffect(() => {
    !check
      ? dispatch(increaseQuantity(carts))
      : dispatch(decreaseQuantity(carts));
  }, [carts]);
  return (
    <div className="cart">
      <div className="wrapper container line">
        <h2 className="wrapper-title">Giỏ hàng</h2>
        <div style={{ float: "right" }}>Số lượng giỏ hàng:{getNumberCart}</div>
        {carts.length === 0 ? (
          <p>Chưa có sản phầm</p>
        ) : (
          <>
            <div className="cart-content">
              <button className="clear-all" onClick={handleClearAll}>
                Xóa tất cả
              </button>
              <div className="cart-list">
                {carts.map((item, i) => (
                  <div className="cart-item" key={i}>
                    <img
                      src={item.imageUrl}
                      alt=""
                      className="cart-item__img"
                    />
                    <div className="cart-item__title">
                      <span>{item.title}</span>
                    </div>
                    <div className="cart-item__desc">
                      <span>{item.description}</span>
                    </div>
                    <span className="cart-item__price">
                      Giá: {item.price}vnd
                    </span>
                    <div className="cart-item__quantity">
                      <button
                        className="btn btn-plus"
                        onClick={() => handleQuantity("PLUS", item.id)}
                      >
                        +
                      </button>
                      <span>{item.quantity}</span>
                      <button
                        className="btn btn-minus"
                        onClick={() => handleQuantity("MINUS", item.id)}
                      >
                        -
                      </button>
                    </div>
                    <button
                      className="btn btn-delete"
                      onClick={() => handleDelete(item.id)}
                    >
                      x
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;
