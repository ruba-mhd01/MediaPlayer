import React,{useState,useEffect} from 'react'
import { getHistoryApi,deleteHistoryApi } from '../services/allApi'

function History() {

  const [histList,setHistList]=useState([])
  const [resp,setResp]=useState({})

  useEffect(()=>{
    getData()
  },[resp])

  const getData=async()=>{
    const result=await getHistoryApi()
    if(result.status==200){
      setHistList(result.data)
      console.log(result.data)
    }
  }
  const deleteHist=async(id)=>{
    const result=await deleteHistoryApi(id)
    if(result.status==200){
      setResp(result)
    }
  }
  return (
    <>
      <h2>Watch History</h2>  

      {
        histList?.length>0 ?
        <table className='table table-light '>
        <thead>
          <tr>
            <td>ID</td>
            <td>Title</td>
            <td>Video URL</td>
            <td>Date and Time</td>
            <td></td>
          </tr>
        </thead>
        <tbody>
          {
            histList.map(item=>(
              <tr>
              <td>{item.vid}</td>
              <td>{item.title}</td>
              <td>{item.url}</td>
              <td>{item.date}</td>
              <td>
                  <button className='btn'onClick={()=>{deleteHist(item.id)}}>
                  <i className="fa-solid fa-trash fa-xl" style={{color: "#74c0FC",}} />
                  </button>
              </td>
            </tr>
            ))
          }
        
        </tbody>
      </table>
      
      :
      <h3>No Histiry!!</h3>
       }
    </>
  )
}

export default History