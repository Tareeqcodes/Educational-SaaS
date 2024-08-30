import React from 'react'
import ProductList from '../components/Marketplace/ProductList'
import ProductSearchBar from '../components/Marketplace/ProductSearchBar'
const MarketPlacePage = () => {
  return (
    <div>
      <ProductSearchBar />
      <ProductList />
    </div>
  )
}

export default MarketPlacePage