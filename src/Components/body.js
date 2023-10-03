
import { useEffect, useState } from 'react';
import '../Home.css'
import ImgMediaCard from './ImageCardComponent';
import { useSelector,useDispatch } from 'react-redux';
import properties from '../properties';
import {setEndingIndex, setpropertiesData } from '../Redux/reducer';
import {PiHourglassMediumFill} from 'react-icons/pi'



const Body = () => {
    const dispatch = useDispatch();
    
    const searchedproperties = useSelector((state) => state.myReducer.propertiesData)

    let endingIndex = useSelector((state) => state.myReducer.endingIndex)

    const [filteredCityProperties , setFilteredCityProperties] = useState([]);

    const [Properties , setproperties] = useState([])
    

    const initialisePropertyDisplay = () => {
        setproperties(properties)
    }
    
    const showMore = () => { 
        endingIndex+=3
        dispatch(setEndingIndex(endingIndex));
        handleFilteredProperties();
    }

    const handleFilteredProperties = () => {
        const showmoreItems = searchedproperties.slice(0,endingIndex);
        setFilteredCityProperties(showmoreItems)      
    }

    // const extractproperties = (pagenum) => {
    //    const startIndex = 6*(pagenum -1);
    //   try{
    //     const currentPageproperties =  properties.slice(startIndex, startIndex+6);
    //     setproperties(currentPageproperties);
    //   }catch(err){
    //     console.log(err);
    //   }
    // }

    // useEffect(() => {
        
    //     extractproperties(pageNum?pageNum:1);
    // },[pageNum])

    useEffect(() => {
        initialisePropertyDisplay();
    },[])

    useEffect(() => {
        handleFilteredProperties()
    },[searchedproperties,endingIndex])

    return (
        <div className="Body_Outer">
            <div className="Body_Inner row g-4">
                {
                   (filteredCityProperties.length != 0 ?filteredCityProperties:Properties).map((properties, idx) => (
                        <ImgMediaCard key={idx} properties={properties} />
                    )
                    )
                }
            </div>
            <text className='blue_ShowMore_button' onClick={() => {showMore()}}><PiHourglassMediumFill style={{marginRight: '2px'}}/>show More</text>
        </div>
    )
}

export default Body;