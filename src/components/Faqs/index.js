import './index.css'

import FaqItem from '../FaqItem'

const Faqs = props => {
  const {faqsList} = props

  return (
    <div className="bg-container">
      <div className="card">
        <h1 className="heading">FAQs</h1>
        <ul className="ul">
          {faqsList.map(each => (
            <FaqItem key={each.id} faqsDetails={each} />
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Faqs
