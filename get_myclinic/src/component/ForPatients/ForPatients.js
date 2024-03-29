import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import { Link } from 'react-router-dom'
import bg_rem_feDr from '../MyImg/bg_rem_feDr.png'
import './ForPatients.css'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

export default function ForPatients() {
  return (
    <div>
      <div style={{ backgroundColor: '#0049B7' }}>
        <br />
        {/* <Header /> */}
        <div className='container-fluid'>
          <div className='container'>
            <nav class="navbar navbar-expand-lg bg-body-primary text-body-light" style={{ borderRadius: '10px' }}>
              <div class="container-fluid">
                {/* <a class="navbar-brand" href="file:///D:/Mohit/ReactTask/doctors_ui_app/src/Images_folder/Remedologo.svg"></a> */}
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
                </button>
                <a href="/" class="nav_brand is-nav-cta w-nav-brand">
                  {/* <img src="https://uploads-ssl.webflow.com/613bb87ed839661faafd5b00/6151d1fb1511f7834061becd_Remedologo.svg" loading="lazy" width="200" alt="Your Brand Name" class="nav_brand-image is-nav-cta" /> */}
                  <img src="https://uploads-ssl.webflow.com/613bb87ed839661faafd5b00/614e96c09155ec3efaec24b9_RemedoLogo_White%201.webp" loading="lazy" width="200" alt="Your Brand Name" class="nav_brand-image is-nav-cta" />
                </a>
                <div class="collapse navbar-collapse navList text-light" id="navbarText">
                  <ul class="navbar-nav me-auto mb-2 mb-lg-0 text-light">
                    <li class="nav-item text-light">
                      <Link style={{ textDecoration: 'none', color: 'white' }} to='/'>Home</Link>
                    </li>
                    <li class="nav-item">
                      <Link style={{ textDecoration: 'none', color: 'white' }} to='/about'>Features</Link>
                    </li>
                    <li class="nav-item">
                      <Link style={{ textDecoration: 'none', color: 'white' }} to='/pricing'>Pricing</Link>
                    </li>
                    <li class="nav-item">
                      <Link style={{ textDecoration: 'none', color: 'white' }} to='/patient'>For Patients</Link>
                    </li>
                    <li className="nav-item">
                      <Link style={{ textDecoration: 'none', color: 'white' }} to='/blog'>Blog</Link>
                    </li>
                    <li className="nav-item">
                      <Link style={{ textDecoration: 'none', color: 'white' }} to='/signup'>Signup</Link>
                    </li>
                    <li className="nav-item">
                      <Link style={{ textDecoration: 'none', color: 'white' }} to='/create-treatment'>Create Treatment</Link>
                    </li>
                    <li className="nav-item">
                      <Link style={{ textDecoration: 'none', color: 'white' }} to='/showtreat'>Show Treatment</Link>
                    </li>
                  </ul>
                  <button type='submit' className='btn text-light border-light '><Link style={{ textDecoration: 'none', color: 'white' }} to='/doc_login'>Doctors Login</Link></button>
                </div>
              </div>
            </nav>
            <br />
            <div className='section1'>
              <div className='row'>
                <div className='col-sm-12 col-md-6 col-lg-6' style={{ padding: '150px 10px 5px 50px' }}>
                  <h2 className='h2 wlcm-text text-white' style={{ fontFamily: 'Arial', fontSize: '50px', fontWeight: 'bold' }}>Doctors Do helps patients get better</h2>
                  <br />
                  <p className='h4 trust-text text-light' style={{ fontFamily: 'Arial', fontSize: '20px' }}>Reach your doctor. Defeat your condition. Convenience & Care in your pocket</p>
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
        <br />
        {/* <Section/> */}
        <div class="container-fluid" style={{ backgroundColor: 'white' }}>
          <div class="container">
            <div className='sec2'>
              <br />
              <br />
              <h2 class="h2 text-center" style={{ color: '#0049B7' }}>How Patients Benefit</h2>
              <p class="text-secondary d-flex justify-content-center" style={{ paddingLeft: '8%', paddingRight: '8%', fontSize: '20px' }}>As a patient, you can access convenience in healthcare through Doctors Do in the following ways</p>
              <br />
              <br />
              {/* <div class="row row-cols-1 row-cols-md-3 g-4">
                <div class="col">
                  <div class="card h-100">
                    <img src="https://uploads-ssl.webflow.com/614df4079de73097e28b8431/615efed1f79ad94afb7dc856_integrated-care-for-better-experience.jpg" class="card-img-top" alt="..." />
                    <div class="card-body">
                      <h5 class="card-title">Integrated care for better experience</h5>
                      <p class="card-text">Remedo lets you book In-clinic as well as Video or audio consultations with your doctor right from your phone.</p>
                    </div>
                  </div>
                </div>
                <div class="col">
                  <div class="card h-100">
                    <img src="https://uploads-ssl.webflow.com/614df4079de73097e28b8431/615eff046105b4e079260b15_defeat-your-chronic-condition.jpg" class="card-img-top" alt="..." />
                    <div class="card-body">
                      <h5 class="card-title">Defeat your chronic condition</h5>
                      <p class="card-text">Remedo's D.I.S.H.A care plans work along with your doctor's treatment to guide you on dietary changes, easy to do exercises and help you understand your condition so you can move towards better health</p>
                    </div>
                  </div>
                </div>
                <div class="col">
                  <div class="card h-100">
                    <img src="https://uploads-ssl.webflow.com/614df4079de73097e28b8431/615eff4b3a5d745b6c049000_constant-engagement-with-doctor.jpg" class="card-img-top" alt="..." />
                    <div class="card-body">
                      <h5 class="card-title">Constant engagement with doctor</h5>
                      <p class="card-text">Never forget a follow-up appointment with your doctor. Whether it's to share your reports, ask a question or book a consult, Remedo gives you the comfort that your doctor cares for you</p>
                    </div>
                  </div>
                </div>
              </div> 
               <br />
              <div class="row row-cols-1 row-cols-md-3 g-4">
                <div class="col">
                  <div class="card h-100">
                    <img src="https://uploads-ssl.webflow.com/614df4079de73097e28b8431/615eff227d1463bf27d0ca99_change-your%20habits-step-by-step.jpg" class="card-img-top" alt="..." />
                    <div class="card-body">
                      <h5 class="card-title">Change your habits step by step</h5>
                      <p class="card-text">Our scientific program helps incorporate healthy habits by doing small tasks everyday. Track your condition and get reminders. See the improvement yourself!</p>
                    </div>
                  </div>
                </div>
                <div class="col">
                  <div class="card h-100">
                    <img src="https://uploads-ssl.webflow.com/614df4079de73097e28b8431/615eff643375df58ee14ea7f_never-lose-a-prescription.jpg" class="card-img-top" alt="..." />
                    <div class="card-body">
                      <h5 class="card-title">Never lose a prescription</h5>
                      <p class="card-text">Digitized records, prescriptions & lab reports - by doctor, by date - without any effort</p>
                    </div>
                  </div>
                </div>
                <div class="col">
                  <div class="card h-100">
                    <img src="https://uploads-ssl.webflow.com/614df4079de73097e28b8431/615eff86648fbedbe7f2d776_answers-to-all-your-questions.jpg" class="card-img-top" alt="..." />
                    <div class="card-body">
                      <h5 class="card-title">Answers to all your questions</h5>
                      <p class="card-text">Personal health coach - dietitians, physiotherapists and patients like you. Ask on Whatsapp and get a reply in minutes!</p>
                    </div>
                  </div>
                </div>
              </div> */}
              {/* </div> */}

              {/* second curosel */}

              {/* <div id="carouselExampleCaptions" class="carousel slide">
                <div className="carousel-indicators">
                  <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                  <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                  <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <div class="row row-cols-1 row-cols-md-3 g-4">
                      <div class="col">
                        <div class="card h-100">
                          <img src="https://uploads-ssl.webflow.com/614df4079de73097e28b8431/615efed1f79ad94afb7dc856_integrated-care-for-better-experience.jpg" class="card-img-top" alt="..." />
                          <div class="card-body">
                            <h5 class="card-title">Integrated care for better experience</h5>
                            <p class="card-text">Remedo lets you book In-clinic as well as Video or audio consultations with your doctor right from your phone.</p>
                          </div>
                        </div>
                      </div>
                      <div class="col">
                        <div class="card h-100">
                          <img src="https://uploads-ssl.webflow.com/614df4079de73097e28b8431/615eff046105b4e079260b15_defeat-your-chronic-condition.jpg" class="card-img-top" alt="..." />
                          <div class="card-body">
                            <h5 class="card-title">Defeat your chronic condition</h5>
                            <p class="card-text">Remedo's D.I.S.H.A care plans work along with your doctor's treatment to guide you on dietary changes, easy to do exercises and help you understand your condition so you can move towards better health</p>
                          </div>
                        </div>
                      </div>
                      <div class="col">
                        <div class="card h-100">
                          <img src="https://uploads-ssl.webflow.com/614df4079de73097e28b8431/615eff4b3a5d745b6c049000_constant-engagement-with-doctor.jpg" class="card-img-top" alt="..." />
                          <div class="card-body">
                            <h5 class="card-title">Constant engagement with doctor</h5>
                            <p class="card-text">Never forget a follow-up appointment with your doctor. Whether it's to share your reports, ask a question or book a consult, Remedo gives you the comfort that your doctor cares for you</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div class="row row-cols-1 row-cols-md-3 g-4">
                      <div class="col">
                        <div class="card h-100">
                          <img src="https://uploads-ssl.webflow.com/614df4079de73097e28b8431/615eff227d1463bf27d0ca99_change-your%20habits-step-by-step.jpg" class="card-img-top" alt="..." />
                          <div class="card-body">
                            <h5 class="card-title">Change your habits step by step</h5>
                            <p class="card-text">Our scientific program helps incorporate healthy habits by doing small tasks everyday. Track your condition and get reminders. See the improvement yourself!</p>
                          </div>
                        </div>
                      </div>
                      <div class="col">
                        <div class="card h-100">
                          <img src="https://uploads-ssl.webflow.com/614df4079de73097e28b8431/615eff643375df58ee14ea7f_never-lose-a-prescription.jpg" class="card-img-top" alt="..." />
                          <div class="card-body">
                            <h5 class="card-title">Never lose a prescription</h5>
                            <p class="card-text">Digitized records, prescriptions & lab reports - by doctor, by date - without any effort</p>
                          </div>
                        </div>
                      </div>
                      <div class="col">
                        <div class="card h-100">
                          <img src="https://uploads-ssl.webflow.com/614df4079de73097e28b8431/615eff86648fbedbe7f2d776_answers-to-all-your-questions.jpg" class="card-img-top" alt="..." />
                          <div class="card-body">
                            <h5 class="card-title">Answers to all your questions</h5>
                            <p class="card-text">Personal health coach - dietitians, physiotherapists and patients like you. Ask on Whatsapp and get a reply in minutes!</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div class="row row-cols-1 row-cols-md-3 g-4">
                      <div class="col">
                        <div class="card h-100">
                          <img src="https://uploads-ssl.webflow.com/614df4079de73097e28b8431/615efed1f79ad94afb7dc856_integrated-care-for-better-experience.jpg" class="card-img-top" alt="..." />
                          <div class="card-body">
                            <h5 class="card-title">Integrated care for better experience</h5>
                            <p class="card-text">Remedo lets you book In-clinic as well as Video or audio consultations with your doctor right from your phone.</p>
                          </div>
                        </div>
                      </div>
                      <div class="col">
                        <div class="card h-100">
                          <img src="https://uploads-ssl.webflow.com/614df4079de73097e28b8431/615eff046105b4e079260b15_defeat-your-chronic-condition.jpg" class="card-img-top" alt="..." />
                          <div class="card-body">
                            <h5 class="card-title">Defeat your chronic condition</h5>
                            <p class="card-text">Remedo's D.I.S.H.A care plans work along with your doctor's treatment to guide you on dietary changes, easy to do exercises and help you understand your condition so you can move towards better health</p>
                          </div>
                        </div>
                      </div>
                      <div class="col">
                        <div class="card h-100">
                          <img src="https://uploads-ssl.webflow.com/614df4079de73097e28b8431/615eff4b3a5d745b6c049000_constant-engagement-with-doctor.jpg" class="card-img-top" alt="..." />
                          <div class="card-body">
                            <h5 class="card-title">Constant engagement with doctor</h5>
                            <p class="card-text">Never forget a follow-up appointment with your doctor. Whether it's to share your reports, ask a question or book a consult, Remedo gives you the comfort that your doctor cares for you</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div> */}

              {/* second curosel end*/}
              <Carousel autoPlay interval={2000} infiniteLoop>
                <div class="row row-cols-1 row-cols-md-3 g-4">
                  <div class="col">
                    <div class="card h-100">
                      <img src="https://uploads-ssl.webflow.com/614df4079de73097e28b8431/615efed1f79ad94afb7dc856_integrated-care-for-better-experience.jpg" class="card-img-top" alt="..." />
                      <div class="card-body">
                        <h5 class="card-title">Integrated care for better experience</h5>
                        <p class="card-text">Doctors Do lets you book In-clinic as well as Video or audio consultations with your doctor right from your phone.</p>
                      </div>
                    </div>
                  </div>
                  <div class="col">
                    <div class="card h-100">
                      <img src="https://uploads-ssl.webflow.com/614df4079de73097e28b8431/615eff046105b4e079260b15_defeat-your-chronic-condition.jpg" class="card-img-top" alt="..." />
                      <div class="card-body">
                        <h5 class="card-title">Defeat your chronic condition</h5>
                        <p class="card-text">Muscle-strengthening physical activity that works all major muscle groups, such as lifting weights, working with resistance bands, push-ups, or squats.
                          Physical activity is important for people of all ages.</p>
                      </div>
                    </div>
                  </div>
                  <div class="col">
                    <div class="card h-100">
                      <img src="https://uploads-ssl.webflow.com/614df4079de73097e28b8431/615eff4b3a5d745b6c049000_constant-engagement-with-doctor.jpg" class="card-img-top" alt="..." />
                      <div class="card-body">
                        <h5 class="card-title">Constant engagement with doctor</h5>
                        <p class="card-text">Never forget a follow-up appointment with your doctor. Whether it's to share your reports, ask a question or book a consult, Doctors Do gives you the comfort that your doctor cares for you</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="row row-cols-1 row-cols-md-3 g-4">
                  <div class="col">
                    <div class="card h-100">
                      <img src="https://uploads-ssl.webflow.com/614df4079de73097e28b8431/615eff227d1463bf27d0ca99_change-your%20habits-step-by-step.jpg" class="card-img-top" alt="..." />
                      <div class="card-body">
                        <h5 class="card-title">Change your habits step by step</h5>
                        <p class="card-text">Physical activity is one of the best ways you can improve your health now and in the future. Everyone can get the health benefits of physical activity—no matter their age, abilities, shape, or size.</p>
                      </div>
                    </div>
                  </div>
                  <div class="col">
                    <div class="card h-100">
                      <img src="https://uploads-ssl.webflow.com/614df4079de73097e28b8431/615eff643375df58ee14ea7f_never-lose-a-prescription.jpg" class="card-img-top" alt="..." />
                      <div class="card-body">
                        <h5 class="card-title">Never lose a prescription</h5>
                        <p class="card-text">Digitized records, prescriptions & lab reports - by doctor, by date - without any effort</p>
                      </div>
                    </div>
                  </div>
                  <div class="col">
                    <div class="card h-100">
                      <img src="https://uploads-ssl.webflow.com/614df4079de73097e28b8431/615eff86648fbedbe7f2d776_answers-to-all-your-questions.jpg" class="card-img-top" alt="..." />
                      <div class="card-body">
                        <h5 class="card-title">Answers to all your questions</h5>
                        <p class="card-text">Personal health coach - dietitians, physiotherapists and patients like you. Ask on Whatsapp and get a reply in minutes!</p>
                      </div>
                    </div>
                  </div>
                </div>
{/*  */}
                <div class="row row-cols-1 row-cols-md-3 g-4">
                  <div class="col">
                    <div class="card h-100">
                      <img src="https://uploads-ssl.webflow.com/614df4079de73097e28b8431/615efed1f79ad94afb7dc856_integrated-care-for-better-experience.jpg" class="card-img-top" alt="..." />
                      <div class="card-body">
                        <h5 class="card-title">Integrated care for better experience</h5>
                        <p class="card-text">Doctors Do lets you book In-clinic as well as Video or audio consultations with your doctor right from your phone.</p>
                      </div>
                    </div>
                  </div>
                  <div class="col">
                    <div class="card h-100">
                      <img src="https://uploads-ssl.webflow.com/614df4079de73097e28b8431/615eff046105b4e079260b15_defeat-your-chronic-condition.jpg" class="card-img-top" alt="..." />
                      <div class="card-body">
                        <h5 class="card-title">Defeat your chronic condition</h5>
                        <p class="card-text">Doctors Do D.I.S.H.A care plans work along with your doctor's treatment to guide you on dietary changes, easy to do exercises and help you understand your condition so you can move towards better health</p>
                      </div>
                    </div>
                  </div>
                  <div class="col">
                    <div class="card h-100">
                      <img src="https://uploads-ssl.webflow.com/614df4079de73097e28b8431/615eff4b3a5d745b6c049000_constant-engagement-with-doctor.jpg" class="card-img-top" alt="..." />
                      <div class="card-body">
                        <h5 class="card-title">Constant engagement with doctor</h5>
                        <p class="card-text">Never forget a follow-up appointment with your doctor. Whether it's to share your reports, ask a question or book a consult, Doctors Do gives you the comfort that your doctor cares for you</p>
                      </div>
                    </div>
                  </div>
                </div>
{/*  */}
              </Carousel>
            </div>
            {/*  */}
            <br />
            <br />
            <hr />
            <div className='sec3'>
              <br />
              <br />
              <h2 class="h2 d-flex justify-content-center" style={{ color: '#0049B7' }}>Doctors Do Care plans for chronic conditions</h2>
              <p class="text-secondary d-flex justify-content-center" style={{ fontSize: '20px' }}>Lifestyle modification, behaviour change, patient education. For Free.</p>
              <br />
              <br />
              <div class="row">
                <div class="col-sm-12 col-md-6 col-lg-6">
                  <br />
                  <br />
                  <br />
                  {/* <img src="https://uploads-ssl.webflow.com/613bb87ed839661faafd5b00/62c82f8e15522f06782aeacb_Remedo_Mobile_AppView.Web.webp" class="img-fluid rounded-start" alt="..." style={{ width: '80%', height: '80%' }} /> */}
                  <img src="https://cdn.dribbble.com/users/64533/screenshots/4593751/animated---medical-ai-v3.gif" class="img-fluid rounded-start" alt="..." style={{ width: '80%', height: '80%' }} />
                </div>
                <div class="col-sm-12 col-md-6 col-lg-6">
                  <div class="card border-light w-100">
                    <div class="card-body">
                      <h5 class="card-title text-muted">Daily educational videos and images
                      </h5>
                    </div>
                  </div>
                  <hr style={{ width: '18rem' }} />
                  <div class="card border-light w-100">
                    <div class="card-body">
                      <h5 class="card-title text-muted">Timely reminders for medicine
                      </h5>
                    </div>
                  </div>
                  <hr style={{ width: '18rem' }} />
                  <div class="card border-light w-100">
                    <div class="card-body">
                      <h5 class="card-title text-muted">Diet, exercise, and stress management
                      </h5>
                    </div>
                  </div>
                  <hr style={{ width: '18rem' }} />
                  <div class="card border-light w-100">
                    <div class="card-body">
                      <h5 class="card-title text-muted">Answers to patient FAQs
                      </h5>
                    </div>
                  </div>
                  <hr style={{ width: '18rem' }} />
                  <div class="card border-light w-100">
                    <div class="card-body">
                      <h5 class="card-title text-muted">Multiple language options
                      </h5>
                    </div>
                  </div>
                  <hr style={{ width: '18rem' }} />
                  <div class="card border-light w-100">
                    <div class="card-body">
                      <h5 class="card-title text-muted">Personalised content from your doctor</h5>
                    </div>
                  </div>
                </div>
              </div>
              <hr />
            </div>
            {/* <br/> */}
            {/* <br /> */}
            <h2 class="h2 text-primary d-flex justify-content-center">Patient Speak</h2>
            <p class="text-secondary d-flex justify-content-center" style={{ fontSize: '20px' }}>Patients love the personal care & support Doctors Do provides</p>
            <br />
            <br />
            <div class="card-group" >
              <div class="card border-light">
                {/* <!-- <img class="card-img-top" src="..." alt="Card image cap"> --> */}
                <div class="card-body">
                  <h5 class="card-title text-center">Healthy Meal Guidence</h5>
                  <hr />
                  <br />
                  <p class="card-text">it's helping me to follow a healthy trimster wise diet charts,slect the correct food for the proper growth of my baby.</p>
                  <hr />
                  <h5 class="card-title text-center">Swapna</h5>
                  <p class="card-text text-center d-flex justify-content-center"><small class="text-muted">New Delhi</small></p>
                </div>
              </div>
              <div class="card border-light">
                {/* <!-- <img class="card-img-top" src="..." alt="Card image cap"> --> */}
                <div class="card-body">
                  <h5 class="card-title text-center">Help during the lockdown</h5>
                  <hr />
                  <br />
                  <p class="card-text">During pandemic it is difficult to go out. Doctors Do helps in planning exercise providing video msgs and guiding step by step.</p>
                  <hr />
                  <h5 class="card-title text-center">Vaibhav</h5>
                  <p class="card-text text-center d-flex justify-content-center"><small class="text-muted">Pune</small></p>
                </div>
              </div>
              <div class="card border-light">
                {/* <!-- <img class="card-img-top" src="..." alt="Card image cap"> --> */}
                <div class="card-body">
                  <h5 class="card-title text-center">Helps me care of my baby</h5>
                  <hr />
                  <br />
                  <p class="card-text">your care plan is help me to care my baby,this helps me to have knowledge about common symptons during pragnency.</p>
                  <hr />
                  <h5 class="card-title text-center">Devik</h5>
                  <p class="card-text d-flex justify-content-center"><small class="text-muted">Bankura</small></p>
                </div>
              </div>
            </div>
          </div>
          <br />
        </div>
        <br />
        {/* <br/> */}
        <Footer />
      </div>
    </div>
  )
}
