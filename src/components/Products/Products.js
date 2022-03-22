import React, { useEffect, useState } from 'react';
import Product from './Product.js/Product';
import styles from './Products.module.css';

const Products = () => {
    //Getting Products From Fake API
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('products-data.json')
            .then(response => response.json())
            .then(data => setProducts(data))
    },[])

    return (
        <div className={styles.productsContainer}>
            <h3 className={styles.productsHeading}>All Products</h3>
            <div className={styles.products}>
                { 
                    products.map(product => <Product key={product.id} product={product}/>)
                }
            </div>
        </div>
    );
};

export default Products;