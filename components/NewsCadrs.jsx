import React from 'react'
import Card from './Card'

const NewsCadrs = ({articles, activeArticle}) => {
  return (
    <section className='max-w-[1400px] m-auto flex flex-row flex-wrap justify-evenly items-start content-start'>
        {articles.length > 1 ? articles.map((article, key)=>(
            <>
            <Card  article={article} key={key} activeArticle={activeArticle} i={key} />
            </>
        )) : ""}
    </section>
  )
}

export default NewsCadrs