import React, { Component } from 'react'
import Book from './Book.gif'
const Spinner = (props) => {
  
    return (
      <div className='text-center'>
        <img src={Book} alt="loading" />
      </div>
    )
  }


export default Spinner