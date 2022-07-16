import React from 'react'
import { Link } from 'react-router-dom';
import Layout from '../Layout';
import { MdKeyboardArrowRight } from 'react-icons/md';
import styles from '../../styles/styleComponent/Shipping_pay_place/Shipping.module.css'

function Shipping() {
    return (
        <Layout>
            <div className={styles.Shipping_section}>
                <div className={styles.shipping_status}>
                    <div className={styles.status}>
                        <Link to=''>Shipping Information</Link>
                        <MdKeyboardArrowRight />
                    </div>
                    {/* <div className={styles.status}>
                        <Link to=''>Payment Method</Link>
                        <MdKeyboardArrowRight />
                    </div>
                    <div className={styles.status}>
                        <Link to=''>Place Order</Link>
                        <MdKeyboardArrowRight />
                    </div> */}
                </div>
                <div className={styles.shipping_address_section}>
                    <div className={styles.shipping_content}>
                        <p className={styles.shipping_form_heading}>Shipping Address</p>
                        <div>
                            <form className={styles.form_text}>
                                <div className={styles.form_name_fild}>
                                    <input type='text' placeholder='neme' />
                                    <input type='number' placeholder='phone number' />
                                </div>
                                <div>
                                    <input type='text' placeholder='Email' />
                                </div>
                                <div>
                                    <input type='textarea' placeholder='Address' />
                                </div>
                                <div>
                                    <input type='number' placeholder='Postcode' />
                                    <input type='text' placeholder='City' />
                                    <input type='text' placeholder='Country' />
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
                            <Link to='/payment'>
                                <div className={styles.payment_text}>Continue to Payment</div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Shipping;