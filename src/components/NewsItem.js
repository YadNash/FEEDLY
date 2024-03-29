import React, { Component } from 'react'

const NewsItem = (props) => {


  
    let { title, description, imageUrl, newsUrl, author, date , source } = props;

    return (
      <div className='my-3'>
        <div className="card" style={{ width: "18rem" }}>
          <img src={!imageUrl ? "https://img.etimg.com/thumb/msid-99767697,width-1070,height-580,imgsize-91161,overlay-etmarkets/photo.jpg" : imageUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}<span class="position-absolute top-0  translate-middle badge rounded-pill bg-danger" style={{left : '90%' , zIndex : 1}}>{source}
            </span></h5>
            <p className="card-text">{description}...</p>
            <p className="card-text"><small className="text-muted">By {!author ? "Unknown" : author} on {new Date(date).toGMTString()}</small></p>
            <a href={newsUrl} target="_blank" className="btn btn-dark">Read More</a>
          </div>
        </div>
      </div>
    )
  }


export default NewsItem