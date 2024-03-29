import React, { useState } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './component/Home/Home';
import Features from './component/Features/Features'
import Pricing from './component/Pricing/Pricing'
import Section from './component/Section/Section'
import DCLogin from './component/DCLogin/DocLogin'
import ForPatients from './component/ForPatients/ForPatients'
import Signup from './component/components/SignUp/Signup';
import KidneyStone from './component/components/Homeopathy/KidneyStone'
import Editor from './component/editor/Editor';
import EditorOutput from './component/editor/EditorOutput';
import Header from './component/Header/Header';
import Treatment from './component/Treatment/Treatment';
import ShowTreatment from './component/Treatment/ShowTreatment';

function App() {
  const [editorData, setEditorData] = useState('');
  // const [editorData, setEditorData] = useState({title:'',description:''});

  return (
    <div>
      {/* <Signup /> */}
      {/* <KidneyStone/> */}
      {/*  */}
      {/* <Editor onChange={(data) => { setEditorData(data) }} />
      <EditorOutput editor_data={editorData} /> */}
      {/*  */}

      <div>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/features' element={<Features />}></Route>
            <Route path='/pricing' element={<Pricing />}></Route>
            <Route path='/patient' element={<ForPatients />}></Route>
            <Route path='/dclogin' element={<DCLogin />}></Route>
            <Route path='/signup' element={<Signup />}></Route>
            <Route path='/create-treatment' element={<Treatment />}></Route>
            <Route path='/showtreat' element={<ShowTreatment />}></Route>
            <Route path='/kidneystone' element={<KidneyStone/>}></Route>
          </Routes>
        </BrowserRouter>

        {/* <KidneyStone /> */}
      </div>
    </div>
  );
}

export default App;
