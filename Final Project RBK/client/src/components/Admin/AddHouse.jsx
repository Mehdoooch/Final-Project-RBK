import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Admin.css"
// import Dashboard from "./Dashboard.jsx"
import CloudinaryUpload from "./CloudinaryUpload";

// import from material UI
import SendIcon from '@mui/icons-material/Send';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
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


function AddHouse() {
    // Our states 
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [region, setRegion] = useState("");
    const [localisation, setLocalisation] = useState("");
    const [surface, setSurface] = useState("");
    const [room, setRoom] = useState("");
    const [imageURLs, setImageURLs] = useState([]);
    const [loading, setLoading] = useState(false);
    const [formLoading, setFormLoading] = useState(false);
    const navigate = useNavigate();


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


    const handleSubmit = async (e) => {
        e.preventDefault();

        if (imageURLs.length === 0) {
            console.log('Please upload at least one image before submitting.');
            return;
        }

        setFormLoading(true);

        try {
            const response = await axios.post('http://localhost:8080/house/add', {
                title,
                description,
                price,
                region,
                localisation,
                surface,
                room,
                imghouses: imageURLs,
            });

            console.log('house added:', response.data);
            setTitle("");
            setDescription("");
            setPrice("");
            setRegion("");
            setLocalisation("");
            setSurface("");
            setRoom("");
            setImageURLs([]);
            navigate("/admin/houses");
        } catch (error) {
            console.error('Error saving House to database:', error.response || error.message);
            alert('Failed to save house to database');
        } finally {
            setFormLoading(false);
        }
    };

    return (
        <div>

            <div className="container-house">
                <h1 className="detailhouse">Add New House</h1>
                <form className="bodyForm" onSubmit={handleSubmit}>

                    <label className="label-house" htmlFor="title">Title</label>
                    <input
                        className="input-prophouse"
                        type="text"
                        placeholder="Enter Title"
                        name="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />

                    <label className="label-house" htmlFor="room">Rooms</label>
                    <input
                        className="input-prophouse"
                        type="text"
                        placeholder="Enter rooms"
                        name="room"
                        value={room}
                        onChange={(e) => setRoom(e.target.value)}
                        required
                    />

                    <label className="label-house" htmlFor="Region">Region</label>
                    <input
                        className="input-prophouse"
                        type="text"
                        name="Region"
                        placeholder="Enter Region"
                        value={region}
                        onChange={(e) => setRegion(e.target.value)}
                        required
                    />

                    <label className="label-house" htmlFor="surface">Surface</label>
                    <input
                        className="input-prophouse"
                        type="text"
                        placeholder="Enter surface"
                        name="surface"
                        value={surface}
                        onChange={(e) => setSurface(e.target.value)}
                        required
                    />

                    <label className="label-house" htmlFor="Price">Price</label>
                    <input
                        className="input-prophouse"
                        type="text"
                        placeholder="Enter Price"
                        name="Price"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        required
                    />
                    <label className="label-house" htmlFor="localisation">Localisation</label>
                    <input
                        className="input-prophouse"
                        type="text"
                        placeholder="Enter localisation"
                        name="localisation"
                        value={localisation}
                        onChange={(e) => setLocalisation(e.target.value)}
                        required
                    />

                    <label className="label-house" htmlFor="description">Description</label>
                    <textarea
                        name="description"
                        className="input-prophouse"
                        id="desc"
                        cols="30"
                        rows="10"
                        placeholder="Enter Description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        required
                    ></textarea>
                    <CloudinaryUpload imageURLs={imageURLs} setImageURLs={setImageURLs} loading={loading} setLoading={setLoading}/>
                    
                    {formLoading && <p>Adding...</p>}
                    <div className="button-container">
                        {
                            <Button variant="contained" type="submit" style={{ width: '200px', marginLeft: '0' }} disabled={loading || formLoading || imageURLs.length === 0} endIcon={<SendIcon />}>
                                {formLoading ? 'Adding...' : 'Add'}
                            </Button>
                        }
                            <Button variant="contained" color="error" endIcon={<CancelOutlinedIcon />} onClick={() => navigate("/admin/houses")}>Cancel</Button>
                        
                    </div>
                </form>
            </div>
        </div>
    );
}

export default AddHouse;