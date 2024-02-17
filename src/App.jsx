import React, { useState } from 'react'
import './App.css'
import reviews from '../src/data'
import { FaChevronLeft, FaQuoteRight, FaChevronRight, FaRandom } from 'react-icons/fa';

const App = () => {


  const [index, setIndex] = useState(0);
  const { name, job, image, text } = reviews[index];
  // console.log(reviews)

  const nextPerson = () => {
    setIndex((currentIndex) => {
      // return index == reviews.length - 1 ? 0 : currentIndex + 1;
      return (currentIndex + 1) % reviews.length;
    });
  }

  const prevPerson = () => {
    setIndex(currentIndex => {
      // return index === 0 ? reviews.length - 1 : currentIndex - 1;
      console.log(currentIndex - 1 + reviews.length);
      console.log((currentIndex - 1 + reviews.length) % reviews.length);
      return (currentIndex - 1 + reviews.length) % reviews.length;
    });
  }

  const randomPerson = () => {
    setIndex(Math.floor(Math.random() * reviews.length) % reviews.length);
  }

  return (
    <main className='main'>
      <article className="review">
        <div className='img-container'>
          <img src={image} alt={name} className='person-img' />
          <span className='quote-icon'>
            <FaQuoteRight />
          </span>
        </div>
        <h4 className='author'>{name}</h4>
        <p className='job'>{job}</p>
        <p className='info'>{text}</p>
        <div className="btn-container">
          <button className='prev-btn' onClick={prevPerson}>
            <FaChevronLeft />
          </button>
          <button className='next-btn' onClick={nextPerson}>
            <FaChevronRight />
          </button>
        </div>
        <button className='btn btn-hipster' onClick={randomPerson}>
          <FaRandom /> Pick up one
        </button>
      </article>
    </main>
  )
}

export default App
