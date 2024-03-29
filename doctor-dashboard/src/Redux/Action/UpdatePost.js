import axios from 'axios';

export const POST_UPDATE_API = "POST_UPDATE_API";

export const post_updateFunc = (data) => ({
    type: POST_UPDATE_API,
    value: data,
})

export const postUPdApi = (idd, headers, setSelectedId, setIsUpdate, setOpen, setValue) => {
    return (dispatch) => {
        axios.get(`http://127.0.0.1:8000/api/doctor/article/${idd}`, { headers: headers }).then((res) => {
            const { title, image, description } = res.data[0];
            dispatch(post_updateFunc(res.data[0]));
            setSelectedId(idd);
            setIsUpdate(true);
            setOpen(false);
            setValue(1);
        })
            .catch((error) => {
                console.log("error", error);
            })
    }
}