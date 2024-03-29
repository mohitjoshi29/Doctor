import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Doc_Login() {
    const useNav=useNavigate();
    const PrevBtn=()=>{
        useNav('/');
    }
  return (
    <div>
      <div class="container-fluid">
        <div class="container">
            <div class="row">
                <div class="col-sm-12 col-md-3 col-lg-3"></div>
                <div class="col-sm-12 col-md-6 col-lg-6 d-flex justify-content-center align-item-center" style={{paddingTop: '8%', backgroundImage: 'linear-gradient(to top left, brown,darkblue)'}}>
                    <div class="border-primary">
                    <form class="form">
                        <h4 class="text-light">Login to your account</h4>
                        <br/>
                        <label class="form-label text-light">Enter the mobile number</label>
                        <input class="form-control w-100 h-25" type="number" placeholder="enter the number"/>
                        <br/>
                        <button type="submit" class="btn btn-primary form-control w-100">Sent OTP</button>
                    </form>
                    <br/>
                    <br/>
                    </div>
                </div>
                <div class="col-sm-12 col-md-3 col-lg-3"></div>
            </div>
            <br/>
            <button className='btn btn-primary' onClick={PrevBtn}>Previous</button>
        </div>
    </div>
    </div>
  )
}
