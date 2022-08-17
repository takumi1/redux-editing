import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {ADD_SERVICE, GET_DEFAULT, UPD_VALUE} from "../actions/serviceActions";

const addService = (serviceData) => ({
    type: ADD_SERVICE,
    payload: serviceData,
})
const getDefault = () => ({
    type: GET_DEFAULT,
    payload: '',
})
const updateValue = (serviceData) => ({
    type: UPD_VALUE,
    payload: serviceData,
})

export default function ServiceAdd() {
    const defaultServiceForm = useSelector((state) => state.defaultValue);

    const [serviceForm, setServiceForm] = useState(defaultServiceForm);

    const dispatch = useDispatch();

    const handleChange = event => {
        const { target: {name, value} } = event;
        setServiceForm({
            ...serviceForm,
            [name]: value
        })
    }
    const handleAbort = (event) => {
        event.preventDefault()
        dispatch(getDefault());
    }


    const handleSubmit = (event) => {
        event.preventDefault();
        serviceForm.editing ? dispatch(updateValue(serviceForm)) : dispatch(addService(serviceForm));
        setServiceForm(defaultServiceForm)
        dispatch(getDefault());

    }

    useEffect(() => {
        setServiceForm(defaultServiceForm)
    }, [defaultServiceForm]);

    return (
        <div className='wrapper'>
            <form onSubmit={handleSubmit}>
                <div>
                    <input required type="text" onChange={handleChange} name='name' value={serviceForm.name}/>
                </div>
                <div>
                    <input required type="number" onChange={handleChange} name='price' value={serviceForm.price}/>
                </div>
                <div>
                   <button>Send</button>
                </div>
            </form>
            {serviceForm.editing ? <button onClick={handleAbort}>Cancel</button> : ''}
        </div>
    );
};
