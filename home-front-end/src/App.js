import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Home from './component/Home/Home';
import Features from './component/Features/Features'
import Pricing from './component/Pricing/Pricing'
import ForPatients from './component/ForPatients/ForPatients'
import Blog from './component/Blog/Blog'
import SignUp from './component/components/SignUp/Signup'
// import Header from './component/Header/Header';
// import Footer from './component/Footer/Footer';
import SignIn from './component/components/SignIn/SignIn';
import Dashbord from './component/components/Dashbord/Dashbord';
import Section from './component/Section/Section';
import CreateTreatment from './component/components/CreateTreatment/CreateTreatment';
import Blogs from './component/components/Blogs/Blogs';
import ShowBlogs from './component/components/Blogs/ShowBlogs';

function App() {
  // const [editorData, setEditorData] = useState('');

  return (
    <div>
      {/* <div> */}
        <BrowserRouter>
        {/* <div style={{ backgroundColor: '#0049B7' }}>
        <br />
        <Header />
        <br />
      </div> */}
          <Routes>
            <Route path='/' element={<Section />}></Route>
            <Route path='/features' element={<Features />}></Route>
            <Route path='/pricing' element={<Pricing />}></Route>
            <Route path='/patient' element={<ForPatients />}></Route>
            <Route path='/blog' element={<Blog />}></Route>
            <Route path='/signup' element={<SignUp />}></Route>
            <Route path='/signin' element={<SignIn />}></Route>
            <Route path='/dashbord' element={<Dashbord/>}></Route>
            <Route path='/create-treatment/:idd' element={<CreateTreatment/>}></Route>
            <Route path='/create-blogs/:idd' element={<Blogs/>}></Route>
            <Route path='/show-blogs' element={<ShowBlogs/>}></Route>
        </Routes>
        <br/>
        {/* <Footer/> */}
      </BrowserRouter>
    </div>
    // </div >
  );
}

export default App;
