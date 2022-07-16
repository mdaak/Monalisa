import React from 'react';
import styles from '../../../styles/styleComponent/Card_style/Card.module.css'
import { FaStar } from 'react-icons/fa';
import { HiOutlineShoppingBag } from 'react-icons/hi';
import { Link } from 'react-router-dom';


const Card = ({ pData }) => {
  console.log('product data fot', pData)
  const { category, name, price, reviews, image } = pData;

  return (
    <div className={styles.card}>
      <Link to='/singleProduct'>
      <img className={styles.cardImg} src={image} alt='' />
      </Link>
      <div className={styles.product_name_pricev}>
        <div className={styles.product_name}>
          <div className={styles.name}>
            <h5>{category}</h5>
            <p>
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </p>
          </div>
          <div >
            <div className={styles.rating}>
              <div>
                <p>{name}</p>
              </div>
              <div className={styles.ratingReview}>
                <p className={styles.ratingCount}>{reviews.length} reviews</p>
              </div>
            </div>
          </div>
        </div>
      
        <div className={styles.product_price}>
          <p className={styles.price}>${price}</p>
          <p className={styles.cart}><b><HiOutlineShoppingBag className='shopingBag' /> Add to cart</b></p>
        </div>
     
      </div>
    </div>
  )
}

export default Card;