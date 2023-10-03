import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Link } from 'react-router-dom';
import { BsBuildings } from 'react-icons/bs'
import { BiBed } from 'react-icons/bi'
import { LiaBathSolid } from 'react-icons/lia'
import { BsArrowsMove } from 'react-icons/bs'
import '../Home.css'
import image from '../images/sample.jpg'
import { setSelectedPropertyData } from '../Redux/reducer';
import { useDispatch } from 'react-redux';

export default function ImgMediaCard(props) {

    const { properties } = props;
    const dispatch = useDispatch()

    const handleSetDataRedux = (properties) => {
        dispatch(setSelectedPropertyData(properties))
    }

    return (
        <Card className='Card' sx={{ maxWidth: 350, height: 400, backgroundColor: '#edf0f7', borderRadius: 4 }}>
            <div className='ImageComponent'>
                <img className='ImageSize' src={properties.imageURL} alt='Nothing to Show' />
                <div>
                    <text className='year_button'>For Rent</text>
                    <button className='fav_button'>
                        <i class="bi bi-heart"></i>

                    </button>

                </div>

            </div>

            <CardContent className='cardBottomComp'>
                <div style={{
                    display: 'flex', flexDirection: 'row',
                    alignItems: 'center'
                }}>
                    <i style={{ fontSize: '10px', marginRight: '4px' }} class="bi bi-geo-alt"></i>
                    <text className='text'>
                        {properties.location}
                    </text>
                </div>
                <div className='cardDetails'>

                    <text style={{ lineHeight: '17px', marginBottom: '5px', marginTop: '5px', fontWeight: '600' }}>{properties.propertyName}</text>

                    <div className='colu'>

                        <div className='detailsItems'>
                            <BsBuildings />

                            <text className='icons'> {properties.roomsAvailable} Room</text>
                        </div>

                        <div className='detailsItems'>
                            <BiBed />

                            <text className='icons'>{properties.beds} Bed</text>
                        </div>
                        <div className='detailsItems'>
                            <LiaBathSolid />
                            <text className='icons'>{properties.bathTub} Bath</text>
                        </div>
                        <div className='detailsItems'>
                            <BsArrowsMove />

                            <text className='icons'>{properties.squareFeet} sft</text>
                        </div>
                    </div>
                </div>

                <div className='Card_Bottom'>
                    <text>
                        <text style={{ fontSize: '16px', color: 'blue', fontWeight: '500' }}>${properties.rentPermonthinDollars}</text><text style={{ fontSize: '13px', fontWeight: '500' }}>/month</text>
                    </text>
                    <div style={{ display: 'flex', flexDirection: 'row' }}>

                       <Link style={{textDecoration: 'none'}} onClick={() =>{handleSetDataRedux(properties)}}  to={`/pages/${properties.propertyName}` }> <button  className='blue_button'>
                            Read More
                        </button></Link>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}