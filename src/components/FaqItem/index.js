import './index.css'

import {Component} from 'react'

class FaqItem extends Component {
  state = {clicked: false}

  clickButton = () => {
    this.setState(prev => ({clicked: !prev.clicked}))
  }

  render() {
    const {clicked} = this.state
    const {faqsDetails} = this.props
    const {questionText, answerText} = faqsDetails
    return (
      <div>
        <li className="list">
          <div className="faq-plus">
            <h1 className="que">{questionText}</h1>
            <button type="button" className="btn" onClick={this.clickButton}>
              {clicked === false ? (
                <img
                  src="https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png "
                  alt="plus"
                />
              ) : (
                <img
                  src="https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png  "
                  alt="minus"
                />
              )}
            </button>
          </div>
          {clicked === true ? (
            <div>
              <p className="ans">{answerText}</p>
            </div>
          ) : null}
        </li>
      </div>
    )
  }
}

export default FaqItem
