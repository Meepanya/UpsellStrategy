import { useCallback, useState } from 'react';
import { useQuery } from "@apollo/client";

import { Wrapper } from "./cart.styles";

export type CartItemType = {
  id: number,
  title: string,
  short_description: string,
  original_price: number,
  discounted_price: number,
  image: string, 
}

export default function Cart() {
  return(<></>);
  
  // const id = 1;
  // const { loading, error, data } = useQuery<CartItemType>(CART_PRODUCT, { 
  //   variables: { id }, 
  // });

  // console.log(data);

  // if (loading) return null;
  // if (error) {
  //   throw new Error(`Error appeared: ${error}`);
  // }

  // return (
  //   <div>
  //     Hello
  //   </div>
  // );
}
