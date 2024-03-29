import React from 'react'
import Footer from '../Footer/Footer'
import rating from '../MyImg/rating.png'
import { Link } from 'react-router-dom'
import bg_rem_feDr from '../MyImg/bg_rem_feDr.png'
import './Pricing.css'

export default function Pricing() {
  return (
    <div>
      <div style={{ backgroundColor: '#0049B7' }}>
        <br />
        {/* <Header /> */}
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
                      <Link style={{ textDecoration: 'none', color: 'white' }} to='/'>Home</Link>
                    </li>
                    <li className="nav-item">
                      <Link style={{ textDecoration: 'none', color: 'white' }} to='/features'>Features</Link>
                    </li>
                    <li className="nav-item">
                      <Link style={{ textDecoration: 'none', color: 'white' }} to='/pricing'>Pricing</Link>
                    </li>
                    <li className="nav-item">
                      <Link style={{ textDecoration: 'none', color: 'white' }} to='/patient'>For Patients</Link>
                    </li>
                    <li className="nav-item">
                      <Link style={{ textDecoration: 'none', color: 'white' }} to='/blog'>Blog</Link>
                    </li>
                    <li className="nav-item">
                      <Link style={{ textDecoration: 'none', color: 'white' }} to='/signup'>Signup</Link>
                    </li>
                    <li className="nav-item">
                      <Link style={{ textDecoration: 'none', color: 'white' }} to='/editor'>Create Treatment</Link>
                    </li>
                    <li className="nav-item">
                      <Link style={{ textDecoration: 'none', color: 'white' }} to='/showtreat'>Show Treatment</Link>
                    </li>
                  </ul>
                  <button type='submit' className='btn text-light border-light '><Link style={{ textDecoration: 'none', color: 'white' }} to='/dclogin'>Doctors Login</Link></button>
                </div>
              </div>
            </nav>
            <br />
            <div className='section1'>
              <div className='row'>
                <div className='col-sm-12 col-md-6 col-lg-6' style={{ padding: '150px 10px 5px 50px' }}>
                  <h2 className='h2 wlcm-text text-white' style={{ fontFamily: 'Arial', fontSize: '50px', fontWeight: 'bold' }}>Doctors Do Premium for Doctors</h2>
                  <br />
                  <p className='trust-text text-light' style={{ fontFamily: 'Arial', fontSize: '20px' }}>Turbo-charge your online presence on Google, Facebook, Instagram, and get a state-of-the-art personal Website. Build your own brand and get more patients.</p>
                  <br />
                  <br />
                  {/* <h2 className='h2 wlcm-text text-white' style={{fontFamily:'Arial', fontSize:'50px',fontWeight:'bold'}}>Get Started for FREE</h2> */}
                  <br />
                  {/* <button className='btn text-white' style={{ width: '300px', height: '60px', border: '2px solid',display:'flex',justifyContent:'center',alignItems:'center'}}>Reaquest CallBack</button> */}
                </div>
                <div className='col-sm-12 col-md-6 col-lg-6 imggcol animdiv'>
                  <img src={bg_rem_feDr}></img>
                </div>
              </div>
            </div>

          </div>
        </div>
        {/* header end */}
        <br />
        {/* <Section/> */}
        {/* <About/> */}
        <div style={{ backgroundColor: 'white' }}>
          <div className="container">
            <br />
            <br />
            {/* <!-- header code --> */}
            {/* <br/> --> */}
            <h1 className='h1 text-secondary container d-flex justify-content-center' style={{ fontFamily: 'Arial', fontWeight: 'bold' }}> Real Stories from Real Doctors</h1>
            <br />
            <br />
            <div className=" container card-group">
              <div className="card">
                <img src={rating} className="card-img-top" alt="..." style={{ height: '100px', width: '100px' }} />
                <div className="card-body">
                  <h5 className="card-title">Dr. Kiranjeet Singh</h5>
                  <p>Gyne & Obs , Fortis La Femme</p>
                  <p className="card-text">Dr.Singh is very simple and gentle in his behavior. He will give sufficient time to each patient. He studies the patient and disease meticulously. We can freely interact with the doctor.Thank You</p>
                  <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
                </div>
              </div>
              <div className="card">
                <img src={rating} className="card-img-top" alt="..." style={{ height: '100px', width: '100px' }} />
                <div className="card-body">
                  <h5 className="card-title">Dr. Ankit Ready</h5>
                  <p>Gyne & Obs , Fortis La Femme</p>
                  <p className="card-text">Very good doctor and kind at heart. Gives maximum time to hear patient views. His clinical diagnosis is very sharp.We can freely interact with the doctor Thank You</p>
                  <p className="card-text"><small className="text-body-secondary">Last updated 2 days ago</small></p>
                </div>
              </div>
              <div className="card">
                <img src={rating} className="card-img-top" alt="..." style={{ height: '100px', width: '100px' }} />
                <div className="card-body">
                  <h5 className="card-title">Dr. Karan Kaur</h5>
                  <p>Gyne & Obs , Fortis La Femme</p>
                  <p className="card-text"> Excellent doctor,great humanitarian.I have not yet met any other Doctor like him who takes so much personal care of the patients.We can freely interact with the doctor. Thank You</p>
                  <p className="card-text"><small className="text-body-secondary">Last updated 3 month ago</small></p>
                </div>
              </div>
            </div>
            <br />
            <br />
            <hr />
            {/* <!-- rating code --> */}
            {/* <br/> --> */}
            <div className='mt-5'>
              <h2 className="h2 text-black d-flex justify-content-center" style={{ fontWeight: 'bold' }}>Grow Your Online Visibility with Us</h2>
              <p className="text-secondary text-center" style={{ paddingLeft: '8%', paddingRight: '8%', fontSize: '20px' }}>Doctors Do premium enables doctors to appear in top ranks in online searches by patients and enhances their social media presence. This helps doctors showcase their practice to the right patients, at the right time & the right place. This helps in getting found and chosen by patients for their treatment.</p>
              <br />
              <br />
              <div className="row row-cols-1 row-cols-md-3 g-4">
                <div className="col">
                  <div className="card h-100">
                    <img src="https://uploads-ssl.webflow.com/613bb87ed839661faafd5b00/62d56f24056de1e48c2a8d15_Social_Media_Marketing_Management_Remedo.webp" className="card-img-top" alt="..." />
                    <div className="card-body">
                      <h5 className="card-title">Account Management, Reporting and Insights</h5>
                      <p className="card-text">Accounting reports are a crucial part of making sure you have a complete picture of how your business is performing. A comprehensive accounting report should be produced every quarter to give you a holistic view of your business’s finances.managing daily operations to budgetary considerations </p>
                      <button className="btn btn-primary">Package Detail</button>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="card h-100">
                    <img src="https://uploads-ssl.webflow.com/613bb87ed839661faafd5b00/62d5734a3f11a869e79373f4_SEO_Remedo.jpg" className="card-img-top" alt="..." />
                    <div className="card-body">
                      <h5 className="card-title">Blogs on medical topic with keyword rich content (12/year)</h5>
                      <p className="card-text">A crucial content marketing strategy, your blog should include highly appealing visual images and elements and relevant content.  The content should appeal to the user and constantly answer the question The blog also adds to your credibility, demonstrating you know what you’re talking about and can communicate to the user on a personable level</p>
                      <button className="btn btn-primary">Package Details</button>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="card h-100">
                    <img src="https://uploads-ssl.webflow.com/613bb87ed839661faafd5b00/62d56a9e3797e3436e9e7423_High-Quality-Designed-Videos-Remedo.webp" class="card-img-top" alt="..." />
                    <div className="card-body">
                      <h5 className="card-title">Google Profile + Website</h5>
                      <p className="card-text">List it with accurate name, address, and personal information. Having a GBP is a sure way to ensure prospective patients can find you via Google search queries‍.A crucial content marketing strategy, your blog should include highly appealing visual images and elements and relevant content.
                        The content should appeal to the user and constantly answer the question:</p>
                      <button className="btn btn-primary">Package Details</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <br />
            <div className="row row-cols-1 row-cols-md-3 g-4">
              <div className="col">
                <div className="card h-100">
                  <img src="https://uploads-ssl.webflow.com/613bb87ed839661faafd5b00/62d612285f63b70accb4f5ca_Account_Management%2C_Reporting_Insights_Remedo.jpg" className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">Account Management, Reporting and Insights</h5>
                    <p className="card-text">Creation & Optimization of your Social media pages. Building customized content for patient education, promotion & events for your specialty & treatments to boost your brand.</p>
                    <button className="btn btn-primary">Package Detail</button>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card h-100">
                  <img src="https://uploads-ssl.webflow.com/613bb87ed839661faafd5b00/62d5734a3f11a869e79373f4_SEO_Remedo.jpg" className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">Blogs on medical topic with keyword rich content (12/year)
                    </h5>
                    <p className="card-text">Publishing and sharing high quality blogs written by top writers on topics relevant to your patients, specialty & treatments. Boosting your online search ranking, attracting new patients & bringing more appointments.</p>
                    <button className="btn btn-primary">Package Details</button>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card h-100">
                  <img src="https://uploads-ssl.webflow.com/613bb87ed839661faafd5b00/62d56a9e3797e3436e9e7423_High-Quality-Designed-Videos-Remedo.webp" className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">Google Profile + Website
                    </h5>
                    <p className="card-text">Publishing and sharing custom designed videos to tell your story, showcase your practice, and engage patients. Enhancing both search ranking & social media performance.
                      1. Advanced video storyboard and script
                      2. Professional designing and editing
                      3. SEO-optimized video title, tags, and description
                      ‍.</p>
                    <button className="btn btn-primary">Package Details</button>
                  </div>
                </div>
              </div>
            </div>
            <br />
            <br />
            <hr />
            <br />
            <br />
            <h2 className="h2 text-primary d-flex justify-content-center">Choose your Premium plan</h2>
            <br />
            <div className="row row-cols-1 row-cols-md-3 g-4">
              <div className="col">
                <div className="card h-100" style={{ backgroundColor: 'lightpink' }}>
                  <h3 className="h3 d-flex justify-content-center">Essential Plan</h3>
                  <h5 className="h5 d-flex justify-content-center text-secondary">Google Profile</h5>
                  <h5 className="h5 d-flex justify-content-center text-danger">save rs 1 lack/year</h5>
                  <button className="btn btn-light text-primary border-primary w-75 d-flex justify-content-center" style={{ marginLeft: '10%', backgroundColor: 'transparent' }}>Talk to an expert</button>
                  <hr />
                  <div className="card-body">
                    <p className="card-text">Google Business Profile optimisation – NAP Audit & consistency</p>
                    <p> Description, Attributes, Services Details with keyword rich text</p>
                    <p>Updates: Photos, Profile Image, Cover Photo (provided by Doctor)</p>
                    <p> Posts: 48/year (including festivals, Special days, Medical content)</p>
                    <p>Review Management via App (Template replies for different reviews)</p>

                    <p> Google's Award winning AI Chatbot connected with customer support (during working hours) & Doctor App</p>
                    <p> Virtual Number Call Tracking</p>
                  </div>
                  <div className="card-footer">
                    <small className="text-muted">Terms and Conditions Apply</small>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card h-100" style={{ backgroundColor: 'lightblue' }}>
                  <h3 className="h3 d-flex justify-content-center">Growth Plan</h3>
                  <h5 className="h5 d-flex justify-content-center">Google Profile + Website</h5>
                  <h5 className="h5 d-flex justify-content-center text-danger">save rs 1.5 lack/year</h5>
                  {/* <button className="btn btn-light text-primary border-primary w-75" style={{ display: 'flex', justifyContent: 'center',alignItems:'center', marginleft: '10%', backgroundColor: 'transparent' }}>Talk to an expert</button> */}
                  <button className="btn btn-light text-primary border-primary w-75 d-flex justify-content-center" style={{ marginLeft: '10%', backgroundColor: 'transparent' }}>Talk to an expert</button>

                  <hr />
                  <div className="card-body">
                    <h5 className="card-title">Everything in Essential
                    </h5>
                    <p className="card-text">
                      Personalised Website & URL (on getmy.clinic domain) with different theme options to choose from (5 design)</p>
                    <p>SSL Certificates, Secure access, Dynamic website connected with app, instant updates from app</p>
                    <p>Tech SEO optimisation, Meta tags, Meta description, Alt tags</p>
                    <p>Off page, On-page SEO, Backlink generation (5-10/month)</p>
                    <p>Blogs on medical topic with keyword rich content (12/year)</p>
                    <p>Highlight Awards, Case study for website</p>
                  </div>
                  <div className="card-footer">
                    <small className="text-muted">Terms and Conditions apply</small>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card h-100" style={{ backgroundColor: 'lightpink' }}>
                  <h3 className="h3 d-flex justify-content-center">unlimited Plan</h3>
                  <h5 className="h5 d-flex justify-content-center">Google Profile + Website</h5>
                  <h5 className="h5 d-flex justify-content-center">+ Facebook</h5>
                  <h5 className="h5 d-flex justify-content-center">+ Instagram</h5>
                  <h5 className="h5 d-flex justify-content-center">YouTube</h5>
                  <h5 className="h5 d-flex justify-content-center text-danger">save rs 2.5 lack/year</h5>
                  <button className="btn btn-light text-primary border-primary w-75 d-flex justify-content-center" style={{ marginLeft: '10%', backgroundColor: 'transparent' }}>Talk to an expert</button>
                  <hr />
                  <div className="card-body">
                    <p className="card-text">
                      Additional Posts (48/year – medical content + special days)</p>
                    <p>Video posts (12/year – completely recorded and shared by doctor)</p>
                    <p>Additional Blogs on medical topic with keyword rich content (12/year)</p>
                    <p>Google Maps Ad, Google search, FB/Insta strategy, support & Analytics**</p>
                    <p>Integration with custom domain***</p>
                    <p>Brand Design (Logo, Letterhead, V-card)</p>
                  </div>
                  <div className="card-footer">
                    <small className="text-muted">Terms and Conditions apply</small>
                  </div>
                </div>
              </div>
            </div>
            <br />
            <br />
            <h5 className="h5 d-flex justify-content-center" style={{ color: '#0049B7' }}>- All Plans include access to Doctors Do App's Premium features</h5>
            <h5 className="h5 d-flex justify-content-center" style={{ color: '#0049B7' }}>-Additional Add-ons available at Extra Cost</h5>
            <br />
            <br />
            {/* </div> */}
            <hr />
            <br />
            <br />
            {/* <!-- request callback start --> */}
            <div className="container-fluid">
              <div className="container">
                <h1 className="h1 text-black text-center">Grow your practice</h1>
                <h4 className="h4 text-secondary text-center">Please reach out to us and we will get back to you at the earliest.</h4>
                <br />
                {/* <div className="row">
                  <div className="col-sm-12 col-md-12 col-lg-12">
                    <h4 className="h4 text-secondary">Designation</h4>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-12 col-md-3 col-lg-3">
                    <select name="cars" id="cars" className="form-control">
                      <option value="volvo">Select Dr.</option>
                    </select>
                  </div>
                  <div className="col-sm-12 col-md-3 col-lg-3">
                    <input type="text" className="form-control" placeholder="enter name" />
                  </div>
                  <div className="col-sm-12 col-md-3 col-lg-3">
                    <input type="number" className="form-control" placeholder="+91|123-1233456" />
                  </div>
                  <div className="col-sm-12 col-md-3 col-lg-3">
                    <button type="submit" className="btn btn-primary form-control">Submit</button>
                  </div>
                </div> */}
                <br />
                <div className='w-25' style={{ marginLeft: '40%' }}>
                  <h4 className="h4 text-secondary">Designation</h4>
                  <select name="cars" id="cars" className="form-control">
                    <option value="volvo">Select Dr.</option>
                    <option value="volvo">Dr. Ready</option>
                    <option value="saab">Dr. Oberoy</option>
                    <option value="opel">Dr. Joshi</option>
                    <option value="audi">Dr. Sharma</option>
                  </select>
                  <br />
                  <input type="text" className="form-control" placeholder="enter name" />
                  <br />
                  <input type="number" class="form-control" placeholder="+91|123-1233456" />
                  <br />
                  <button type="submit" class="btn btn-primary form-control">Submit</button>
                  <br />
                </div>
              </div>
              {/* </div> */}

              {/* <!-- request callback end --> */}
              <br />
              <br />
              {/* <!-- footer starts -->
    
<!-- footer end --> */}
            </div>
          </div>

        </div>
        <br />
        <Footer className="container-fluid" />
      </div>
    </div>
    // </div>
  )
}
