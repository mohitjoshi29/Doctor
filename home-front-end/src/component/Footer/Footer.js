import React from 'react';
import './Footer.css'
// import playStoreApp_prev_ui from '../MyImg/playStoreApp_prev_ui.png'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import GoogleIcon from '@mui/icons-material/Google';
import EmailIcon from '@mui/icons-material/Email';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AppleIcon from '@mui/icons-material/Apple';
import ShopIcon from '@mui/icons-material/Shop';
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        // <div>
            <div className='container-fluid footer'>
                <div className='container'>
                    <br />
                    <br />
                    <div className='row'>
                        <div className='col-sm-12 col-md-3 col-lg-3'>
                            <Link to='/' target='_top' rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'white' }}><h1 className='h1 text-light'>Doctors<span style={{ fontFamily: 'cursive' }}> Do</span></h1></Link>
                            <br />
                            <h5>Get Started for FREE</h5>
                            <button className='btn text-light border-light w-50 h-auto'>Request CallBack</button>
                            <br />
                            <br/>
                        </div>
                        <div className='col-sm-12 col-md-3 col-lg-3'>
                            <h4>Quick Links</h4>
                            <Link to='/' target='_top' rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'white' }}><p className='ParaLink'>Home</p></Link>
                            <Link to='/features' target='_top' rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'white' }}><p className='ParaLink'>Features</p></Link>
                            <Link to='/pricing' target='_top' rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'white' }}><p className='ParaLink'>Pricing</p></Link>
                            <Link to='/blog' target='_top' rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'white' }}><p className='ParaLink'>Blog</p></Link>
                            <Link to='/patient' target='_top' rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'white' }}><p className='ParaLink'>For Patients</p></Link>
                        </div>
                        <div className='col-sm-12 col-md-3 col-lg-3'>
                            <h4>Get the APP</h4>
                            <div className='d-flex justify-content-start'>
                                {/* <a href='https://www.play.google.com/' style={{ color: 'white', textDecoration: 'none' }}><img className='d-flex justify-content-start' src={playStoreApp_prev_ui} style={{ width: '60%', height: '60%' }}></img></a> */}
                                <a href='https://play.google.com/' target='_blank' rel="noopener noreferrer" style={{ color: 'white', textDecoration: 'none' }}><AppleIcon style={{width:'60px',height:'60px'}}/></a>
                                <a href='https://play.google.com/' target='_blank' rel="noopener noreferrer" style={{ color: 'white', textDecoration: 'none' }}><ShopIcon style={{width:'60px',height:'60px'}}/></a>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-3 col-lg-3">
                            <h4>Reach us</h4>
                            <p className='ParaLink'><EmailIcon /><a href='mailto:support@doctorsdoapp.com' target='_blank' rel="noopener noreferrer" style={{ color: 'white', textDecoration: 'none' }}> support@doctorsdoapp.com</a></p>
                            <p className='ParaLink'><PhoneAndroidIcon /> +91-222334543</p>
                            <a href='https://maps.app.goo.gl/LBeX6X6vUrgK21fV9' target='_blank' rel="noopener noreferrer" style={{ color: 'white', textDecoration: 'none' }}><p className='ParaLink'><LocationOnIcon />388, Pu4, Scheme Number 54, Vijay Nagar, Indore, Madhya Pradesh 452010</p></a>
                        </div>
                    </div>
                    <hr />
                    <div className='row PrivPol'>
                        <div className='col-sm-12 col-md-5 col-lg-5'>
                            <p>© 2021 Doctors Do Clinitech Pvt Ltd All rights reserved</p>
                        </div>
                        <div className='col-sm-12 col-md-2 col-lg-2 d-inline-flex justify-content-around'>
                            <a href='https://www.facebook.com' target='_blank' rel="noopener noreferrer" style={{ color: 'white', textDecoration: 'none' }}><p className='ParaLink'><FacebookIcon /></p></a>
                            <a href='https://www.instagram.com' target='_blank' rel="noopener noreferrer" style={{ color: 'white', textDecoration: 'none' }}><p className='ParaLink'><InstagramIcon /></p></a>
                            <a href='https://www.youtube.com' target='_blank' rel="noopener noreferrer" style={{ color: 'white', textDecoration: 'none' }}><p className='ParaLink'><YouTubeIcon /></p></a>
                            <a href='https://www.google.com' target='_blank' rel="noopener noreferrer" style={{ color: 'white', textDecoration: 'none' }}><p className='ParaLink'><GoogleIcon /></p></a>
                        </div>
                        <div className='col-sm-12 col-md-5 col-lg-5 secPrivPol'>
                            <p className='ParaLink'>Terms & Conditions | Privacy Policy</p>
                        </div>
                    </div>
                </div>
            </div>
        // </div>
    )
}



