import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { toast } from 'react-toastify';
import { addCategoryApi } from '../services/allApi';
import CategorySet from './CategorySet';

function Category() {
  const [show, setShow] = useState(false);
  const [cat,setCat]=useState("")
  const [resp,setResp]=useState({})
   
  const handleCategory=async()=>{
    if(!cat){
      toast.warning("Enter Valid Input!!")
    }
    else{
      const result=await addCategoryApi({category:cat,videos:[]})
      if(result.status==201){
        toast.success('Category Added!!')
        setCat("")
        handleClose()
        setResp(result);
      }
      else{
        toast.error("Adding Failed!!")
        console.log(result)
      }
    }
  }

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <div className='d-grid'>
        <button onClick={handleShow} className='btn btn-dark'>Add Category</button>
      </div>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FloatingLabel controlId="floatingtitle" label="Category Id">
             <Form.Control type="text" onChange={(e)=>{setCat(e.target.value)}} placeholder="Password" />
          </FloatingLabel>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="secondary" onClick={handleCategory}>
            Add
          </Button>
          
        </Modal.Footer>
      </Modal>
      <CategorySet/>
    </>
  )
}

export default Category