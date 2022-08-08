import React from 'react'
import { Container } from 'react-bootstrap'

// Component & Asset
import NavGuest from '../components/navbar/NavGuest'
import CardJumbotron from '../components/card/CardJumbotron'
import { ListCardJumbotron } from '../data/ListCardJumbotron'
import Example1 from '../assets/icon/example-1.png'
import Example2 from '../assets/icon/example-2.png'
import CardReview from '../components/card/CardReview'
import { ListCardReview } from '../data/ListCardReview'
import Footer from '../components/footer/Footer'

function LandingPage() {
  return (
    <div>
      <NavGuest />
      <Container>
        <div className='jumbotron mt-5'>
          <h1 className='mb-5 text-center fw-normal' style={{ fontSize: '68px' }}>
            <span style={{ color: '#57CC99' }}>Simple way</span> <br /> 
            <span style={{ color: '#22577A' }}>to manage</span> <span style={{ color: '#57CC99' }}>personal finance</span>
          </h1>
          <div className='d-flex justify-content-between align-items-center h-50'>
            {ListCardJumbotron.map((item) => (
              <>
                <CardJumbotron item={item}/>
              </>
            ))}
          </div>
        </div>

        <div className='jumbotron-2 mt-4'>
          <div className='row d-flex justify-content-start mb-4'>
            <div className='col-4'>
              <img src={Example1} alt="Example 1" className='shadow rounded'  />
            </div>
            <div className='col-6 d-flex align-items-center'>
              <div>
                <h3 className='fw-light'><span style={{ color: '#57CC99' }}>Simple</span> <span style={{ color: '#22577A' }}>money tracker</span></h3>
                <p>It takes seconds to record daily transactions. Put them into clear and visualized categories such as Expense: Food, Shopping or Income: Salary, Gift</p>
              </div>
            </div>
          </div>
          <div className='row d-flex justify-content-end'>
            <div className='col-6 d-flex align-items-center text-end'>
              <div>
                <h3 className='fw-light'><span style={{ color: '#22577A' }}>Painless</span> <span style={{ color: '#57CC99' }}>budgeting</span></h3>
                <p>One report to give a clear view on your spending patterns. Understand where your money comes and goes with easy-to-read graphs.</p>
              </div>
            </div>
            <div className='col-4'>
              <img src={Example2} alt="Example 1" className='shadow rounded'  />
            </div>
          </div>
        </div>

        <div className='jumbotron-3 mt-4'>
          <h1 className='text-center fw-normal' style={{color: '#22577A', fontSize: '48px'}}>See what others have to say</h1>
          <div className='mt-5 d-flex justify-content-between'>
            {ListCardReview.map((item) => (
              <>
                <CardReview item={item}/>
              </>
            ))}
          </div>
        </div>
      </Container>
      <Footer />
    </div>
  )
}

export default LandingPage



