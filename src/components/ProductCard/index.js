import React from 'react';
import styles from './ProductCard.module.css';

const ProductCard = ({ image, name, price }) => {
  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <img src={image} alt={name} className={styles.productImage} />
      </div>
      <div className={styles.cardContent}>
        <h2 className={styles.productName}>{name}</h2>
        <p className={styles.productPrice}>${price}</p>
      </div>
    </div>
  );
};
export default ProductCard;