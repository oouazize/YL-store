'use client';
import { product } from '@/type';
import { useState } from 'react'

export default function productList(locale: string) {
	const [selectedProduct, setSelectedProduct] = useState({} as product);
	const [products, setProducts] = useState([] as product[]);
	const [creatingProduct, setCreatingProduct] = useState(false);

  return {selectedProduct, setSelectedProduct, products, setProducts, creatingProduct, setCreatingProduct}
}
