import Family from '../assets/icon/Icon-category-1.png'
import Food from '../assets/icon/Icon-category-2.png'
import Salary from '../assets/icon/Icon-category-3.png'

export const ListTransaction = [
  {
    id: 1,
    userId: 2,
    user: {
      balance: 20000,
    },
    date: "08/02/2022",
    type: "INCOME",
    nominal: 5000000,
    categoryId: 1,
    category:{
      id: 2,
      name: "Salary",
      img: Salary  
    },
    description: "Gaji bulan sekarang",
    createdAt: "20-20-2020"
  },
  {
    id: 2,
    userId: 2,
    user: {
      balance: 20000,
    },
    date: "08/02/2022",
    type: "EXPANSES",
    nominal: 20000,
    categoryId: 2,
    category:{
      id: 1,
      name: "Food",
      img: Food  
    },
    description: "Membeli makanan di RM Padang",
    createdAt: "20-07-2020"
  },
  {
    id: 3,
    userId: 2,
    user: {
      balance: 20000,
    },
    date: "07/08/2022",
    type: "EXPANSES",
    nominal: 20000,
    categoryId: 2,
    category:{
      id: 1,
      name: "Food",
      img: Food  
    },
    description: "Membeli makanan di RM Padang",
    createdAt: "20-07-2020"
  },
  {
    id: 4,
    userId: 2,
    user: {
      balance: 20000,
    },
    date: "08/06/2022",
    type: "EXPANSES",
    nominal: 265000,
    categoryId: 1,
    category:{
      id: 3,
      name: "Family",
      img: Family
    },
    description: "Jalan-jalan malam minggu",
    createdAt: "20-20-2020"
  },
]