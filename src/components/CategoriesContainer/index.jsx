import React from 'react'
import { useContext } from 'react'
import { Context } from '../../context'
import CategoryCard from '../CategoryCard';
import s from './index.module.css'

export default function CategoriesContainer() {

const { categories } = useContext(Context);

  return (
    <div className={s.categories_container}>
    {/* пока категории подгрузятся выводить соообщение */}
    {
        categories.length === 0
        ?   <p>Categories are loading...</p>
        :   <div>
            {
                categories.map(el => <CategoryCard key={el} category={el} />)
            }
            </div>
    }
    </div>
   
  )
}
