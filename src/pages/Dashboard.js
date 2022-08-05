import React, { useState } from 'react'
import {Table} from 'react-bootstrap'
import rupiahFormat from 'rupiah-format'

// Component & asset
import NavGuest from '../components/navbar/NavGuest'
import MoneyCheck from '../assets/icon/cash-check.png'
import MoneyRemove from '../assets/icon/cash-remove.png'
import MoneyIncome from '../assets/icon/money-bill-wave.png'
import AddNote from '../components/modal/AddNote'

// Data dummy
import { ListTransaction } from '../data/ListTransaction'

function Dashboard() {
  const [show, setshow] = useState(false)
  const handleShowAdd =  () => setshow(true)

  const handleAdd = () => {
    handleShowAdd()
  }
  const closeShowAdd = () => setshow(false)

  let data = ListTransaction
  console.log(data)

  return (
    <div className='bg-light'>
      <NavGuest />
      <div className='container dashboard mt-5'>
        <div className='row d-flex justify-content-center'>
          <div className='col-1 col-lg-3 bg-white p-3 text-center rounded-4 shadow mx-4'>
            Pemasukan bulan ini 
            <div className='money d-flex mt-3 justify-content-center'>
              <img src={MoneyCheck} alt="Money Check" width={55}/>
              <div className='align-middle py-2 fs-4 fw-bold ms-2'>Rp. 4.000.000,-</div>
            </div>
          </div>
          <div className='col-1 col-lg-3 bg-white p-3 text-center rounded-4 shadow mx-4'>
            Pengeluaran bulan ini 
            <div className='money d-flex mt-3 justify-content-center'>
              <img src={MoneyRemove} alt="Money Check" width={55}/>
              <div className='align-middle py-2 fs-4 fw-bold ms-2'>Rp. 4.000.000,-</div>
            </div>
          </div>
          <div className='col-1 col-lg-3 bg-white p-3 text-center rounded-4 shadow mx-4'>
            Pendapatan bulan ini 
            <div className='money d-flex mt-3 justify-content-center'>
              <img src={MoneyIncome} alt="Money Check" width={55}/>
              <div className='align-middle py-2 fs-4 fw-bold ms-2'>{rupiahFormat.convert(data[0].user.balance)}</div>
            </div>
          </div>
        </div>
        <div className='mt-5 bg-white p-3 rounded-4 shadow'>
          <div className='d-flex'>
            <div className='me-2'>
              <div htmlFor="">Start Date</div>
              <input type="date" className='p-1 form-control'/>
            </div>
            <div className='me-2'>
              <div htmlFor="">End Date</div>
              <input type="date" className='p-1 form-control' />
            </div>
            <div>
              <div htmlFor="">Type</div>
              <select name="" id="" className='p-1 form-control'>
                <option value="" selected hidden> Select type </option>
                <option value="">Pemasukan</option>
                <option value="">pengeluaran</option>
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
                <tr>
                  <td>1</td>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>Date</td>
                  <td>@mdo</td>
                </tr>
              </tbody>
            </Table>
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