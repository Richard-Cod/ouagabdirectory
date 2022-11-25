import { Category } from "logic/models/Category";
import { Society } from "logic/models/Post";


import src from 'app/image1.jpg'
import src1 from 'app/image2.jpg'
import src2 from 'app/image3.jpg'
import src3 from 'app/image4.jpg'

const categories : Category[] = [
    {
      id:1,
      title : "Nourriture",
      image : "frfrf"
    },{
      id:2,
      title : "Mode et création",
      image : "frfrf"
    },{
      id:3,
      title : "Menuiserie",
      image : "frfrf"
    }
]



const societies : Society[] = [
    {
      id:1,
      name : "Ima'a , Ouagadougou",
      bio : "Hand made ✨ Bags and accessories 🌹 || Wax_Bogolan_kôkô Donda_Faso Danfani || Shipping worldwide 🌍 From Burkina 🇧🇫 || 📞 +22676274313",
      price_range : "2000 - 95000",
      category : categories[0],
      images:[src,src1,src2,src3]
    },
    {
      id:2,
      name : "name",
      bio : "bio",
      price_range : "price_range",
      category : categories[0],
      images:[]
    },
    {
      id:3,
      name : "name",
      bio : "bio",
      price_range : "price_range",
      category : categories[0],
      images:[]
    }
  ]

export const InMemoryDatas = {
    societies,
    categories
}