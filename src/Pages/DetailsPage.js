
import { useSelector } from "react-redux";
import ImgMediaCard from "../Components/ImageCardComponent";
import { useEffect } from "react";


const DetailsPage = () => {
    const properties = useSelector((state) => state.myReducer.selectedPropertyData);
    const updateDetailsPage = () => {
        console.log(properties)
    }



    useEffect(() => {
        updateDetailsPage()
    },[])
    return(
       <div style={{width : '100%' , height: '708px',  display: 'flex' , justifyContent : 'center' , alignItems : 'center'}}>
        <ImgMediaCard properties={properties}/>
        </div>
    )
}

export default DetailsPage;