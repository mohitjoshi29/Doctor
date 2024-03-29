import React from 'react';
import './Header.css'
import bg_rem_feDr from '../MyImg/bg_rem_feDr.png';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <div>
      <div className='container-fluid'>
                <div className='container'>
                    <nav className="navbar navbar-expand-lg bg-body-primary text-body-light" style={{ borderRadius: '10px' }}>
                        <div className="container-fluid">
                            {/* <a className="navbar-brand" href="file:///D:/Mohit/ReactTask/doctors_ui_app/src/Images_folder/Remedologo.svg"></a> */}
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <a href="/" className="nav_brand is-nav-cta w-nav-brand">
                                {/* <img src="https://uploads-ssl.webflow.com/613bb87ed839661faafd5b00/6151d1fb1511f7834061becd_Remedologo.svg" loading="lazy" width="200" alt="Your Brand Name" className="nav_brand-image is-nav-cta" /> */}
                                <img src="https://uploads-ssl.webflow.com/613bb87ed839661faafd5b00/614e96c09155ec3efaec24b9_RemedoLogo_White%201.webp" loading="lazy" width="200" alt="Your Brand Name" className="nav_brand-image is-nav-cta" />

                            </a>

                            <div className="collapse navbar-collapse navList text-light" id="navbarText">
                                <ul className="navbar-nav me-auto mb-2 mb-lg-0 text-light">
                                    <li className="nav-item text-light">
                                        <Link style={{textDecoration: 'none',color:'white'}} to='/'>Home</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link style={{textDecoration: 'none',color:'white'}} to='/features'>Features</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link style={{textDecoration: 'none',color:'white'}} to='/pricing'>Pricing</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link style={{textDecoration: 'none',color:'white'}} to='/patient'>For Patients</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link style={{textDecoration: 'none',color:'white'}} to='/blog'>Blog</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link style={{textDecoration: 'none',color:'white'}} to='/signup'>Signup</Link>
                                    </li>
                                     <li className="nav-item">
                                        <Link style={{textDecoration: 'none',color:'white'}} to='/create-treatment'>Create Treatment</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link style={{textDecoration: 'none',color:'white'}} to='/showtreat'>Show Treatment</Link>
                                    </li> 
                                </ul>
                                <button type='submit' className='btn text-light border-light '><Link style={{textDecoration: 'none',color:'white'}} to='/dclogin'>Doctors Login</Link></button>
                            </div>
                        </div>
                    </nav>
                    <br />
                    <div className='section1'>
                        <div className='row'>
                            <div className='col-sm-12 col-md-6 col-lg-6' style={{ padding: '150px 10px 5px 50px' }}>
                                <h2 className='h2 wlcm-text text-white' style={{ fontFamily: 'Arial', fontSize: '45px', fontWeight: 'bold' }}>Welcome to the Doctors Do</h2>
                                <p className='h4 trust-text text-light' style={{ fontFamily: 'Arial', fontSize: '30px', fontWeight: 'bold' }}>trust Doctors Do for their practice</p>
                                <br />
                                <br />
                                <h2 className='h2 wlcm-text text-white' style={{ fontFamily: 'Arial', fontSize: '50px', fontWeight: 'bold' }}>Get Started for FREE</h2>
                                <br />
                                <button className='btn text-white' style={{ width: '300px', height: '60px', border: '2px solid', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>Reaquest CallBack</button>
                            </div>
                            <div className='col-sm-12 col-md-6 col-lg-6 imggcol animdiv'>
                                <img src={bg_rem_feDr}></img>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

    </div>
  )
}
