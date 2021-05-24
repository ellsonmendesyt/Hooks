import { useState, useEffect } from 'react'
import axios from 'axios';

const API_KEY=process.env.REACT_APP_API_KEY;
const url=`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;


function useGif(tag) {

    const [gif, setGif]=useState('');

    const  fetchData= async (tag)=>{
        //url dinamica que funciona com e sem tag
        const resposta =await axios.get(tag ? `${url}&tag=${tag}`: url);
        const {data} = resposta;
        const imgsrc = data.data.images.downsized_large.url;
        setGif(imgsrc);
    }
  


    useEffect(()=>{
        fetchData(tag);
    },[]);

    //precisamos obter ao clicar, por isso devemos retornar a fucao tambem
  return {fetch,fetchData};
}

export default useGif
