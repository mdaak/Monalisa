import React from 'react'
import { MdKeyboardArrowRight } from 'react-icons/md';
import { Link } from 'react-router-dom';
import styles from '../../styles/styleComponent/Shipping_pay_place/PlaceOrder.module.css';
import Layout from '../Layout';

function PlaceOrder() {
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
                    <div className={styles.status}>
                        <Link to=''>Place Order</Link>
                        <MdKeyboardArrowRight />
                    </div>
                </div>
                <div className={styles.shipping_address_section}>
                    <div className={styles.address_section_detail} >
                        <div className={styles.shipping_content}>
                            <p className={styles.shipping_form_heading}>Ordered Items</p>
                            <div>
                                <form className={styles.form_text}>
                                    <div className={styles.payment_order_item}>
                                        <div className={styles.payment_order_item_img} >
                                            <img src='https://res.cloudinary.com/muttakinhasib/image/upload/v1627845673/products/fwi9exhq2h2qokcahe7g.webp' alt='' />
                                            <p>Umrah Mubarak Mug - Italic</p>
                                        </div>
                                        <p className={styles.price}>1 x $8.35 = $8.35</p>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className={styles.shipping_content}>
                            <p className={styles.shipping_form_heading}>Payment method</p>
                            <div>
                                <form className={styles.form_text}>
                                    <div className={styles.form_payment_method}>
                                        <p>Stripe</p>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className={styles.shipping_content}>
                            <p className={styles.shipping_form_heading}>Shipping Details</p>
                            <div>
                                <form className={styles.form_text}>
                                    <div className={styles.form_payment_method}>
                                        <p>test</p>
                                        <p>testingjob6@gmail.com</p>
                                        <p>142142</p>
                                        <p>Zc ASxd - ASx</p>
                                        <p>Bangladesh</p>
                                    </div>
                                </form>
                            </div>
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

export default PlaceOrder;