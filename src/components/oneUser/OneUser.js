import React from 'react'
import "./OneUser.css"

const OneUser = () => {
  return (
    <tr className="oneTip">
    <td>
      <img className="img_tip" src="" alt=''/>
    </td>
    <td>
      <h5>hello</h5>
    </td>
    <td>
      <h5> hello</h5>
    </td>

    <td>
      <label className="date_tip">
        10:00 AM
      </label>
    </td>

    <td className='buttons' >

       <button className="btn-tips-hide" >
          Delete
        </button>


    </td>
    <td className='buttons' >
     <button className="btn-tips">
          Update
        </button>


    </td>


  </tr>

  )
}

export default OneUser