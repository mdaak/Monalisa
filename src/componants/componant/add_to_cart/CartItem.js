import React from 'react'
import styles from '../../../styles/styleComponent/Cart_style/CartItem.module.css';

const CartItem = () => {
  return (
    <div className={styles.cart_list}>
      <img src='https://www.timeoutdubai.com/cloud/timeoutdubai/2021/09/11/hfpqyV7B-IMG-Dubai-UAE.jpg' alt=''/>
      <p>Washi Tape - Girlie Pink Theme</p>
      <div>$5.5</div>
      <select>
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
      </select>
      <div>delete button</div>
    </div>
  )
}
export default CartItem;