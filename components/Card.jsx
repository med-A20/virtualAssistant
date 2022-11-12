import React, { useState, useEffect, createRef } from "react";
import {HiSpeakerWave} from 'react-icons/hi2'
/*
    author
    : 
    "Simone Pathe"
    content
    : 
    "The US will have a record number of female governors in 2023. Still, the record-setting number 12 will represent a small fraction of the top executives across the 50 states.\r\nThe previous record of n… [+2371 chars]"
    description
    : 
    "The US will have a record number of female governors in 2023. Still, the record-setting number -- 12 -- will represent a small fraction of the top executives across the 50 states."
    publishedAt
    : 
    "2022-11-10T02:33:59Z"
    source
    : 
    {id: 'cnn', name: 'CNN'}
    title
    : 
    "Female governors will break a record in 2023"
    url
    : 
    "http://us.cnn.com/2022/11/09/politics/female-governors-record/index.html"
    urlToImage
    : 
    "https://media.cnn.com/api/v1/images/stellar/prod/221109174614-sanders-healey-hochul-split.jpg?c=16x9&q=w_800,c_fill"
    */
const Card = ({ article, activeArticle, i }) => {
    const [more, setMore] = useState(false)
    const [elRefs, setElRefs] = useState([]);
    const scrollToRef = (ref) => window.scroll(0, ref.current.offsetTop - 50);
  
    useEffect(() => {
      window.scroll(0, 0);
  
      setElRefs((refs) => Array(20).fill().map((_, j) => refs[j] || createRef()));
    }, []);
  
    useEffect(() => {
      if (i === activeArticle && elRefs[activeArticle]) {
        scrollToRef(elRefs[activeArticle]);
      }
    }, [i, activeArticle, elRefs]);
  return (
    <article ref={elRefs[i]} className={`relative max-w-[350px] mx-auto min-w-0 break-words  w-full mb-6 shadow-lg rounded-md mt-16 ${activeArticle == i ? "scale-[1.07]" : ""}`}>
      {activeArticle === i ? 
        <HiSpeakerWave 
        className="text-xl text-green-500"
        /> : ""  
    }
      <div className={`card w-full`}>
        <div className="w-full mx-auto -mt-6">
          <a href={article.url} blur-shadow-image="true">
            <img
              className="w-auto rounded-lg shadow-xl shadow-cyan-50 -mt-7"
              src={article.urlToImage ? article.urlToImage: "../assets/news.webp"}
              alt="tailwind-card-image"
            />
          </a>
        </div>
        <div className={`mt-7 w-full`}>
          <a href={article.url ? article.url : "#"}>
            <h4 className="font-semibold">{article.title ? article.title  : "Unkown"}</h4>
          </a>
          <p className="opcacity-60 mb-4">
            {
                article.description ? (more ? article.description.slice(0, 120)+ `...` : article.description ) : "Nothing About This Article"
            }
          </p>
          <button className="button button-cyan" data-ripple-light="true" onClick={()=>{
            setMore(prev => !prev)
          }}>
            Read More
          </button>
        </div>
      </div>
    </article>
  );
};

export default Card;
