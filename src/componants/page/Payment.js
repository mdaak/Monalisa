import React from 'react';
import { MdKeyboardArrowRight } from 'react-icons/md';
import { Link } from 'react-router-dom';
import styles from '../../styles/styleComponent/Shipping_pay_place/pay.module.css'
import Layout from '../Layout';

function Payment() {
    return (
        <Layout>
            <div className={styles.Shipping_section}>
                <div className={styles.shipping_status}>
                    <div className={styles.status}>
                        <Link to=''>Shipping Information</Link>
                        <MdKeyboardArrowRight />
                    </div>
                    <div className={styles.status}>
                        <Link to=''>Payment Method</Link>
                        <MdKeyboardArrowRight />
                    </div>
                    {/* <div className={styles.status}>
                        <Link to=''>Place Order</Link>
                        <MdKeyboardArrowRight />
                    </div> */}
                </div>
                <div className={styles.shipping_address_section}>
                    <div className={styles.shipping_content}>
                        <p className={styles.shipping_form_heading}>Payment method</p>
                        <div>
                            <form className={styles.form_text}>
                                <div className={styles.form_payment_method}>
                                    <div className={styles.form_radio}>
                                        <input type='radio' />
                                        <p>Stripe payment</p>
                                    </div>
                                    <div className={styles.form_radio}>
                                        <input type='radio' />
                                        <p>Cash on Delivery</p>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className={styles.order_summary}>
                        <div>
                            <p className={styles.summary_text}>Order Summary</p>
                            <div className={styles.sub_total}>
                                <p>Sub-total (1) ItemsL</p>
                                <p>$20.99</p>
                            </div>
                            <Link to='/place_order'>
                                <div className={styles.payment_text}>Continue</div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Payment;