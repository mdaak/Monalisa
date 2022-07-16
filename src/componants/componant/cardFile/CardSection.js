import React from 'react'
import Card from './Card';
import cardsData from '../../data/cardData.json'
import '../../../styles/styleComponent/Card_style/CardSection.css'

function CardSection() {
  console.log(cardsData.products)
  const productsData = cardsData.products;
  
  return (
    <div>
      <h1><b>Products</b></h1>
      <div className='cardSection'>
        {
          productsData.map((pData, i)=>{
            return(
              <div  key={i}>
                <Card pData={pData}/>
              </div>
            )
          })
        }
        
      </div>
    </div>
  )
}

export default CardSection;