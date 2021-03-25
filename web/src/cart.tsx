import { useCallback, useState } from 'react';
import { useQuery } from "@apollo/client";

import { Wrapper } from "./cart.styles";
import { CART_PRODUCTS } from './gqlSchemas/products';

export type CartItemType = {
  title: string,
  short_description: string,
  original_price: number,
  discounted_price: number,
  image: string, 
}

export default function Cart() {
  
  const { loading, error, data } = useQuery(CART_PRODUCTS);
  console.log(data);

  return (
    <div>
      hello
    </div>
  );
}
