
// import ChopsTemp from '../assets/placeholder.jpg'
import Template from '../assets/placeholder3.jpg'   
import Platter from '../assets/plat.jpg'
import Chicken from '../assets/chicken.jpg'
import Snail from '../assets/snail2.jpg'
import Turkey from '../assets/chicken2.jpg'
import Gizzard from '../assets/gizzard.jpg'
import { useState } from 'react'

let Products = [
    
    {
        id: 1,
        category: 'Pack',
        price: 1500,
        contents : '5 Springrolls \n5 Samosas \n7 Puff-Puff \n1 Beef',
        image: Template,
        title: 'Package 1'
    },

    {
        id: 2,
        category: 'Pack',
        price: 2500,
        contents : '4 Springrolls \n7 Samosas \n7 Puff-Puff \n3 Beef',
        image: Template,
        title: 'Package 2'
    },

    {
        id: 3,
        category: 'Pack',
        price: 3500,
        contents : '5 Springrolls \n5 Samosas \n7 Puff-Puff \n1 Beef',
        image: Template,
        title: 'Package 3'
    },

    {
        id: 4,
        category: 'Pack',
        price: 5000,
        contents : '5 Springrolls \n5 Samosas \n7 Puff-Puff \n1 Beef',
        image: Template,
        title: 'Package 4'
    },

    {
        id: 5,
        category: 'Pack',
        price: 7000,
        contents : '5 Springrolls \n5 Samosas \n7 Puff-Puffs \n1 Beef',
        image: Template,
        title: 'Package 5'
    },

    {
        id: 6,
        category: 'Platter',
        price: 16000,
        contents : '20 Springrolls \n20 Samosas \n30 Puff-Puffs \n10 Beefs',
        image: Platter,
        title: 'Platter 1'
    },

    {
        id: 7,
        category: 'Platter',
        price: 18000,
        contents : '20 Springrolls \n20 Samosas \n30 Puff-Puffs \n10 Beefs \n5 Chickens',
        image: Platter,
        title: 'Platter 2'
    },

    {
        id: 8,
        category: 'Platter',
        price: 20000,
        contents : '20 Springrolls \n20 Samosas \n30 Puff-Puffs \n10 Beefs \n5 Turkeys',
        image: Platter,
        title: 'Platter 3'
    },

    {
        id: 9,
        category: 'Platter',
        price: 25000,
        contents : '20 Springrolls \n20 Samosas \n30 Puff-Puffs \n10 Beefs \n5 Chickens \n5 Turkeys \n7 Snails \n10 Gizzards',
        image : Platter,
        title: 'Platter 4'
    },

    {
        id: 10,
        category: 'Protein',
        type: 'Kebabs',
        price: 1000,
        contents : 'This is a pack of 6 pieces of meat pie',
        image: Gizzard,
        title: 'Beef'
    },

    {
        id: 11,
        category: 'Protein',
        type: 'Kebabs',
        price: 2500,
        contents : 'This is a pack of 6 pieces of meat pie',
       image: Gizzard,
        title: 'Gizzard'
    },

    {
        id: 12,
        category: 'Protein',
        type: 'Kebabs',
        price: 3000,
        contents : 'This is a pack of 6 pieces of meat pie',
       image: Snail,
        title: 'Snail'
    },

    {
        id: 13,
        category: 'Protein',
        type: 'Chicken',
        price: 3000,
        contents : 'This is a pack of 6 pieces of meat pie',
       image: Snail,
        title: 'Chicken'
    },

    {
        id: 14,
        category: 'Protein',
        type: 'Turkey',
        price: 35000,
        contents : 'This is a pack of 6 pieces of meat pie',
       image: Snail,
        title: 'Turkey'
    }
]


export default Products