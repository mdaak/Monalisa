import React from 'react';
import styles from '../styles/Footer.module.css';
import { TiSocialFacebook, TiSocialGooglePlus, TiSocialLinkedin, TiSocialPinterest } from 'react-icons/ti';


function Footer() {

  const manu = [
    {
      topic: "support",
      catagory: [
        "Contact Us",
        "FAQs",
        "Size Guide",
        "Shipping and Returns"
      ]
    },
    {
      topic: "support",
      catagory: [
        "Men’s Shopping",
        "Women’s Shopping",
        "Kids’ Shopping",
        "Discounts"
      ]
    },
    {
      topic: "support",
      catagory: [
        "Our Story",
        "Careers",
        " Terms & Conditions",
        "Privacy & Cookie policy"
      ]
    },
    {
      topic: "Contact",
      catagory: [
        "1-888-923-8044",
        "1-888-923-8055",
        "help@allbirds.com"
      ]
    }
  ]

  return (
    <div className={styles.footer_section}>
      <div className={styles.footer_heading}>
        <h3>Want style ides and treands</h3>
        <div className={styles.search_field}>
          <input className='mail_input' placeholder='Enter Email*' />
          <button>Subscribe</button>
        </div>
      </div>
      <div className={styles.Footer_contant}>
        <div className={styles.footer_left}>
          {/* <div> */}
          <p>Monalisa</p>
          <div className={styles.footer_logo}>
            <TiSocialFacebook />
            <TiSocialLinkedin />
            <TiSocialPinterest />
            <TiSocialGooglePlus />
          </div>
          {/* </div> */}
        </div>
        <div className={styles.footer_right}>
          {manu.map((topics, i) => {
            return (
              <div key={i}>
                <p>{topics.topic}</p>
                <ul >
                  {
                    topics.catagory.map((cata, i) => {
                      return (
                        <li key={i}>{cata}</li>
                      )
                    })
                  }
                </ul>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Footer