import React from 'react';
import styles from './Product.module.css'

const Product = (props) => {
    const {name, price, id} = props.product;
    return (
        <div className={styles.product}>
            <div className={styles.productInfo}>
                <h2 className={styles.productName}>{name}</h2>
                <h1>Price: {price}</h1>
                <p>Product Id: {id}</p>
            </div>
            <div className={styles.productActions}>
                <button className={styles.addToCartButton}>Add to cart</button>
            </div>
        </div>
    );
};

export default Product;