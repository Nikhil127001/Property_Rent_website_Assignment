
import { useEffect, useState } from 'react'
import properties from '../properties';
import '../Home.css'
import { useDispatch } from 'react-redux';
import {setEndingIndex,  setpropertiesData } from '../Redux/reducer';


const Navbar = () => {
    const cities = ['New York', 'Mumbai', 'Paris', 'London']
    const [active , setActive] = useState('');
    const dispatch = useDispatch();

    const getCityProperties = (city)  => {
            setActive(city)
            dispatch(setEndingIndex(6))
            const propertiesRelatedToCities = properties.filter((property) => property.city == city)
            dispatch(setpropertiesData(propertiesRelatedToCities))
    }
    return (
        <div className="Navbar_Outer">
            <div className="Navbar_Inner">
                <div className='Nav_search_outer'>
                    {cities.map((city, idx) => (
                        <text key={idx} onClick={() => {getCityProperties(city)}} className={active  == city?'Nav_Buttons_activate':'Nav_Buttons'}>{city}</text>
                    ))}
                </div>
                <button className='blue_button'>
                    View All  {`>`}
                </button>
            </div>
        </div>
    )
}

export default Navbar;