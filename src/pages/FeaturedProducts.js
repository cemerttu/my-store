import React from "react";

const FeaturedProducts = () => {
  const products = [
    {
      id: 1,
      name: "Product 1",
      price: "$20",
      image: "https://via.placeholder.com/250x200?text=Product+1",
    },
    {
      id: 2,
      name: "Product 2",
      price: "$30",
      image: "https://via.placeholder.com/250x200?text=Product+2",
    },
    {
      id: 3,
      name: "Product 3",
      price: "$40",
      image: "https://via.placeholder.com/250x200?text=Product+3",
    },
  ];

  return (
    <section className="py-5 bg-light">
      <div className="container">
        <h2 className="text-center mb-4 fw-bold">Featured Products</h2>
        <div className="row">
          {products.map((product) => (
            <div className="col-md-4 mb-4" key={product.id}>
              <div className="card product-card h-100 text-center">
                <img
                  src={product.image}
                  className="card-img-top product-img"
                  alt={product.name}
                />
                <div className="card-body">
                  <h5 className="card-title">{product.name}</h5>
                  <p className="card-text">{product.price}</p>
                  <button className="btn btn-dark">Add to Cart</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
