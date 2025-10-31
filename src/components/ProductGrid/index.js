import React, { useState } from 'react';
import ProductCard from '@/components/ProductCard';
import styles from './ProductGrid.module.css';

const ProductGrid = ({ products }) => {
  const [isSortOpen, setIsSortOpen] = useState(false);

  return (
    <main className={styles.gridContainer}>
      <div className={styles.header}>
        <h1 className={styles.title}>DISCOVER OUR PRODUCTS</h1>
        <p className={styles.description}>
          Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus scelerisque. 
          Dolor integer scelerisque nibh amet mi ut elementum dolor.
        </p>
      </div>

      <div className={styles.filterHeader}>
        <div className={styles.itemCount}>
          <span>{products.length} ITEMS</span>
          <div className={styles.hideFilter}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" width="16" height="16">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
            </svg>
            <span>HIDE FILTER</span>
          </div>
        </div>
        
        <div className={styles.sortContainer}>
          <div className={styles.sortDropdown} onClick={() => setIsSortOpen(!isSortOpen)}>
            <span>RECOMMENDED</span>
            <span className={styles.sortArrow}>▼</span>
          </div>

          {isSortOpen && (
            <ul className={styles.sortMenu}>
              <li className={styles.sortOption}>RECOMMENDED</li>
              <li className={styles.sortOption}>NEWEST FIRST</li>
              <li className={styles.sortOption}>POPULAR</li>
              <li className={styles.sortOption}>PRICE : HIGH TO LOW</li>
              <li className={styles.sortOption}>PRICE : LOW TO HIGH</li>
            </ul>
          )}
        </div>
      </div>


      <div className={styles.grid}>
        {products.map((product) => (
          <ProductCard
            key={product.id}
            name={product.title} 
            price={product.price}
            image={product.image}
          />
        ))}
      </div>
    </main>
  );
};

export default ProductGrid;