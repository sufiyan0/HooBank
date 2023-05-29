import { features } from '../constents'
import React from 'react'
import styles, { layout } from '../style'
import Button from './Button'

const FeaturesCart = () => (
  <div> </div>
)

const Business = () =>  (

   <section id='features' className={`${layout.section}`}>
    <div className={`${layout.sectionInfo}`}>
      <h2 className={`${styles.heading2}`}>
        You do the business, <br className="sm:block hidden" /> we’ll handle
        the money.
      </h2>
      <p className={`${styles.paragraph} max-w-[487px] mt-5`}>
        With the right credit card, you can improve your financial life by
        building credit, earning rewards and saving money. But with hundreds
        of credit cards on the market.
      </p>

      <Button  />

    </div>

    <div className={`${layout.sectionImg} flex-col`}>
    {
      features.map((feature,index) => (

        <FeaturesCart  key={feature.id} {...feature} index={`${index}`} /> 

      ))

      
    }

    </div>


   </section>
  )


export default Business
