import React from 'react'
import { Modal } from 'react-bootstrap'

function AddNote({ show, handleClose }) {
  return (
    <div>
      <Modal className="modal-auth" centered show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            <div className="fs-2">Add Note</div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* {errorMessage && errorMessage} */}
          <div>
            <form 
              // onSubmit={(e) => handleSubmit.mutate(e)}
            >
              <div className="form text-center">
                <div className="text-start">Nominal</div>
                <input 
                  type="number" 
                  placeholder="Nominal" 
                  name="nominal" 
                  className="px-3 py-2 col-12" 
                  // value={email} 
                  // onChange={handleChange}
                />
                <div className="text-start mt-3">Tanggal</div>
                <input 
                  type="date" 
                  placeholder="Date" 
                  name="nominal" 
                  className="px-3 py-2 col-12" 
                  // value={email} 
                  // onChange={handleChange}
                />
                <div className="text-start mt-3">Category</div>
                <select name="category" id="" className='form-select py-2 px-3'>
                  <option value="" hidden>Select category</option>
                  <option value="">Makanan</option>
                  <option value="">Lain-lain</option>
                </select>
                <div className="text-start mt-3">Type</div>
                <select name="type" id="" className='form-select py-2 px-3'>
                  <option value="" hidden>Select type</option>
                  <option value="">Pemasukan</option>
                  <option value="">Pengeluaran</option>
                </select>
                <div className="text-start mt-3">Description</div>
                <input 
                  type="text" 
                  placeholder="Description" 
                  name="description" 
                  className="px-3 py-2 col-12" 
                  // value={email} 
                  // onChange={handleChange}
                />
              </div>
              <div className="mt-3 text-end">
                <button className="btn btn-danger col-12">Add Note</button>
              </div>
            </form>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  )
}

export default AddNote