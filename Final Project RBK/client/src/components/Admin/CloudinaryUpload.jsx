import React, { useState } from "react";
import axios from "axios";
import "./Admin.css"
// import Dashboard from "./Dashboard.jsx"

// import from material UI
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';


const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
});

function CloudinaryUpload({imageURLs,setImageURLs,loading,setLoading}) {
       

    const cloudName = 'dpmyvbsok';
    const uploadPreset = 'upload-img';

    const handleImageUpload = async (e) => {
        const files = e.target.files;

        if (!files.length) {
            alert('Please select at least one image file');
            return;
        }

        const validImages = Array.from(files).filter(file => file.type.startsWith('image/'));

        if (!validImages.length) {
            alert('Please select valid image files');
            return;
        }

        setLoading(true);

        try {
            const uploadPromises = validImages.map(file => {
                const formData = new FormData();
                formData.append('file', file);
                formData.append('upload_preset', uploadPreset);

                return axios.post(`https://api.cloudinary.com/v1_1/${cloudName}/image/upload`, formData)
                    .then(response => response.data.secure_url)
                    .catch(error => {
                        console.error('Error uploading image:', error.response || error.message);
                        return null;
                    });
            });

            const uploadedURLs = await Promise.all(uploadPromises);
            const successfulUploads = uploadedURLs.filter(url => url !== null);

            if (successfulUploads.length !== validImages.length) {
                alert('Some images failed to upload. Only successfully uploaded images will be added.');
            }

            setImageURLs(prevURLs => [...prevURLs, ...successfulUploads]);
        } catch (error) {
            console.error('Error uploading images:', error);
            alert('Failed to upload images');
        } finally {
            setLoading(false);
        }
    };

    const handleRemoveImage = (index) => {
        setImageURLs(prevURLs => prevURLs.filter((_, i) => i !== index));
    };

    return (
         <div>
                       
                        <Button
                            component="label"
                            role={undefined}
                            variant="contained"
                            tabIndex={-1}
                            startIcon={<CloudUploadIcon />}
                        >
                            Upload images
                            <VisuallyHiddenInput
                                type="file"
                                accept="image/*"
                                onChange={handleImageUpload}
                                multiple
                            />
                        </Button>

                        {loading && <p>Uploading...</p>}

                        {imageURLs.length > 0 && (
                            <div className="uploaded-images-container">
                                {imageURLs.map((url, index) => (
                                    <div key={index} className="uploaded-image-wrapper">
                                        <img src={url} alt={`Uploaded ${index + 1}`} className="image-house-uploaded" />
                                        <FontAwesomeIcon icon={faTrashAlt} style={{ color: "#df2020", }} onClick={() => handleRemoveImage(index)} className="remove-image-icon" />
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
    );
}

export default CloudinaryUpload;