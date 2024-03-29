import Swal from 'sweetalert2'
import React, { useState, useEffect } from 'react'
import './ShowBlogs.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function ShowBlogs() {
    const crtblog = useNavigate();
    const [showBlog, setShowBlog] = useState([])
    const token = localStorage.getItem("token");

    const CreateBlog = (idd) => {
        crtblog(`/create-blogs/${idd}`);
    }

    const [currentPage, setCurrentPage] = useState(1);
    const itemPerPage = 8;
    let getpageno = Math.ceil(showBlog.length / itemPerPage)
    let PageNumber = [];
    if (getpageno <= 7) {
        for (let i = 1; i <= getpageno; i++) {
            PageNumber.push(i);
        }
    } else {
        if (currentPage <= 4) {
            for (let i = 1; i <= 5; i++) {
                PageNumber.push(i);
            }
            PageNumber.push('...', getpageno);
        } else if (currentPage > getpageno - 4) {
            PageNumber.push(1, '...');
            for (let i = getpageno - 4; i <= getpageno; i++) {
                PageNumber.push(i);
            }
        } else {
            PageNumber.push(1, '...');
            for (let i = currentPage - 1; i <= currentPage + 1; i++) {
                PageNumber.push(i);
            }
            PageNumber.push('...', getpageno);
        }
    }

    let handleClick = (page) => {
        setCurrentPage(page);
    }
    let prevClick = (page) => {
        Math.max(setCurrentPage(currentPage - 1, 1));
    }
    let NextClick = (page) => {
        Math.min(setCurrentPage(currentPage + 1, getpageno));
    }

    const getData = () => {
        const headers = {
            'Content-Type': 'multipart/form-data',
            Authorization: `Bearer ${token}`,
        };

        axios.get(`http://127.0.0.1:8000/api/doctor/blog/`, { headers })
            .then(function (res) {
                console.log(res.data);
                setShowBlog(res.data);
            })
            .catch(function (error) {
                if (error.response.data.code === 'token_not_valid') {
                    alert('Given token not valid for any token type')
                    // navigation("/signin")
                }
                console.log(error);
            })
    };

    let DeleteTreatment = (idd) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                axios.delete(`http://127.0.0.1:8000/api/doctor/blog/${idd}`, { headers: { Authorization: `Bearer ${token}` } }).then((res) => {
                    Swal.fire({
                        title: 'deleted',
                        text: "data deleted",
                        icon: 'success',
                        timer: 3000,
                        showConfirmButton: false,
                    })
                    getData();
                })
                .catch((error) => {
                    console.error("Error deleting treatment:", InvaliAlert(error));
                });
            }
        })
    }

    const InvaliAlert = (error) => {
        Swal.fire({
            title: error ? error : "You Have No Permission to Access it...",
            text: "Not Submitted!",
            icon: "warning",
            showConfirmButton: false,
            timer: 3000
        });
    }

    useEffect(() => {
        getData();
    }, [])

    const EditBlog=(idd)=>{
        crtblog(`/create-blogs/${idd}`);
    }

    const chunkArray = (arr, chunkSize) => {
        const result = [];
        for (let i = 0; i < arr.length; i += chunkSize) {
            result.push(arr.slice(i, i + chunkSize));
        }
        return result;
    };

    return (
        <div>
            <div className='border border blogFirst'>
                <div className="row" style={{ boxShadow: '2px 2px 12px 2px lightgray', padding: '10px 10px' }}>
                    <div className="col-sm-12 col-md-6 col-lg-6">
                        <h2 className="drH1">Show Blog</h2>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-6 d-flex justify-content-end" style={{ padding: '10px 15px' }}>
                        <button className="btn btn-primary" onClick={CreateBlog}>Create Blog</button>
                    </div>
                </div>
            </div>
            {/* </div> */}
            <div className='Container'>
                <div className='corousel container'>
                    <h2 className='text-start'>Our Latest Blogs</h2>
                    <hr />
                    <br />
                    {showBlog && chunkArray(showBlog.slice((currentPage - 1) * itemPerPage, currentPage * itemPerPage), 4).map((row, rowIndex) => (
                        <div className="row" key={rowIndex}>
                            {row.map((item, index) => (
                                <div className="col-sm-12 col-md-3 col-lg-3" key={item.id}>
                                    <div className="card crd1 d-flex" style={{ width: '18rem', height: '18rem', padding: 'auto' }}>
                                        <img src={item.thumbnail} className="card-img-top w-50 h-50 treatIcn" alt="treatmentimages" />
                                        <div className="card-body treatmentHeading">
                                            <h5 className="card-title d-flex justify-content-center">{item.title}</h5>
                                            <button type="button" key={item.id} className="btn btn-primary blogBtn" data-bs-toggle="modal" data-bs-target={`#exampleModal${item.id}`}>
                                                See More
                                            </button>

                                            {/* <!-- Modal --> */}
                                            <div className="modal fade" id={`exampleModal${item.id}`} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                                <div className="modal-dialog modal-xl">
                                                    <div className="modal-content">
                                                        <div className="modal-header">
                                                            <h1 className="modal-title fs-5" id="exampleModalLabel">{item.title}</h1>
                                                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                        </div>
                                                        <div className="modal-body">
                                                            <div className="container">
                                                                <div className="w-100 h-auto">
                                                                    <h1 className="d-flex justify-content-center">{item.title}</h1>
                                                                    <img src={item.thumbnail} className="card-img-top w-50 h-50 treatImg" alt="treatmentimages" />
                                                                    <p className="treatmentPara d-flex justify-content-center ">{item.description}</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="modal-footer">
                                                            <button type="button" className="btn btn-secondary" aria-label="Close" data-bs-dismiss="modal" onClick={()=>EditBlog(item.id)}>Edit</button>
                                                            <button type="button" className="btn btn-danger" onClick={() => DeleteTreatment(item.id)}>Delete</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <br />
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
                {
                    getpageno > 1
                        ? <div className='pagination justify-content-center border-primary'>
                            <button className='btn btn-primary' onClick={() => prevClick(currentPage - 1)} style={{ marginLeft: '2px' }} disabled={currentPage === 1 ? true : false}>  prev</button>
                            {PageNumber.map((num, index) => {
                                return (
                                    <button className="btn btn-primary" key={index} onClick={() => handleClick(num)} style={{ marginLeft: '2px' }} > {num} </button>
                                )
                            }
                            )}
                            <button className='btn btn-primary' onClick={() => NextClick(currentPage + 1)} style={{ marginLeft: '2px' }} disabled={currentPage === getpageno ? true : false}>Next</button>
                        </div>
                        : null
                }
            </div>
        </div>
    )
}
