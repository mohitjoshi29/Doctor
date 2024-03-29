// import React, { useEffect, useState } from "react";
// import axios from 'axios';
// // import './styles.css'

// const EditorOutput = (props) => {
//     const [title, setTitle] = useState('');
//     const [description, setDescription] = useState('');
//     const [val, setVal] = useState([]);

//     // const getData = () => {
//     //     axios.get(`http://127.0.0.1:8000/api/treatment/`).then((res) => {
//     //         setVal(res.data)
//     //     })
//     // }

//     const SubTreatment = () => {
//         const editorContent = document.createElement('div');
//         editorContent.innerHTML = props.editor_data;
//         const titleElement = editorContent.querySelector(':first-child');
//         const descriptionElement = editorContent.querySelectorAll(':nth-child(n+2)');

//         const extractedTitle = titleElement ? titleElement.innerText : '';
//         const extractedDescription = descriptionElement ? Array.from(descriptionElement).map(p => `${p.outerHTML}`).join('') : '';
//         setTitle(extractedTitle);
//         setDescription(extractedDescription);

//         const formData = new FormData();
//         formData.append('title', extractedTitle);
//         formData.append('description', JSON.stringify(extractedDescription));

//         // axios.post('http://127.0.0.1:8000/api/treatment/', formData)
//         //     .then((res) => {
//         //         console.log(res.data);
//         //         // getData();
//         //         setVal(res.data);
//         //     })
//         //     .catch((error) => {
//         //         console.error('Error:', error);
//         //     });
//     };

//     return (
//         <div>
//             <div dangerouslySetInnerHTML={{ __html: props.editor_data }} />
//             {props.editor_data}
//             <br />
//             <button className="btn btn-secondary" onClick={() => { SubTreatment() }}>Submit Data</button>

//             {/* <table className="table table-primary">
//                 <thead className="tbody thead-secondary">
//                     <tr>
//                         <th>id</th>
//                         <th>title</th>
//                         <th>description</th>
//                     </tr>
//                 </thead>
//                 <tbody className="tbody">
//                     {
//                         val.map((item, index) => {
//                             return (
//                                 <tr key={index}>
//                                     <td dangerouslySetInnerHTML={{ __html: item.id }} />
//                                     <td dangerouslySetInnerHTML={{ __html: item.title }} />
//                                     <td dangerouslySetInnerHTML={{ __html: item.description }} />
//                                 </tr>
//                             )
//                         })
//                     }
//                 </tbody>
//             </table> */}



//         </div>
//     );
// };
// export default EditorOutput;