import React from 'react'
import Layout from '../../Layout';
import { FaStar } from 'react-icons/fa';
import styles from '../../../styles/styleComponent/Product/RatingReview.module.css'

function RatingReview() {
  return (
    <Layout>
      <div className={styles.rating_review}>
        <div className={styles.rating}>
          <h3>
            Ratings & Reviews of Umrah Mubarak Mug - Italic
          </h3>
          <div className={styles.rating_img_comment}>
            <div className={styles.rating_img}>
              <img src='https://wikiimg.tojsiabtv.com/wikipedia/en/thumb/e/e2/IMG_Academy_Logo.svg/1200px-IMG_Academy_Logo.svg.png' alt='profile' />
            </div>
            <div className={styles.rating_comment}>
              <p>Hasid Molla</p>
              <div className={styles.rating_star}>
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
            </div>
          </div>
          <p className={styles.rating_comment_text}>Nice Product</p>
        </div>
        <div className={styles.review}>
          <h3>Write a customer review</h3>
          <form action='/page'>
            <select
              className={styles.rating_dropdown} name='rating'
              defaultValue={'DEFAULT'}
            >
              <option value='DEFAULT' disabled>Select Rating ...</option>
              <option value='1-Poor'>1-Poor</option>
              <option value='2-Fail'>2-Fail</option>
              <option value='3-Good'>3-Good</option>
              <option value='4-Vary good'>4-Vary good</option>
              <option value='5-Excellent'>5-Excellent</option>
            </select>
            <div className={styles.comment_area}><textarea
            className={styles.text_area} placeholder='Comment' name='message' ></textarea></div>
            <input className={styles.rating_submit} type='submit' />
          </form>
        </div>
      </div>
    </Layout>
  )
}

export default RatingReview;