import React from 'react';
import './Footer.css'
import playStoreApp_prev_ui from '../MyImg/playStoreApp_prev_ui.png'

export default function Footer() {
    return (
        <div>
            {/* <div> */}
            <div className='container-fluid footer'>
                <div className='container'>
                    <br />
                    <br />
                    <div className='row'>
                        <div className='col-sm-12 col-md-3 col-lg-3'>
                            <a href="/" className="nav_brand is-nav-cta w-nav-brand">
                                <img src="https://uploads-ssl.webflow.com/613bb87ed839661faafd5b00/614e96c09155ec3efaec24b9_RemedoLogo_White%201.webp" loading="lazy" width="200" alt="Your Brand Name" class="nav_brand-image is-nav-cta" />
                            </a>
                            <br />
                            <br />
                            <div style={{ display: 'inline-flex' }}>
                                {/* <p style={{ paddingLeft: '6px' }}>Faceb</p> */}
                                {/* <p style={{ paddingLeft: '6px' }}>link</p> */}
                                {/* <p style={{ paddingLeft: '6px' }}>yout</p> */}
                                {/* <a href='https://www.facebook.com/remedoapp/'><img src={fblogo} style={{ width: '40px', height: '40px', borderRadius: '50%', marginLeft: '20px' }}></img></a>
                                <a href='https://www.youtube.com/channel/UCx44oTPvsCGFmi_KRXqVnVg'><img src={youtube} style={{ width: '40px', height: '40px', borderRadius: '50%', marginLeft: '20px' }}></img></a>
                                <a href='https://www.linkedin.com/company/remedo'><img src={linkedinlogo} style={{ width: '40px', height: '40px', borderRadius: '50%', marginLeft: '20px' }}></img></a> */}
                                <a area-label="facebook" href="https://www.facebook.com/remedoapp/" target="_blank" class="social-media_link w-inline-block"><img src="https://assets-global.website-files.com/613bb87ed839661faafd5b00/615c3c08ab85e8f34d25093e_Group%201773.svg" loading="lazy" alt="Remedo App renowned Google startup in Healthcare Industry" class="social-media_icon" /></a>
                                <a area-label="linkedin" href="https://www.linkedin.com/company/remedo" target="_blank" class="social-media_link w-inline-block"><img src="https://assets-global.website-files.com/613bb87ed839661faafd5b00/615c3e4153361ad6ad57e017_Group%201773%20(1).svg" loading="lazy" alt="Remedo App renowned Google startup in Healthcare Industry" class="social-media_icon" /></a>
                                <a area-label="youtube" href="https://www.youtube.com/channel/UCx44oTPvsCGFmi_KRXqVnVg" target="_blank" class="social-media_link w-inline-block"><img src="https://assets-global.website-files.com/613bb87ed839661faafd5b00/614e9bd8414558d33bb35367_Social%20Icons-2.svg" loading="lazy" alt="You Tube" class="social-media_icon" /></a>
                            </div>
                        </div>
                        <div className='col-sm-12 col-md-3 col-lg-3'>
                            <h4>Quick Links</h4>
                            <p>Home</p>
                            <p>Features</p>
                            <p>Blog</p>
                            <p>For Patients</p>
                        </div>
                        <div className='col-sm-12 col-md-3 col-lg-3'>
                            <h4>Get the app</h4>
                            <img className='d-flex justify-content-center' src={playStoreApp_prev_ui} style={{ width: '60%', height: '60%' }}></img>
                        </div>
                        <div className="col-sm-12 col-md-3 col-lg-3">
                            <h4>Reach us</h4>
                            <p><img src="https://assets-global.website-files.com/613bb87ed839661faafd5b00/614e9a38e6300534b1825cb0_Message.svg" loading="lazy" alt="Email Icon" class="footer-link_icon" />  support@doctorsdoapp.com</p>
                            <p><img src="https://assets-global.website-files.com/613bb87ed839661faafd5b00/614e9a38fc06bb642defe005_Mobile.svg" loading="lazy" alt="Phone Icon" class="footer-link_icon" />  +91-222334543</p>
                            <p><img src="https://assets-global.website-files.com/613bb87ed839661faafd5b00/614e9a38b3650c0ce6cef7d0_Location.svg" loading="lazy" alt="Map Icon" class="footer-link_icon" />  B 168,B-Block,sector 44,xyz,abc pradesh,2t1y03</p>
                            {/* <div class="footer-link-list is-reach-us">
                                <a href="mailto:support@remedoapp.com" class="footer-link w-inline-block"><img src="https://assets-global.website-files.com/613bb87ed839661faafd5b00/614e9a38e6300534b1825cb0_Message.svg" loading="lazy" alt="Email Icon" class="footer-link_icon" />
                                    <div>support@remedoapp.com</div>
                                </a>
                                <a id="w-node-_7ebeec0a-b5f7-4f27-6b99-5d8cd33f3296-95747fb8" href="tel:+91-9555544888" class="footer-link w-inline-block">
                                    <img src="https://assets-global.website-files.com/613bb87ed839661faafd5b00/614e9a38fc06bb642defe005_Mobile.svg" loading="lazy" alt="Phone Icon" class="footer-link_icon" /><div>+91-9555544888</div></a>
                                <a href="https://www.google.com/maps/dir/28.4322711,77.5046096/remedoapp/@28.5094923,77.2812465,11z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x390ce501406ede45:0xe7749a246956b8f6!2m2!1d77.3314543!2d28.5548938" class="addlink w-inline-block">
                                    <div class="footer-link">
                                        <img src="https://assets-global.website-files.com/613bb87ed839661faafd5b00/614e9a38b3650c0ce6cef7d0_Location.svg" loading="lazy" alt="Map Icon" class="footer-link_icon" />
                                        <div>B 168, B Block, Sector 44, Noida, Uttar Pradesh 201303</div>
                                    </div>

                                </a></div> */}
                        </div>
                    </div>
                    <div className='row PrivPol'>
                        <div className='col-sm-12 col-md-6 col-lg-6'>
                            <p>© 2021 Doctors Do Clinitech Pvt Ltd All rights reserved</p>
                        </div>
                        <div className='col-sm-12 col-md-6 col-lg-6 secPrivPol'>
                            <p>Terms & Conditions | Privacy Policy</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        // </div>
    )
}



