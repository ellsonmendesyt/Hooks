import React, { useState, useEffect } from 'react'
import axios from 'axios';

const API_KEY=process.env.REACT_APP_API_KEY;


function Tag() {

    const [gif, setGif]=useState('');
    const [tag, setTag]=useState('cats');

    const  buscarDados= async (tag)=>{
        const url=`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;
        const resposta =await axios.get(url);
        const {data} = resposta;
        const imgsrc = data.data.images.downsized_large.url;
        setGif(imgsrc);
    }
    const handleClik=()=>{
        buscarDados(tag);
    }


    useEffect(()=>{
        buscarDados(tag);
    },[]);


    return (
        <>
        <h2 className='alert alert-info'>Tag {tag}</h2>
        <img src={gif} alt="" width='200' height='200' />
        <input type="text" value={tag}  onChange={e=>setTag(e.target.value)}/>
        <button className='btn btn-dark mt-3' onClick={handleClik}>Mudar Git</button>
        </>
    )
}

export default Tag
