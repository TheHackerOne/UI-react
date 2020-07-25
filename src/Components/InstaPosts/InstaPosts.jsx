import React, { useEffect, useState } from 'react';
import axios from 'axios';

const InstaPosts = () => {

  const [postcount, newpostcount] = useState();
  const [imgurl, newimgurl] = useState([]);

  const getData = async () => {
    const { postCount,followers, imgURL } =  await axios.get("https://insta-api-info.herokuapp.com/");
    console.log(postCount);
    console.log(imgURL);
    console.log(followers)
    // newpostcount(postCount);
    // newimgurl(imgURL);
  }
  
  return (
    <>
      <h1>hello</h1>
      <button onClick={getData}>click me to get the data</button>
      {imgurl ? imgurl.map(url => {
        return <img src={url} height="200px" width="200px" alt={url}/>
      }): null}
      <h1>POST COUNT = {postcount}</h1>
    </>
  )
}

export default InstaPosts;