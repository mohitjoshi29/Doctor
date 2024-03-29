import Swal from 'sweetalert2'
import React, { useEffect, useState } from 'react';
import './Blogs.css';
import axios from 'axios';
import { useNavigate, useParams, Link } from 'react-router-dom';

export default function Blogs() {
    const [crtBlog, setCrtBlog] = useState({ title: '', description: '', thumbnail: '' })
    const [icon, setIcon] = useState('');
    const [blogArr, setBlogArr] = useState([]);
    const [errors, setErrors] = useState({});
    const token = localStorage.getItem("token");
    const [selectedId, setSelectedId] = useState(null);
    const [isUpdate, setIsUpdate] = useState(false);
    const shwblog = useNavigate();
    const { idd } = useParams();

    const BlogCreate = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('title', crtBlog.title);
        formData.append('description', crtBlog.description);
        formData.append('thumbnail', crtBlog.thumbnail);
        const headers = {
            'Content-Type': 'multipart/form-data',
            Authorization: `Bearer ${token}`,
        };
        if (isUpdate && selectedId) {
            if (validateForm()) {
                axios.patch(`http://127.0.0.1:8000/api/doctor/blog/${selectedId}/`, formData, { headers })
                    .then((res) => {
                        setCrtBlog(res.data);
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
                axios.post(`http://127.0.0.1:8000/api/doctor/blog/`, formData, { headers }).then((res) => {
                    console.log(res.data);
                    debugger
                    setBlogArr(res.data);
                    console.log(setBlogArr);
                    SuccessAlert();
                    shwblog('/show-blogs')
                    debugger
                })
                    .catch((error) => {
                        debugger
                        console.error('Error:', InvaliAlert(error));
                    });
            }
            else {
                InvaliAlert();
            }
        }
    }
    const PrevPage = () => {
        shwblog('/show-blogs');
    }

    const validateForm = () => {
        const newErrors = {};
        if (!crtBlog.title) {
            newErrors.title = 'Title is required';
        }
        if (!crtBlog.thumbnail) {
            newErrors.thumbnail = 'Icon is required';
        }
        if (!crtBlog.description) {
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
    useEffect(() => {
        if (idd) {
            const headers = {
                'Content-Type': 'multipart/form-data',
                Authorization: `Bearer ${token}`,
            }
            axios.get(`http://127.0.0.1:8000/api/doctor/blog/${idd}/`, { headers }).then((res) => {
                const { title, description, thumbnail } = res.data;
                // debugger
                setCrtBlog({ title, description, thumbnail });
                setIcon(thumbnail)
                setSelectedId(idd);
                setIsUpdate(true);
            })
                .catch((error) => {
                    console.error('Error fetching treatment details:', error);
                });
        }
    }, [idd, token]);

    return (
        <div>
            <div className='createBlog d-flex justify-content-center align-item-center mt-3'>
                <div className='border blogFirst'>
                    <form>
                        <div className='row'>
                            <h2 className="drH1 text-primary">Create Blogs</h2>
                            <br />
                            <div className='col-sm-12 col-md-6 col-lg-6'>
                                <div className="form-group mb-3">
                                    <label htmlFor="blogTitle">Title</label>
                                    <input type="text"
                                        className="form-control"
                                        id="blogTitle"
                                        name="title"
                                        value={crtBlog.title}
                                        onChange={(e) => setCrtBlog({ ...crtBlog, title: e.target.value })}
                                        aria-describedby="emailHelp"
                                        placeholder="What is your title"
                                    />
                                    {errors.title && <p style={{ color: 'red' }}>{errors.title}</p>}
                                </div>
                            </div>
                            <div className='col-sm-12 col-md-6 col-lg-6'>
                                <div className="form-group mb-3">
                                    <label htmlFor="blogIcon">Icon</label>
                                    <input type="file"
                                        className="form-control"
                                        id="blogIcon"
                                        name='thumbnail'
                                        onChange={(e) => setCrtBlog({ ...crtBlog, thumbnail: e.target.files[0] })}
                                        placeholder="What is your icon"
                                        accept="image/png, image/jpeg"
                                    />
                                    {errors.thumbnail && <p style={{ color: 'red' }}>{errors.thumbnail}</p>}
                                </div>
                                <p>Current Icon: <Link to={crtBlog.thumbnail} target='_blank' rel="noopener noreferrer">{`${icon}`}</Link></p>
                            </div>
                        </div>
                        <div className="form-group mb-3">
                            <label htmlFor="exampleFormControlTextarea1" className="form-label">Description</label>
                            <textarea type="text"
                                className="form-control"
                                id="exampleFormControlTextarea1"
                                name="description"
                                value={crtBlog.description}
                                onChange={(e) => setCrtBlog({ ...crtBlog, description: e.target.value })}
                                aria-describedby="text-area"
                                placeholder="What is your Description"
                            ></textarea>
                            {errors.description && <p style={{ color: 'red' }}>{errors.description}</p>}
                        </div>
                        <div className='form-group mb-3 d-flex justify-content-end'>
                            <button className='btn w-25 blogbtn' onClick={BlogCreate}>Submit</button>
                        </div>
                    </form>
                </div>
            </div>
            <button className='btn blogbtn' onClick={PrevPage}>Show Blogs</button>
        </div>
        //  </div>
    )
}
