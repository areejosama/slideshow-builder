import React, {useEffect, useState} from 'react'
import axios from 'axios';

export default function Stickers() {
    let[stickerslist,setstickerslist]=useState([]);
    async function getdata(){
        let {data}=await axios.get(`https://api.giphy.com/v1/stickers/trending?api_key=d4t08kBLZ2AKgZv1kV1r8impUrkdokGY&limit=100&offset=0&rating=g&bundle=messaging_non_clips`);
        setstickerslist(data.data);
        console.log(data.data[0].url)
    }
    useEffect(()=>{
        getdata();
    },[]);

  return (
<div className='stickersidebar bg-light' role='button'>
<div className="row">
    {stickerslist.map((sticker,index)=>
        <div className="col-md-6" key={index}>
            <div className="stickeritems">
               <img src={sticker.images.original.url}/> 
            </div>
     </div>
    )}
 </div>

</div>
  )
}
