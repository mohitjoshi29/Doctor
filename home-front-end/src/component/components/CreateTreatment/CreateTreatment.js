import Swal from 'sweetalert2'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './CreateTreatment.css'
import { useNavigate, useParams, Link } from 'react-router-dom';

export default function CreateTreatment() {
    const { idd } = useParams();
    const [treatment, setTreatment] = useState({ title: '', description: '', icon: '' })
    const [icon, setIcon] = useState('');
    const [treatVal, setTreatVal] = useState([]);
    const [errors, setErrors] = useState({});
    const [selectedId, setSelectedId] = useState(null);
    const [isUpdate, setIsUpdate] = useState(false);
    const navii = useNavigate()
    const token = localStorage.getItem("token");

    const CreateTreatment = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("title", treatment.title);
        formData.append('description', treatment.description.trim());
        formData.append('icon', treatment.icon);
        // debugger
        const headers = {
            'Content-Type': 'multipart/form-data',
            Authorization: `Bearer ${token}`,
        };
        if (isUpdate && selectedId) {
            if (validateForm()) {
                e.preventDefault();
                axios.put(`http://127.0.0.1:8000/api/treatment/${selectedId}/`, formData, { headers })
                    .then((res) => {
                        setTreatVal(res.data);
                        setIsUpdate(false);
                        setSelectedId(null);
                        SuccessAlert();
                    })
                    .catch((error) => {
                        console.error('Error updating treatment:', error);
                        InvaliAlert('Error updating treatment');
                    });
            }
        } else {
            if (validateForm()) {
                e.preventDefault();
                axios.post(`http://127.0.0.1:8000/api/treatment/`, formData, { headers }).then((res) => {
                    console.log(res.data);
                    setTreatVal(res.data);
                    SuccessAlert();
                    navii('/dashbord');
                })
                    .catch((error) => {
                        console.error('Error:', InvaliAlert(error));
                    });
            }
            else {
                InvaliAlert();
            }
        }
    }
    useEffect(() => {
        const fetchTreatmentData = async () => {
            if (idd) {
                const headers = {
                    'Content-Type': 'multipart/form-data',
                    Authorization: `Bearer ${token}`,
                }
                axios.get(`http://127.0.0.1:8000/api/treatment/${idd}/`, { headers }).then((res) => {
                    // console.log("edit res : ", res);
                    const { title, description, icon } = res.data;
                    // debugger
                    setTreatment({ title, description, icon });
                    setIcon(icon)
                    setSelectedId(idd);
                    setIsUpdate(true);
                })
                    .catch((error) => {
                        console.error('Error fetching treatment details:', error);
                    });
            }
        }
        fetchTreatmentData();
    }, [idd]);

    const prevbtnTret = () => {
        navii('/dashbord')
    }
    const validateForm = () => {
        const newErrors = {};
        if (!treatment.title) {
            newErrors.title = 'Title is required';
        }
        if (!treatment.icon) {
            newErrors.icon = 'Icon is required';
        }
        if (!treatment.description) {
            newErrors.description = 'Description is required';
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const SuccessAlert = () => {
        Swal.fire({
            title: "Successfull...!",
            text: "Submitted Successfully!",
            icon: "success",
            showConfirmButton: false,
            timer: 3000
        });
    }
    const InvaliAlert = (error) => {
        Swal.fire({
            title: error ? error : "Alert",
            text: "Not Submitted!",
            icon: "warning",
            showConfirmButton: false,
            timer: 3000
        });
    }
    return (
        <div>
            <div className='createTreat d-flex justify-content-center align-item-center mt-3'>
                <div className='border treatFirst'>
                    <h2 className='h2 treatext'>Create Treatment</h2>
                    <form>
                        <div className='row'>
                            <div className='col-sm-12 col-md-6 col-lg-6'>
                                <div className="form-group mb-3">
                                    <label htmlFor="treattitle">Title</label>
                                    <input type="text"
                                        className="form-control"
                                        id="treattitle"
                                        name="title"
                                        value={treatment.title}
                                        onChange={(e) => setTreatment({ ...treatment, title: e.target.value })}
                                        aria-describedby="emailHelp"
                                        placeholder="What is your title"
                                    />
                                    {errors.title && <p style={{ color: 'red' }}>{errors.title}</p>}

                                </div>
                            </div>
                            <div className='col-sm-12 col-md-6 col-lg-6'>
                                <div className="form-group mb-3">
                                    <label htmlFor="treaticon">Icon</label>
                                    <input type="file"
                                        className="form-control"
                                        id="treaticon"
                                        name='icon'
                                        onChange={(e) => setTreatment({ ...treatment, icon: e.target.files[0] })}
                                        placeholder="What is your icon"
                                        accept="image/png, image/jpeg"
                                    />
                                    {errors.icon && <p style={{ color: 'red' }}>{errors.icon}</p>}
                                </div>
                                <p>Current Icon: <Link to={`http://127.0.0.1:8000/${icon}`} target='_blank' rel="noopener noreferrer">{`${icon}`}</Link></p>
                            </div>
                        </div>
                        <div className="form-group mb-3">
                            <label htmlFor="exampleFormControlTextarea1" className="form-label">Description</label>
                            <textarea type="text"
                                className="form-control"
                                id="exampleFormControlTextarea1"
                                name="description"
                                value={treatment.description}
                                onChange={(e) => setTreatment({ ...treatment, description: e.target.value })}
                                aria-describedby="text-area"
                                placeholder="What is your Description"
                            ></textarea>
                            {errors.description && <p style={{ color: 'red' }}>{errors.description}</p>}
                        </div>
                        <div className='form-group mb-3 d-flex justify-content-end'>
                            <button className='btn w-25 treatbtn' onClick={CreateTreatment}>Submit</button>
                        </div>
                    </form>
                </div>
            </div>
            <button className='btn' onClick={prevbtnTret}>prev</button>
        </div>
    )
}
