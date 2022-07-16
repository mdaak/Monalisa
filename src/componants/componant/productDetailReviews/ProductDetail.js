import React from 'react'
import Layout from '../../Layout';
import styles from '../../../styles/styleComponent/Product/ProductDetail.module.css';
import { BsStarFill, BsFillCheckCircleFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';

function ProductDetail() {
    return (
        <Layout>
            <div className={styles.productDetail}>
                <div className={styles.productImage}>
                    <img className={styles.pImg} src='https://res.cloudinary.com/muttakinhasib/image/upload/v1627845739/products/m73nfgubnxhpi9ke8fu6.webp' alt='' />
                </div>
                <div className={styles.productDescription}>
                    <p className={styles.brandName}>QUOTELOVIN</p>
                    <h2 className={styles.productName}>Floral Gift Wrap</h2>
                    <div className={styles.starReview}> <span className={styles.starLogo}><BsStarFill /><BsStarFill /><BsStarFill /> </span> <span className={styles.review}> 3 Reviews </span></div>
                    <div className={styles.priceStock}><div className={styles.price}><p>$20.99</p></div><div className={styles.stock}><span><BsFillCheckCircleFill /> &nbsp;</span>In stock</div></div>
                    <div className={styles.product_description}>
                        <p>A beautiful set of Two A2 pieces of gift wrap. Perfect to wrap your Eid gifts! Please note - tag and ribbon not included.</p>
                    </div>
                    <div className={styles.quantity_selection}>
                        <div>
                            <span className={styles.quantity}>Quantity</span>
                            <select className={styles.select} defaultValue={'DEFAULT'}>
                            <option value="DEFAULT" disabled>1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4" >4</option>
                            </select>
                        </div>
                        <Link to='/cart'><button className={styles.addCart}>Add to cart</button></Link>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default ProductDetail;