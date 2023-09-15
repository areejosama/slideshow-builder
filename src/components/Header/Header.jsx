import React, {useState} from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import App from './../Move/Move';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper';
import { SketchPicker } from 'react-color';
import 'swiper/css';
import 'swiper/swiper-bundle.min.css'; 
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';
import 'swiper/css/effect-cube';
import 'swiper/css/effect-flip';
import 'swiper/css/effect-fade';
import styles from './Header.module.css'
import Stickers from '../Stickers/Stickers'


export default function Header({selectedAnimation}){
        let [editorHtml, setEditorHtml] = useState('');
        let [imageFiles, setImageFiles] = useState([]);
        let [mainImage, setMainImage] = useState(null);
        let [uploadedimages, setuploadedimages]=useState(false);
        let [color, setColor] = useState('#ffffff');
        let [showPicker, setShowPicker] = useState(false);
        let [selectedsticker, setselectedsticker]=useState('')
        let [showsticker, setshowsticker] = useState(false);
        let handleImageUpload = (e) => {
            let selectedFiles = e.target.files;
            let filesArray = Array.from(selectedFiles);
            setImageFiles((prevFiles) => [...prevFiles, ...filesArray]);
            setuploadedimages(true);
        };

          function getmainimage(image){
            setMainImage(image);
          }
          let handleRemoveImage = (index) => {
            const updatedFiles = [...imageFiles];
            updatedFiles.splice(index, 1);
            setImageFiles(updatedFiles);
          };
          let handleColorChange = (newColor) => {setColor(newColor.hex);};
          let togglePicker = () => { setShowPicker(!showPicker)};
          let togglesticker = () => {setshowsticker(!showsticker)};
          let getsticker = (sticker) => { setselectedsticker(sticker)};
          let divStyle = {backgroundColor: color};
  return (
    <div>
{/* sidebar */}
    <div className={`sidebar pt-5 ${styles.header} vh-100 fixed-top`}>
    <nav className="nav nav-pills flex-column align-items-center">
   <label className="d-flex flex-column mb-4">
         <input type="file" className='d-none' name='file' onChange={handleImageUpload}/>
         <i className={`fa-solid fa-file-arrow-up fa-2xl ${styles.icon}`}></i>
         <h6 className="text-center text-muted mt-1">Upload</h6>
    </label>
    <label className="d-flex flex-column my-4">
      
<button type="button" class="btn" data-bs-toggle="modal" data-bs-target="#exampleModal">
<i className={`fa-solid fa-font fa-2xl ${styles.icon}`}></i>
</button>
<div class="modal" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <ReactQuill
          value={editorHtml}
          onChange={setEditorHtml}
    
        />
      </div>
      <div class="modal-footer">
      <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>
      <h6 className="text-center text-muted mt-1">Text</h6>
    </label>
    
    <div className="d-flex flex-column my-4">
    <button className='btn' onClick={togglePicker}>
     <i className={`fa-solid fa-paint-roller fa-2xl ${styles.icon}`}>
     </i></button>
     {showPicker && <SketchPicker color={color} onChange={handleColorChange} className='colorpicker'/>}
      <h6 className="text-center text-muted mt-1">Colors</h6>
    </div>
    <div className="d-flex flex-column my-4">
    <button className="btn" onClick={togglesticker}>
    <i className={`fa-solid fa-shapes fa-2xl ${styles.icon}`}></i>
   </button>
   {showsticker && (
    <Stickers selectedsticker={selectedsticker} onChange={getsticker} className="stickersidebar" />)}
      <h6 className="text-center text-muted mt-1">Stikers</h6>
    </div>
    </nav>
    </div> 
{/* slides */}

 
 <div className="position-absolute start-50 translate-middle mainbox border border-info rounded border-3"> 
      <div className='mainimg'>
    <Swiper
     modules={[Navigation, Pagination, Autoplay]}
      autoplay={ {
        delay: 2000,
      }}
      speed={1000}
      loop={true}
      spaceBetween={10}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      effect={selectedAnimation}
      fadeEffect={{crossFade: true}}
      coverflowEffect={{rotate: 30, slideShadows: true}}
      cubeEffect={{
        "shadow": false,
        "slideShadows": true}}
    >
{uploadedimages ? (
        imageFiles.map((image, index) => (
          <SwiperSlide key={index} className="mainimg position-relative">
              <img
                src={ URL.createObjectURL(image)}
                alt={`Image ${index + 1}`}
              />
              <div className='textbox position-absolute start-50 translate-middle rounded' style={divStyle}>
              <h2 className='tex-capitalized text-center' dangerouslySetInnerHTML={{ __html: editorHtml }}></h2>
              </div>
          </SwiperSlide>
        ))

      ) : (
        <SwiperSlide className="mainimg">
          <img
            src="./images/462752.jpg"
            alt="Default Image"
          />
        </SwiperSlide>
      )}
    </Swiper>
      </div>
    </div>

{/* buttom options */}
        
<nav className="navbar fixed-bottom navbar-light bg-light footer">
  <div className="container py-2">
    <div className="d-flex justify-content-start align-items-center  ms-2">
    {uploadedimages ? (
    imageFiles.map((image, index) => (
      <div className={`${styles.imgbox} me-3 position-relative`} key={index} onClick={() => getmainimage(image)}>   
      <img
          src={URL.createObjectURL(image)}
          className="border border-info rounded border-3"
      />
        <button onClick={() => handleRemoveImage(index)} className='position-absolute top-0 end-0 btn delete'><i className="fa-regular fa-trash-can fa-2xs fs-5 text-info"></i></button>
    </div>
  ))
) : (
    <div className={`${styles.imgbox} py-2`}>  
      <img
        src="./images/462752.jpg"
        className="border border-info rounded border-3"
      />
    </div>

)}
    </div>
    <button className='btn btn-info m-left-auto text-muted fs-5 fw-bold'>Download!</button>
  </div>
</nav>


</div>


  )
}
