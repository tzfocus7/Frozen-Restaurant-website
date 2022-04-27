import React from 'react'
import PineappleYog from '../Images/PineappleYog.jpg'
import CoconutYog from '../Images/CoconutYog.jpg'
import MangoYog from '../Images/MangoYog.jpg'
import MilkYog from '../Images/MilkYog.jpg'
import ChocolateYog from '../Images/ChocolateYog.jpg'
import VanillaYog from '../Images/VanillaYog.jpg'
import StrawberryYog from '../Images/StrawberryYog.jpg'
import BlackberryYog from '../Images/BlackberryYog.jpg'
import BlueberryYog from '../Images/BlueberryYog.jpg'

import './Product.css'

function Product() {
  const foods = [
    {id: 1, foodname: 'Pineapple Yogurt', image: PineappleYog, price: '₦900' },
    {id: 2, foodname: 'Coconut Yogurt', image: CoconutYog, price: '₦1000' },
    {id: 3, foodname: 'Mango Yogurt', image: MangoYog, price: '₦700' },
  ]
  const rows = [
    {id: 1, rowname: 'Milk Yogurt', image: MilkYog, price: '₦500' },
    {id: 2, rowname: 'Chocolate Yogurt', image: ChocolateYog, price: '₦1100' },
    {id: 3, rowname: 'Vanilla Yogurt', image: VanillaYog, price: '₦600' },
  ]
  const yogs = [
    {id: 1, yogname: 'Strawberry Yogurt', image: StrawberryYog, price: '₦1000' },
    {id: 2, yogname: 'Blackberry Yogurt', image: BlackberryYog, price: '₦1300' },
    {id: 3, yogname: 'Blueberry Yogurt', image: BlueberryYog, price: '₦1300' },
  ]
  
  return (
    <div className='container'>

      {/* Header start */}
      <div className='header'>
        <div>
          <h1>products</h1>
        </div>
      </div>
      {/* Header end */}

      <ul className='product'>
        <li className='product-text'>
          <h2>tropical flavour</h2>
          <p>Willing to have a taste of the tropics? Then you have to get one/some of these. Enjoy!!</p>
        </li>
        <li className='product-image'>
          {
            foods && foods.map((food) => 
              <div className='card'>
                <div className='card-image'>
                  <img src={food.image} alt = ""/>
                  <h4>{food.foodname}</h4>
                  <p>{food.price}</p>
                </div>
              </div>
              )
            }
        </li>
      </ul>

      <ul className='product'>
        <li className='product-text'>
          <h2>classic flavour</h2>
          <p>The usual flavours? Don't get comfortable though your mind is about to be blown.</p>
        </li>
        <li className='product-image'>
          {
            rows && rows.map((_row) => 
              <div className='card'>
                <div className='card-image'>
                  <img src={_row.image} alt = ""/>
                  <h4>{_row.rowname}</h4>
                  <p>{_row.price}</p>
                </div>
              </div>
              )
            }
        </li>
      </ul>

      <ul className='product'>
        <li className='product-text'>
          <h2>berry special</h2>
          <p>Berries yogurt are the absolute best. Blue? Black? Straw? Just treat yourself to one of these.</p>
        </li>
        <li className='product-image'>
          {
            yogs && yogs.map((_yog) => 
              <div className='card'>
                <div className='card-image'>
                  <img src={_yog.image} alt = ""/>
                  <h4>{_yog.yogname}</h4>
                  <p>{_yog.price}</p>
                </div>
              </div>
              )
            }
        </li>
      </ul>
        
    </div>
  )
}

export default Product