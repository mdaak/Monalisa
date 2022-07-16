import React from 'react'
import CartItem from '../componant/add_to_cart/CartItem';
import Layout from '../Layout';
import styles from '../../styles/styleComponent/Cart_style/Cart.module.css'
import { Link } from 'react-router-dom';

function Cart() {
    return (
        <Layout>
            <div className={styles.cart_content}>
                <h3>Your Shopping Cart</h3>
                <div className={styles.cart_section}>
                    <div className={styles.cart_list}>
                        <CartItem />
                    </div>
                    <div className={styles.cart_Quantity}>
                        <div>
                            <p className={styles.quantity_summary}>Order Summary</p>
                            <div className={styles.count_price}>
                                <p>sub-total (3) items</p>
                                <p>$ 64.99 </p>
                            </div>
                            <Link className={styles.prosid_link} to='/shipping'>
                            <div className={styles.prosid_button}>
                                <p>proceed to checkout</p>  
                            </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Cart;