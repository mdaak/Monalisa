import React from 'react';
import styles from '../../styles/styleComponent/DualDiv.module.css'

function DualDiv({data}) {
console.log(data)
const {image, id, title, heading, para1st, para2nd}=data;
const changeDirection =(id)=>{
if(id%2===0){
    return {flexDirection:'row-reverse'}
}else{
    return {flexDirection:'row'}
}
}
  return (
    <div style={changeDirection(id)} className={styles.dual_div}>
        <div className={styles.dual_image}>
            <img src={image} alt='hand shake'/>
        </div>
        <div className={styles.dual_text}>
            <div>
            <p className={styles.title}>{title}</p>
            <p className={styles.heading}>{heading}</p>
            <p className={styles.para1st}>{para1st}</p>
            <p className={styles.para2nd}>{para2nd}</p>
            </div>
        </div>
    </div>
  )
}

export default DualDiv;