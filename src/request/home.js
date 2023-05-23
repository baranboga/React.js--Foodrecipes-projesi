import axios from "axios";

// let options={
//     method: '',
//     url: "http://www.themealdb.com/api/json/v1/1/search.php",
//     headers: {
//         Authorization: '',
//         contentType: ''
//     },
//     data: {}
// }

let url= "https://www.themealdb.com/api/json/v1/1/search.php?s=";


// www.themealdb.com/api/json/v1/1/search.php?f=a
// www.themealdb.com/api/json/v1/1/random.php
let url_2="https://www.themealdb.com/api/json/v1/1/filter.php?c="

let url_3="https://www.themealdb.com/api/json/v1/1/random.php"

let url_4="https://www.themealdb.com/api/json/v1/1/lookup.php?i="

export const getMeal =()=>{
    
    // options.method = 'GET';
    // options.url = `${options.url}?s=Arrabiata`;

    const promise = axios.get(url+"Arrabiata");
    const dataPromise = promise.then((response)=>response.data);
    return dataPromise;
}


export const getfiltredMeal =(text)=>{
    
    // options.method = 'GET';
    // options.url = `${options.url}?s=Arrabiata`;

    const promise = axios.get(url_2+text);
    const dataPromise = promise.then((response)=>response.data);
    return dataPromise;
}


export const getsearchedMeal =(text)=>{
    
    // options.method = 'GET';
    // options.url = `${options.url}?s=Arrabiata`;

    const promise = axios.get(url+text);
    const dataPromise = promise.then((response)=>response.data);
    return dataPromise;
}

export const getrandomMeal =()=>{
    
    // options.method = 'GET';
    // options.url = `${options.url}?s=Arrabiata`;

    const promise = axios.get(url_3);
    const dataPromise = promise.then((response)=>response.data);
    return dataPromise;
}

export const getrandomMealbyid =(id)=>{
    
    // options.method = 'GET';
    // options.url = `${options.url}?s=Arrabiata`;

    const promise = axios.get(url_4+id);
    const dataPromise = promise.then((response)=>response.data);
    return dataPromise;
}