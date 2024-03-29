import React, { useState } from 'react'
import Editor from '../editor/Editor';
import EditorOutput from '../editor/EditorOutput';
import { useNavigate } from 'react-router-dom';

export default function Treatment() {
    const [editorData, setEditorData] = useState('');
    const nav=useNavigate();
    const previousFunction=()=>{
        nav(window.history.back())
    }
    return (
        <div className='container'>
            <br/>
            {/* <div style={{fontFamily:'Arial',fontWeight:'bold', backgroundColor:'lightgray'}}>
                <h1>Create treatment</h1>
            </div> */}
            <div className="row" style={{ boxShadow: '2px 2px 12px 2px lightgray', padding: '10px 10px' }}>
                <div className="col-sm-12 col-md-6 col-lg-6">
                    <h2 className="drH1">Create Treatment</h2>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-6 d-flex justify-content-end" style={{padding:'10px 15px'}}>
                    <button className="btn btn-primary" onClick={previousFunction}>Previous</button>
                </div>
            </div>
            <br/>
            <Editor onChange={(data) => { setEditorData(data) }} />
            <EditorOutput editor_data={editorData} />
        </div>
    )
}
