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
                <div className="text-start">Amount</div>
                <input 
                  type="number" 
                  placeholder="Nominal" 
                  name="nominal" 
                  className="px-3 py-2 col-12 inputAuth" 
                  // value={email} 
                  // onChange={handleChange}
                />
                <div className="text-start mt-3">Date</div>
                <input  
                  type="date" 
                  placeholder="Date" 
                  name="nominal" 
                  className="px-3 py-2 col-12 inputAuth" 
                  // value={email} 
                  // onChange={handleChange}
                />
                <div className="text-start mt-3">Category</div>
                <div className='inputAuth'>
                  <select name="category" id="" className='form-select py-2 px-3 bg-0 bg-transparent'>
                    <option value="" hidden className='inputAuth'>Select category</option>
                    <option value="">Makanan</option>
                    <option value="">Lain-lain</option>
                  </select>
                </div>

                <div className="text-start mt-3">Description</div>
                <div className='inputAuth'>
                  <textarea className="form-control bg-transparent" rows="3"></textarea>
                </div>
              </div>
              <div className="mt-3 text-end">
                <button className="btn-input col-12">Add Note</button>
              </div>
            </form>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  )
}

export default AddNote