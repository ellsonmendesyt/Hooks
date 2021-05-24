import React, { useState, useEffect } from 'react'
import axios from 'axios';

const API_KEY=process.env.REACT_APP_API_KEY;


function Aleatorio() {

const [gif, setGif]=useState('');

    const  buscarDados= async ()=>{
        const url=`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
        const resposta =await axios.get(url);
        const {data} = resposta;
        const imgsrc = data.data.images.downsized_large.url;
        setGif(imgsrc);
    }


    const handleClik=()=>{
        buscarDados();
    }


    useEffect(()=>{


        buscarDados();
    },[]);


    return (
        <>
        <h2 className='alert alert-info'>Gif Aleatorio</h2>
        <img src={gif} alt="" width='300' height='300' />

        <button className='btn btn-dark mt-3' onClick={handleClik}>Mudar Git</button>
        </>
    )
}

export default Aleatorio
