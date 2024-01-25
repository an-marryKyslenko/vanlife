import React, { Suspense } from 'react'
import { Await, defer, useLoaderData } from 'react-router-dom'
import { getUserDetails } from '../../api'
import image from '../../images/grafic.png'

export async function loader(){
  return defer({details: await getUserDetails()})
}
const Income = () => {
  const detailsPromise = useLoaderData()

  return (
	 <section className='container'>
    <h2 className='title'>Income</h2>
    <Suspense fallback={<h2 className='tilte'>Loading ...</h2>}>
      <Await resolve={detailsPromise.details}>
        {(details)=>{
          const {transactionsData} = details
          const sum = transactionsData.reduce((ac,cr)=> ac + cr.amount,0)
          
          return (
            <div className="income">
              <p className="date-last">Last <span>30 days</span></p>
              <div className="price-title">${sum}</div>
              <div className="income-img">
                <img src={image} alt="income" />
              </div>
              <div className="transactions">
                <h4 className="subtitle">Your transactions <span>({transactionsData.length})</span></h4>
                <p className="date-last">Last <span>30 days</span></p>
                {transactionsData.map(item=>{
                  const {amount,date,id} = item
                  return (
                    <div key={id} className="income-item">
                      <div className="item-price">${amount}</div>
                      <div className="item-date">{date}</div>
                    </div>
                  )
                })}
              </div>
            </div>
          )
        }}
      </Await>
    </Suspense>
   </section>
  )
}

export default Income