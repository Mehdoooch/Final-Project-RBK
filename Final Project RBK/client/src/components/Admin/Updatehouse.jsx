import React, { useState } from 'react';
import { useNavigate, useLocation, useParams, Navigate } from 'react-router-dom';
import axios from 'axios';
import "./Admin.css"
import CloudinaryUpload from './CloudinaryUpload';

// import from material UI
import { Box } from '@mui/material';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import BrowserUpdatedIcon from '@mui/icons-material/BrowserUpdated';
import Button from '@mui/material/Button';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
// import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';



function Updatehouse() {
    const navigate = useNavigate();
    const location = useLocation();
    
    const { editrow } = location.state || {};
    const { id } = useParams();

    if (!editrow) {
        return <div>Loading...</div>;
    }

    const [uptitle, setTitleup] = useState(editrow.title);
    const [updescription, setDescriptionup] = useState(editrow.description);
    const [upprice, setPriceup] = useState(editrow.price);
    const [upregion, setRegionup] = useState(editrow.region);
    const [uplocalisation, setLocalisationup] = useState(editrow.localisation);
    const [upsurface, setSurfaceup] = useState(editrow.surface);
    const [uproom, setRoomup] = useState(editrow.room);
    const oldUrls = editrow?.images?.map(image => image.url) || [];
    const [upimages, setImagesup] = useState(oldUrls);
    const [loading, setLoading] = useState(false);
    const [addImageMode,setAddImageMode]=useState(false);

    // function for updating a row of house
    function handleSubmit(event) {
        event.preventDefault();
        axios.put(`http://localhost:8080/house/update/${id}`, {
            title: uptitle,
            description: updescription,
            price: upprice,
            region: upregion,
            localisation: uplocalisation,
            surface: upsurface,
            room: uproom,
            images: upimages,
        })
            .then(res => {
                console.log(res.data);
                navigate('/admin/houses');
            })
            .catch(err => console.log(err));
    }

    const handleRemoveImage = (index) => {
        setImagesup((prevURLs) => prevURLs.filter((_, i) => i !== index));
    };
   
    
    const handleAddImages = () => {
        setAddImageMode(true)
    }

    return (
        <div className='container-house'>
            <h1 className="detailhouse">Update house</h1>
            <form onSubmit={handleSubmit} className="bodyForm">

                <label className="label-house" htmlFor="title">Title</label>
                <input
                    className="input-prophouse"
                    type="text"
                    name="title"
                    value={uptitle}
                    onChange={(e) => setTitleup(e.target.value)}
                />

                <label className="label-house" htmlFor="room">Rooms</label>
                <input
                    className="input-prophouse"
                    type="text"
                    name="room"
                    value={uproom}
                    onChange={(e) => setRoomup(e.target.value)}
                    required
                />

                <label className="label-house" htmlFor="Region">Region</label>
                <input
                    className="input-prophouse"
                    type="text"
                    name="Region"
                    value={upregion}
                    onChange={(e) => setRegionup(e.target.value)}
                    required
                />

                <label className="label-house" htmlFor="surface">Surface</label>
                <input
                    className="input-prophouse"
                    type="text"
                    name="surface"
                    value={upsurface}
                    onChange={(e) => setSurfaceup(e.target.value)}
                    required
                />

                <label className="label-house" htmlFor="Price">Price</label>
                <input
                    className="input-prophouse"
                    type="text"
                    name="Price"
                    value={upprice}
                    onChange={(e) => setPriceup(e.target.value)}
                    required
                />

                <label className="label-house" htmlFor="localisation">Localisation</label>
                <input
                    className="input-prophouse"
                    type="text"
                    name="localisation"
                    value={uplocalisation}
                    onChange={(e) => setLocalisationup(e.target.value)}
                    required
                />

                <label className="label-house" htmlFor="description">Description</label>
                <textarea
                    name="description"
                    className="input-prophouse"
                    cols="30"
                    rows="10"
                    value={updescription}
                    onChange={(e) => setDescriptionup(e.target.value)}
                    required
                ></textarea>

                <Box sx={{ display: 'flex', gap: '5px' }}>
                    {upimages.map((img, index) => (
                        <div key={index} className="uploaded-image-wrapper">
                            <img
                                src={img}
                                alt={`Uploaded ${index + 1}`}
                                className="image-house-uploaded"
                            />
                            <FontAwesomeIcon
                                icon={faTrashAlt}
                                style={{ color: "#df2020" }}
                                onClick={() => handleRemoveImage(index)}
                                className="remove-image-icon"
                            />


                        </div>
                    ))}
                    <div className="uploaded-image-wrapper">
                        <img
                            src={"/add.png"}
                            alt="Add Image"
                            style={{ width: "35px",height:"50px" }}
                            onClick={() => handleAddImages()}
                        />
                       
                    </div>
                </Box>

               {addImageMode && <CloudinaryUpload imageURLs={upimages} setImageURLs={setImagesup} loading={loading} setLoading={setLoading} />
}
                <div className="button-container">
                    <Button variant="contained" type="submit" style={{ width: '200px', marginLeft: '0' }} endIcon={<BrowserUpdatedIcon />}>Update</Button>

                    <Button variant="contained" color="error" endIcon={<CancelOutlinedIcon />} onClick={() => navigate("/admin/houses")}>Cancel</Button>
                </div>
            </form>
        </div>
    );
}

export default Updatehouse;