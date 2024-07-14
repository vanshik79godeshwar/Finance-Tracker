import React from 'react'
import './Article.css'

export default function Article({article}) {
  return (
    <div className="Article-card border-violet-800">
      <a href={article.urlToImage} className='inline-block' target='_blank'><img src={article.urlToImage} alt={article.title} className='Article-image'/></a>
      <div className="card-body flex flex-col p-5 justify-between">
        <h5 className=" inline-block my-2">{article.title}</h5>
        <p className="inline-block my-2 text-gray-500">{article.description}</p>
        <a href={article.url} className=" my-2 px-7 border inline-block w-36 py-3 rounded-md hover:bg-circular-gradient from-orange-700 to-orange-600" target="_blank" rel="noopener noreferrer">Read More</a>
        <p className="my-2"><small className="text-muted inline-block">By <strong className='text-C'>{article.author || 'Unknown'}</strong> on {new Date(article.publishedAt).toLocaleDateString()}</small></p>
      </div>
    </div>
  )
}
