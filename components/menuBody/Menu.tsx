import React from 'react'
import styles from "./Menu.module.scss";
import {useState} from "react"

type MenuProps = {
item : string;
price:string
}

export default function Menu() {
    const Products : MenuProps[] = [
        {
            item:"Heinken",
            price:"₦1000"
        },
        {
            item:"Heinken",
            price:"₦1000"
        },
        {
            item:"Heinken",
            price:"₦1000"
        },
        {
            item:"Heinken",
            price:"₦1000"
        },
        {
            item:"Heinken",
            price:"₦1000"
        },
        {
            item:"Heinken",
            price:"₦1000"
        },
        {
            item:"Heinken",
            price:"₦1000"
        },
        {
            item:"Heinken",
            price:"₦1000"
        },
        {
            item:"Heinken",
            price:"₦1000"
        },
        {
            item:"Heinken",
            price:"₦1000"
        },
        {
            item:"Heinken",
            price:"₦1000"
        },
        {
            item:"Heinken",
            price:"₦1000"
        },
        {
            item:"Heinken",
            price:"₦1000"
        },
        {
            item:"Heinken",
            price:"₦1000"
        },
        {
            item:"Heinken",
            price:"₦1000"
        },
        {
            item:"Heinken",
            price:"₦1000"
        },
 
    ]

    const Main: MenuProps[] = [
     {
        item:"Rice and Ofada Sauce",
        price:"₦3000"
     },
     {
        item:"Rice and Ofada Sauce",
        price:"₦3000"
     },
     {
        item:"Rice and Ofada Sauce",
        price:"₦3000"
     },
     {
        item:"Rice and Ofada Sauce",
        price:"₦3000"
     },
     {
        item:"Rice and Ofada Sauce",
        price:"₦3000"
     },
     {
        item:"Rice and Ofada Sauce",
        price:"₦3000"
     },
     {
        item:"Rice and Ofada Sauce",
        price:"₦3000"
     },
     {
        item:"Rice and Ofada Sauce",
        price:"₦3000"
     },
     {
        item:"Rice and Ofada Sauce",
        price:"₦3000"
     },
     {
        item:"Rice and Ofada Sauce",
        price:"₦3000"
     },
     {
        item:"Rice and Ofada Sauce",
        price:"₦3000"
     },
     {
        item:"Rice and Ofada Sauce",
        price:"₦3000"
     },


    ]


    const Sides: MenuProps[] = [
        {
           item:"French Fries",
           price:"₦1000"
        },
        {
            item:"French Fries",
            price:"₦1000"
         },
         {
            item:"French Fries",
            price:"₦1000"
         },
         {
             item:"French Fries",
             price:"₦1000"
          },
          {
            item:"French Fries",
            price:"₦1000"
         },
         {
             item:"French Fries",
             price:"₦1000"
          },
          {
            item:"French Fries",
            price:"₦1000"
         },
         {
             item:"French Fries",
             price:"₦1000"
          },
          {
            item:"French Fries",
            price:"₦1000"
         },
         {
             item:"French Fries",
             price:"₦1000"
          },
          {
            item:"French Fries",
            price:"₦1000"
         },
         {
             item:"French Fries",
             price:"₦1000"
          },
   
   
       ]


    const Chicken: MenuProps[] = [
    {
        item:"Chicken Sharwama",
        price:"2500"
    },
    {
        item:"Chicken Sharwama",
        price:"2500"
    },
    {
        item:"Chicken Sharwama",
        price:"2500"
    },
    {
        item:"Chicken Sharwama",
        price:"2500"
    },
    {
        item:"Chicken Sharwama",
        price:"2500"
    },
    {
        item:"Chicken Sharwama",
        price:"2500"
    },
    ]

    const Snail:MenuProps[] = [
        {
            item:"Peppered Snails",
            price:"₦5000"
        },
        {
            item:"Peppered Snails",
            price:"₦5000"
        },
        {
            item:"Peppered Snails",
            price:"₦5000"
        },
        {
            item:"Peppered Snails",
            price:"₦5000"
        },
        {
            item:"Peppered Snails",
            price:"₦5000"
        },
        {
            item:"Peppered Snails",
            price:"₦5000"
        },
        {
            item:"Peppered Snails",
            price:"₦5000"
        },
        {
            item:"Peppered Snails",
            price:"₦5000"
        },
        {
            item:"Peppered Snails",
            price:"₦5000"
        },
        {
            item:"Peppered Snails",
            price:"₦5000"
        },
    ]
  return (
    <main className={styles.headerMenu}>  
    <div>
        <div className={styles.headerTop} >
        <h1>Menu</h1>
        </div>
        <div className={styles.list}>
            <p>Drinks</p>
            <p>Mains</p>
            <p>Sides</p>
            <p>Wraps</p>
            <p>Pepper Soup</p>
            <p>Finger Foods</p>
        </div>
    </div>

    <div  className={`${styles.body} ${styles.body1}`}>
    <div className={styles.menu__body} >
        <h1>Drinks</h1>
    </div> 

    <div className={styles.menu__content}>
    
    {
     Products.map((item, index) => (
    <div key={index} className={styles.menu__text}>
    <p>{item.item}</p>
    <p>{item.price}</p>
     </div>
     ))
    }

    </div>
    </div>



    <div className={styles.body} >
    <div className={styles.menu__body} >
        <h1>Mains</h1>
    </div> 

    <div className={styles.menu__content}>
    
    {
     Main.map((item, index) => (
    <div key={index} className={styles.menu__text}>
    <p>{item.item}</p>
    <p>{item.price}</p>
     </div>
     ))
    }

    </div>
    </div>


    <div  className={`${styles.body} ${styles.body1}`}>
    <div className={styles.menu__body} >
        <h1>Sides</h1>
    </div> 

    <div className={styles.menu__content}>
    
    {
     Sides.map((item, index) => (
    <div key={index} className={styles.menu__text}>
    <p>{item.item}</p>
    <p>{item.price}</p>
     </div>
     ))
    }

    </div>
    </div>



    <div  className={styles.body}>
    <div className={styles.menu__body} >
        <h1>Wraps</h1>
    </div> 

    <div className={styles.menu__content}>
    
    {
     Chicken.map((item, index) => (
    <div key={index} className={styles.menu__text}>
    <p>{item.item}</p>
    <p>{item.price}</p>
     </div>
     ))
    }

    </div>
    </div>



    <div  className={`${styles.body} ${styles.body1}`}>
    <div className={styles.menu__body} >
        <h1>Pepper Soup</h1>
    </div> 

    <div className={styles.menu__content}>
    
    {
     Chicken.map((item, index) => (
    <div key={index} className={styles.menu__text}>
    <p>{item.item}</p>
    <p>{item.price}</p>
     </div>
     ))
    }

    </div>
    </div>


    <div  className={styles.body}>
    <div className={styles.menu__body} >
        <h1>Finger Foods</h1>
    </div> 

    <div className={styles.menu__content}>
    
    {
     Snail.map((item, index) => (
    <div key={index} className={styles.menu__text}>
    <p>{item.item}</p>
    <p>{item.price}</p>
     </div>
     ))
    }

    </div>
    </div>

    </main>

  )
}