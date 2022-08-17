import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {EDIT_SERVICE, GET_DEFAULT, REMOVE_SERVICE} from "../actions/serviceActions";

const getDefault = () => ({
    type: GET_DEFAULT,
    payload: '',
})

const ServiceList = () => {
    const searchBar = React.useRef(null);
    const items = useSelector((state) => state.services);
    const [state, setState] = useState(items)

    const dispatch = useDispatch();

    const handleRemove = id => {
        dispatch({
            type: REMOVE_SERVICE,
            payload: {
                id,
            }
        });
        dispatch(getDefault());
        searchBar.current.value = ' '
    }
    const handleEdit = (id, name, price) => {
        dispatch({
            type: EDIT_SERVICE,
            payload: {
                id,
                name,
                price,
            }
        })
        searchBar.current.value = ' '
    }

    const handleChange = event => {

        const {target: {value}} = event;

        let state = items.filter(i => {

            return i.name.includes(value)

        });
        setState(state)


    }

    useEffect(() => {
        setState(items)
    }, [items]);

    return (
        <>
            <h1>Service list</h1>
            <input type="text" onChange={handleChange} ref={searchBar} placeholder='Sort by name'/>
            <ul>

                {state ?
                    state.map(item => (
                        <li key={item.id}>
                            {`${item.name} ${item.price}`}

                            <button onClick={() => handleEdit(item.id, item.name, item.price)}>✎</button>

                            <button className='closeButton' onClick={() => handleRemove(item.id)}>x</button>

                        </li>
                    )) : handleRemove()
                }
            </ul>
        </>
    );
};

export default ServiceList;