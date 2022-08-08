import React, { useContext, useState } from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend, Title } from 'chart.js'
import { Pie } from 'react-chartjs-2'

// Component & asset
import NavUser from '../components/navbar/NavUser'
import AddNote from '../components/modal/AddNote'
import MoneyIncome from '../assets/icon/cash-check.png'
import MoneyExpanses from '../assets/icon/cash-remove.png'
import MoneyBalance from '../assets/icon/money-bill-wave.png'
import TabsMonth from '../components/Tabs/TabsMonth'
import Family from '../assets/icon/Icon-category-1.png'
import Food from '../assets/icon/Icon-category-2.png'
import Salary from '../assets/icon/Icon-category-3.png'
import CardDashboard from '../components/card/CardDashboard'

// Data dummy
import { ListTransaction } from '../data/ListTransaction'
import { UserContext } from '../context/UserContext'

export const dataPie = {
  // labels: ['Family', 'Salary', 'Food'],
  datasets: [
    {
      // label: ['Family', 'Salary', 'Food'],
      data: [25, 60, 15],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
      ],
      borderWidth: 1,
    },
  ],
}

ChartJS.register(ArcElement, Tooltip, Legend, Title)


function Dashboard() {
  const [state] = useContext(UserContext)
  console.log(state)

  let resultBalance = state.user.balance
  
  // show add transaction
  const [show, setshow] = useState(false)
  const handleShowAdd =  () => setshow(true)

  const handleAdd = () => {
    handleShowAdd()
  }
  const closeShowAdd = () => setshow(false)

  // Get data dummy
  let data = ListTransaction
  data = JSON.parse(JSON.stringify(data))
  console.log(data)

  let date = data.map(item => item.date)
  console.log(date)


  // Sum Income & Expanses
  let resultIncome = data.filter(item => item.type === "INCOME").reduce((total, currentValue) => total = total + currentValue.nominal, 0)
  let resultExpanses = data.filter(item => item.type === "EXPANSES").reduce((total, currentValue) => total = total + currentValue.nominal, 0)

  console.log(resultIncome)
  console.log(resultExpanses)

  // filter by type
  // const [selects, setSelects] = useState()

  // const getSelect = selects ? selects : "All"
  // console.log(getSelect)
    
  return (
    <div className='bg-light'>
      <NavUser />
      <div className='container dashboard mt-2'>
        <div className='d-flex justify-content-center'>
        </div>
        <div className='row mt-2'>
          <div className='col-3 mt-4'>
            <div className='row px-3 mt-5'>
              <CardDashboard img={MoneyIncome} title="Income" result={resultIncome}/>
              <CardDashboard img={MoneyExpanses} title="Expanses" result={resultExpanses}/>
              <CardDashboard img={MoneyBalance} title="Balance" result={resultBalance}/>
            </div>
          </div>
          <div className='col-5' style={{height: '500px'}}>
            <TabsMonth />
          </div>
          <div className='col-4 mt-4'>
            <div className='bg-white rounded-4 shadow mt-5'>
              <div className='fw-bold text-center py-2 fs-5' style={{ color: '#22577A' }}>Summary Expense</div>
              <hr className='m-0 p-0'/>
              <div className='px-3' style={{height: '460px'}}>
                <div className='d-flex justify-content-center align-items-center mb-5'>
                  <div>
                    <Pie
                      width={140}
                      height={140}
                      data={dataPie}
                      options={{
                        responsive: true,
                        plugins:{
                          title: {
                            text: 'Chart Summary',
                            display: false
                          },
                        }
                      }}
                    />
                  </div>
                  <div className='ms-3 fs-2 fw-bold text-danger'>
                    4,662,000
                  </div>
                </div>
                <div className='my-2 '>
                  <div className='row '>
                    <div className='col-2 p-0 m-0 d-flex justify-content-center align-items-center'>
                        <img src={Food} alt="Food" width={36} height={36} />
                      </div>
                      <div className='col-6 p-0 m-0 d-flex align-items-center'>
                        <div className='fw-bold'>Food</div>
                      </div>
                      <div className='col-4 d-flex align-items-center justify-content-end m-0 p-0 pe-2'>
                        <div className='fw-bold text-danger'>Rp. 60.000</div>
                      </div>
                      <hr className='mt-2'/>  
                  </div>
                  <div className='row'>
                    <div className='col-2 p-0 m-0 d-flex justify-content-center align-items-center'>
                        <img src={Family} alt="Family" width={36} height={36} />
                      </div>
                      <div className='col-6 p-0 m-0 d-flex align-items-center'>
                        <div className='fw-bold'>Family</div>
                      </div>
                      <div className='col-4 d-flex align-items-center justify-content-end m-0 p-0 pe-2'>
                        <div className='fw-bold text-danger'>Rp. 278.000</div>
                      </div>
                      <hr className='mt-2'/>  
                  </div>
                  <div className='row'>
                    <div className='col-2 p-0 m-0 d-flex justify-content-center align-items-center'>
                        <img src={Salary} alt="Salary" width={36} height={36} />
                      </div>
                      <div className='col-6 p-0 m-0 d-flex align-items-center'>
                        <div className='fw-bold'>Salary</div>
                      </div>
                      <div className='col-4 d-flex align-items-center justify-content-end m-0 p-0 pe-2'>
                        <div className='fw-bold text-success'>Rp. 5.000.000</div>
                      </div>
                      <hr className='mt-2'/>  
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
       
      </div>
      <div className='position-relative'>
        <div className='position-absolute bottom-0 end-0 me-2 mb-2'>
          <button className='btn btn-secondary rounded-circle add-txt p-0 m-0' onClick={handleAdd}>+</button>
        </div>
      </div>
      <AddNote show={show} handleClose={closeShowAdd} />
    </div>
  )
}

export default Dashboard


/* <div className='mt-5 bg-white p-3 rounded-4 shadow'>
          <div className='d-flex'>
            <div className='me-2'>
              <div htmlFor="">Start Date</div>
              <input type="date" className='p-1 form-control' defaultValue={fromDate} onChange={e => setFromDate(e.target.value)}/>
            </div>
            <div className='me-2'>
              <div htmlFor="">End Date</div>
              <input type="date" className='p-1 form-control' />
            </div>
            <div>
              <div htmlFor="type">Type</div>
              <select id="type" className='p-1 form-control pe-5' value={selects} onChange={(e) => setSelects(e.target.value)}>
                <option>All</option>
                <option>Income</option>                
                <option>Expanses</option>                
              </select> 
            </div>
          </div>
          <div className='mt-3'>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th width={25}>No</th>
                  <th>Description</th>
                  <th>Category</th>
                  <th>Date</th>
                  <th>Nominal</th>
                </tr>
              </thead>
              <tbody>
                {getSelect === "All" ? (
                  <>
                  {data.map((item, index) => (
                      <tr key={index} className={`bg-${item.type}`}>
                        <td>{item.id}</td>
                        <td>{item.description}</td>
                        <td>{item.category.name}</td>
                        <td>{item.date}</td>
                        <td>{item.nominal}</td>
                      </tr>
                    ))
                  }
                  </> 
                ) : (
                  getSelect === "Income" ? (
                    <>
                    {data.filter(item => item.type === "INCOME").map((item, index) => (
                      <tr key={index} className={`bg-${item.type}`}>
                        <td>{item.id}</td>
                        <td>{item.description}</td>
                        <td>{item.category.name}</td>
                        <td>{item.date}</td>
                        <td>{item.nominal}</td>
                      </tr>
                    ))}
                    </>
                  ) : (
                    getSelect === "Expanses" ? (
                      <>
                      {data.filter(item => item.type === "EXPANSES").map((item, index) => (
                        <tr key={index} className={`bg-${item.type}`}>
                          <td>{item.id}</td>
                          <td>{item.description}</td>
                          <td>{item.category.name}</td>
                          <td>{item.date}</td>
                          <td>{item.nominal}</td>
                        </tr>
                      ))}
                      </>
                    ) : ("")
                  )
                )}

              </tbody>
            </Table>
          </div>
        </div> */