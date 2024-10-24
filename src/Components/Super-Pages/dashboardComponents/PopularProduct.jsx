import React, { useEffect, useState } from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import { TotalOrders } from '../../../services/dashboardServices';

function PopularProducts() {
  const [popularProducts, setPopularProducts] = useState([]);

  // Fetch orders and calculate most ordered products
  const fetchPopularProducts = async () => {
    try {
      const orders = await TotalOrders();
      const productCountMap = {};
      console.log(orders);
      // Loop through all orders and count products
      orders.forEach((order) => {
        const productId = order.menu.id;
        const productName = order.menu.foodName;
        const productThumbnail = order.menu.imagefile;
        const productPrice = order.menu.price;

        if (!productCountMap[productId]) {
          productCountMap[productId] = {
            id: productId,
            product_name: productName,
            product_thumbnail: productThumbnail,
            product_price: productPrice,
            order_count: 0,
          };
        }

        // Increment the count of the product
        productCountMap[productId].order_count += 1;
      });

      // Sort products by order count and take the top 5
      const sortedProducts = Object.values(productCountMap)
        .sort((a, b) => b.order_count - a.order_count)
        .slice(0, 5);

      setPopularProducts(sortedProducts);
    } catch (error) {
      console.error('Error fetching popular products:', error);
    }
  };

  useEffect(() => {
    fetchPopularProducts();
  }, []);

  return (
    <div className="w-[20rem] bg-white p-4 rounded-sm border border-gray-200">
      <strong className="text-gray-700 font-medium"> Popular Products </strong>
      <div className="mt-4 flex flex-col gap-3">
        {popularProducts.map((product) => (
          <Link
            key={product.id}
            to={`/product/${product.id}`}
            className="flex items-start hover:no-underline">
            <div className="w-10 h-10 min-w-[2.5rem] bg-gray-200 rounded-sm">
              <img
                className="w-full h-full object-cover rounded-sm"
                src={product.product_thumbnail}
                alt={product.product_name}
              />
            </div>
            <div className="ml-4 flex-1">
              <p className="text-sm text-gray-800">{product.product_name}</p>
            </div>
            <div className="text-xs text-gray-400 pl-1.5">
              {product.product_price}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default PopularProducts;
