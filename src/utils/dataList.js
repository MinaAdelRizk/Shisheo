import { getRestaurants } from './../services/fakeRestServices';
import { useEffect, useState } from 'react';


export default function DataList() {

    let [rstList, setRstList] = useState([])

    useEffect(() => {
        rstList = getRestaurants()
        setRstList(rstList)
    }, [])

    return (
        <datalist id="locations">
            {rstList.map(r => <option key={r._id} value={r.name}></option>)}
        </datalist>
    )
}