import axios from 'axios';

export const UPDATE_TREATMENT_DATA = "UPDATE_TREATMENT_DATA"

export const updateTreatmentData = (data) => ({
    type: 'UPDATE_TREATMENT_DATA',
    value: data,
});

export const fetchTreatmentData = (idd, headers, setSelectedId, setIsUpdate, setOpen, setValue) => {
    return (dispatch) => {
        axios.get(`http://127.0.0.1:8000/api/doctor/treatments/${idd}`, { headers: headers }).then((res) => {
            dispatch(updateTreatmentData(res.data[0]))
            setSelectedId(idd);
            setIsUpdate(true);
            setOpen(false);
            setValue(1);
            debugger
        })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    };
}
