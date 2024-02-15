import React, { useState } from 'react'

const ImageUploader = () => {

    const [selectedImage, setSelectedImage] = useState(null);

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if(file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setSelectedImage(reader.result);
            };
            reader.readAsDataURL(file);
        }
    }

  return (
    <div>
        <div style={{margin: "1rem"}}><input type='file' accept='image/*' onChange={handleImageChange}/></div>
        {
            selectedImage && ( 
                <div>
                    <img src={selectedImage} alt='selected' style={{maxWidth: '200px', maxHeight: '200px'}}/>
                </div>
            )
        }
    </div>
  )
}

export default ImageUploader;