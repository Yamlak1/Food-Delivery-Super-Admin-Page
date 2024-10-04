import classNames from 'classnames';
import React from 'react';
import { Link } from 'react-router-dom';

const popularProducts = [
  {
    id: '3432',
    product_name: 'Special burger',
    product_thumbnail: 'https://source.unsplash.com/100x100?macbook',
    product_price: '499.00 Birr',
  },
  {
    id: '7633',
    product_name: 'Family Pizza',
    product_thumbnail: 'https://source.unsplash.com/100x100?earbuds',
    product_price: '399.00 birr',
    product_stock: 24,
  },
  {
    id: '6534',
    product_name: 'Romiana Spicial',
    product_thumbnail: 'https://source.unsplash.com/100x100?laptop',
    product_price: '899.00 Birr',
    product_stock: 56,
  },
  {
    id: '9234',
    product_name: 'Channoli Special Noodls',
    product_thumbnail: 'https://source.unsplash.com/100x100?smartphone',
    product_price: '499.00 Birr',
    product_stock: 98,
  },
];

function PopularProducts() {
  return (
    <div className="w-[20rem] bg-white p-4 rounded-sm border border-gray-200">
      <strong className="text-gray-700 font-medium"> Popular Products </strong>{' '}
      <div className="mt-4 flex flex-col gap-3">
        {' '}
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
              />{' '}
            </div>{' '}
            <div className="ml-4 flex-1">
              <p className="text-sm text-gray-800"> {product.product_name} </p>{' '}
              <span
                className={classNames(
                  product.product_stock === 0
                    ? 'text-red-500'
                    : product.product_stock > 50
                    ? 'text-green-500'
                    : 'text-orange-500',
                  'text-xs font-medium'
                )}>
                {product.product_stock === 0
                  ? 'Out of Stock'
                  : product.product_stock + ' in Stock'}{' '}
              </span>{' '}
            </div>{' '}
            <div className="text-xs text-gray-400 pl-1.5">
              {' '}
              {product.product_price}{' '}
            </div>{' '}
          </Link>
        ))}{' '}
      </div>{' '}
    </div>
  );
}

export default PopularProducts;
