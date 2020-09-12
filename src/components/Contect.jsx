import React from 'react'
import {useState} from 'react'

function Contect(){
    const [data, setData] = useState({
        fname:'',
        phone:'',
        email:'',
        msg:''
    });

    const InputEvent = (event) => {
        const {name, value} = event.target;
        setData((preVlue) => {
            return{
               ...preVlue,
               [name]: value,

            }
        })
    }
    const fromSubmit= (event) =>{
        event.preventDefault()
        alert(`My name is ${data.fname} my Phone number is ${data.phone} and email id is ${data.email}
here that i want to say you ${data.msg}
        `)
    };
    return(
        <div>
        <div className="my-5">
        <h1 className="text-center">Contect US</h1>
        </div>
        <div className="container contect_div">
        <div className="row">
        <div className="col-md-6 col-10 mx-auto">
        <form className="text-left" onSubmit={fromSubmit}>
        <div className="form-group">
          <label for="exampleFormControlInput1">User Name</label>
          <input type="text" className="form-control" id="exampleFormControlInput1" 
          name="fname" value={data.fname} onChange={InputEvent} placeholder="Enter your name"/>
        </div>
        <div className="form-group">
          <label for="exampleFormControlInput1">Phone no</label>
          <input type="text" className="form-control" id="exampleFormControlInput1" 
          name="phone" value={data.phone} onChange={InputEvent} placeholder="mobile no"/>
        </div>
        <div className="form-group">
          <label for="exampleFormControlInput1">Email ID</label>
          <input type="email" className="form-control" id="exampleFormControlInput1" 
          name="email" value={data.email} onChange={InputEvent} placeholder=""/>
        </div>
        <div className="form-group">
          <label for="exampleFormControlTextarea1">Message</label>
          <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" name="msg" value={data.msg} onChange={InputEvent}></textarea>
        </div>
        <div className="col-12 my-3">
        <button className="btn btn-outline-primary" type="submit">Submit form</button>
        </div>
      </form>
        </div>
        </div>
        </div>
        </div>
    )
}

export default Contect