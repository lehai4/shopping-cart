import Helmet from "../components/Helmet";
import { products } from "../fakeApi/product";
import { useDispatch } from "react-redux";
import { addPost } from "../redux/cartSlice";
const Product = () => {
  const dispatch = useDispatch();
  const handleBuy = (e) => {
    let result = products.filter((item) => item.id === e);
    let newCart = {
      id: result[0].id,
      title: result[0].title,
      description: result[0].description,
      price: result[0].price,
      status: result[0].status,
      imageUrl: result[0].imageUrl,
    };
    dispatch(addPost(newCart));
  };
  return (
    <Helmet title="Product">
      <div className="product">
        <div className="wrapper">
          <div className="product-list">
            {products.map((item, i) => {
              if (item.status === "yes") {
                return (
                  <div className="product-item" key={i}>
                    <img src={item.imageUrl} alt="" className="product-img" />
                    <div className="product-content">
                      <span>
                        <span className="product-title">{item.title}</span>
                        <span className="product-description">
                          {item.description}
                        </span>
                        <span className="product-price">
                          Giá: {item.price}vnd
                        </span>
                      </span>
                      <div>
                        <button
                          className="btn btn-buy"
                          onClick={() => handleBuy(i)}
                        >
                          Mua
                        </button>
                      </div>
                    </div>
                  </div>
                );
              } else if (item.status === "no") {
                return (
                  <div className="product-item" key={i}>
                    <img src={item.imageUrl} alt="" className="product-img" />
                    <div className="product-content">
                      <span>
                        <span className="product-title">{item.title}</span>
                        <span className="product-description">
                          {item.description}
                        </span>
                        <span className="product-price">
                          Giá: {item.price}vnd
                        </span>
                      </span>
                      <div>
                        <button
                          className="btn btn-buy"
                          onClick={() => handleBuy(i)}
                        >
                          Mua
                        </button>
                      </div>
                    </div>
                    <div className="overlay"></div>
                  </div>
                );
              }
            })}
          </div>
        </div>
      </div>
    </Helmet>
  );
};

export default Product;
