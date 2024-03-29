import Swal from 'sweetalert2'
import React, { useEffect, useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import './Dashbord.css';

export default function Dashbord() {
    let token = localStorage.getItem('token');
    const [showTreat, setShowTreat] = useState([]);
    const navigation = useNavigate();

    const [currentPage, setCurrentPage] = useState(1);
    const itemPerPage = 8;
    let getpageno = Math.ceil(showTreat.length / itemPerPage)
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

        axios.get('http://127.0.0.1:8000/api/treatment/', { headers })
            .then(function (res) {
                setShowTreat(res.data);
            })
            .catch(function (error) {
                if (error.response.data.code === 'token_not_valid') {
                    alert('Given token not valid for any token type')
                    navigation.navigation("/signin")
                }
                // handle error
                console.log(error);
            })
            .finally(function () {
                // always executed
            });
    };

    useEffect(() => {
        if (localStorage.getItem('token') === "" || localStorage.getItem('token') === null) {
            navigation("/signin");
        } else {
            getData();
        }
    })

    const Prevfun = () => {
        navigation('/create-treatment/:idd');
    }

    // const DeleteTreatment = (idd) => {
    //     axios.delete(`http://127.0.0.1:8000/api/treatment/${idd}`, { headers: { Authorization: `Bearer ${token}` } })
    //         .then((res) => {
    //             console.log(res.data);
    //             getData()
    //         })
    //         .catch((error) => {
    //             console.error("Error deleting treatment:", InvaliAlert(error));
    //         });
    // }

    const Blog = () => {
        navigation('/show-blogs');
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

    // 
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
                axios.delete(`http://127.0.0.1:8000/api/treatment/${idd}`, { headers: { Authorization: `Bearer ${token}` } }).then((res) => {
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
                        console.error("Error deleting treatment:", error);
                        InvaliAlert(error);
                    });
            }
        })
    }
    // 
    const EditTreatment = (idd) => {
        navigation(`/create-treatment/${idd}`);
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
            <div className="container">
                <br />
                <div className="row" style={{ boxShadow: '2px 2px 12px 2px lightgray', padding: '10px 10px' }}>
                    <div className="col-sm-12 col-md-6 col-lg-6">
                        <h2 className="drH1">Show Treatment</h2>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-6 d-flex justify-content-end" style={{ padding: '10px 15px' }}>
                        <button className="btn btn-primary" onClick={Blog}>Blog</button>
                        <button className="btn btn-primary" onClick={Prevfun}>Create Treatment</button>
                    </div>
                </div>
                <br />
                {showTreat && chunkArray(showTreat.slice((currentPage - 1) * itemPerPage, currentPage * itemPerPage), 4).map((row, rowIndex) => (
                    <div className="row" key={rowIndex}>
                        {row.map((item, index) => (
                            <div className="col-sm-12 col-md-3 col-lg-3" key={item.id}>
                                <div className="card crd1 d-flex" style={{ width: '18rem', height: '18rem', padding: 'auto' }}>
                                    <img src={`http://127.0.0.1:8000/${item.icon}`} className="card-img-top w-50 h-50 treatIcn" alt="treatmentimages" />
                                    <div className="card-body treatmentHeading">
                                        <h5 className="card-title d-flex justify-content-center">{item.title}</h5>
                                        <button type="button" key={item.id} className="btn btn-primary" data-bs-toggle="modal"
                                            data-bs-target={`#exampleModal${item.id}`}>
                                            See More
                                        </button>
                                        {/* <!-- Modal --> */}
                                        <div className="modal fade" id={`exampleModal${item.id}`} tabIndex="-1" aria-labelledby="exampleModalLabel"
                                            aria-hidden="true">
                                            <div className="modal-dialog modal-xl">
                                                <div className="modal-content">
                                                    <div className="modal-header">
                                                        <h1 className="modal-title fs-5" id="exampleModalLabel">{item.title}</h1>
                                                        <button type="button" className="btn-close" data-bs-dismiss="modal"
                                                            aria-label="Close"></button>
                                                    </div>
                                                    <div className="modal-body">
                                                        <div className="container">
                                                            <div className="w-100 h-auto">
                                                                <h1 className="d-flex justify-content-center">{item.title}</h1>
                                                                <img src={`http://127.0.0.1:8000/${item.icon}`}
                                                                    className="card-img-top w-50 h-50 treatIcn" alt="treatmentimages" />
                                                                <p className="treatmentPara d-flex justify-content-center ">{item.description}</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="modal-footer">
                                                        <button type="button" className="btn btn-secondary" aria-label="Close" data-bs-dismiss="modal" onClick={() => EditTreatment(item.id)}>Edit</button>
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
                        <button className='btn btn-primary' onClick={() => prevClick(currentPage - 1)}
                            style={{ marginLeft: '2px' }} disabled={currentPage === 1 ? true : false}>  prev</button>
                        {PageNumber.map((num, index) => {
                            return (
                                <button className="btn btn-primary" key={index} onClick={() => handleClick(num)}
                                    style={{ marginLeft: '2px' }} > {num} </button>
                            )
                        }
                        )}
                        <button className='btn btn-primary' onClick={() => NextClick(currentPage + 1)}
                            style={{ marginLeft: '2px' }} disabled={currentPage === getpageno ? true : false}>Next</button>
                    </div>
                    : null
            }
        </div>
    )
}