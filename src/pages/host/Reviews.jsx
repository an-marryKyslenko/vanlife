import React, { Suspense } from 'react'
import { useLoaderData,defer, Await} from 'react-router-dom'
import { getUserDetails } from '../../api'
import {BsFillStarFill} from 'react-icons/bs'
import RatingLine from '../../conponents/RatingLine'

export async function loader(){
  return defer({details: await getUserDetails()})
}

const Reviews = () => {
 const reviewsPromise = useLoaderData()

 
  return (
	 <section className='reviews container'>
    <h2 className="title">Your reviews</h2>
    <p className="date-last">last <span>30 days</span></p>
    <Suspense fallback={<h2 className='title'>Loading ...</h2>}>
      <Await resolve={reviewsPromise.details}>
        {details=>{
          const {reviewsData} = details
          const avarage = reviewsData.reduce((ac,cr)=>ac + cr.rating,0) / reviewsData.length
          
          return (
            <>
              <div className="rating"><span className='avarage'>{avarage}</span> <span className='star'><BsFillStarFill/></span> overall rating</div>
              <div className="rating-lines">
                <RatingLine stars='5' arr={reviewsData}/>
                <RatingLine stars='4' arr={reviewsData}/>
                <RatingLine stars='3' arr={reviewsData}/>
                <RatingLine stars='2' arr={reviewsData}/>
                <RatingLine stars='1' arr={reviewsData}/>
              </div>
              <div className="comments">
                <h3 className="subtitle">Reviews ({reviewsData.length})</h3>
                {reviewsData.map(item=>{
                  const {name,date,text,id,rating} = item
                  return (
                    <div key={id} className="comment">
                      <div className="comment-stars">
                        <span className='star'><BsFillStarFill/></span>
                      </div>
                      <div className="comment-auth">{name} <span>{date}</span></div>
                      <p>{text}</p>
                    </div>
                  )
                })}
              </div>
            </>
          )
        }}
      </Await>
    </Suspense>
   </section>
  )
}

export default Reviews