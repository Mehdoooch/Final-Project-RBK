import React, { useState } from 'react';
import { useNavigate, useLocation, useParams } from 'react-router-dom';
import axios from 'axios';
import "./Admin.css"
import ShowImage from './ShowImage';
import CloudinaryUpload from './CloudinaryUpload';

// import from material UI
import { Box } from '@mui/material';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import BrowserUpdatedIcon from '@mui/icons-material/BrowserUpdated';
import Button from '@mui/material/Button';

function Updatehouse() {
    const navigate = useNavigate();
    const location = useLocation();
    const { editrow } = location.state || {};
    const { id } = useParams();
    const [uptitle, setTitleup] = useState(editrow.title);
    const [updescription, setDescriptionup] = useState(editrow.description);
    const [upprice, setPriceup] = useState(editrow.price);
    const [upregion, setRegionup] = useState(editrow.region);
    const [uplocalisation, setLocalisationup] = useState(editrow.localisation);
    const [upsurface, setSurfaceup] = useState(editrow.surface);
    const [uproom, setRoomup] = useState(editrow.room);
    const [upimages, setImagesup] = useState(editrow.images);
    const [loading, setLoading] = useState(false);


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

        })
            .then(res => {
                console.log(res.data);
                navigate('/admin/houses');
            })
            .catch(err => console.log(err))
    }


    return (
        <div className='container-house'>
            <h1 className="detailhouse">Update house</h1>
            <form onSubmit={handleSubmit} className="bodyForm">

                <label htmlFor="title">Title</label>
                <input
                    type="text"
                    name="title"
                    value={uptitle}
                    defaultValue={editrow.title}
                    onChange={(e) => setTitleup(e.target.value)}
                />

                <label className="label-house" htmlFor="room">Rooms</label>
                <input
                    className="input-prophouse"
                    type="text"
                    defaultValue={editrow.room}
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
                    defaultValue={editrow.region}
                    value={upregion}
                    onChange={(e) => setRegionup(e.target.value)}
                    required
                />

                <label className="label-house" htmlFor="surface">Surface</label>
                <input
                    className="input-prophouse"
                    type="text"
                    defaultValue={editrow.surface}
                    name="surface"
                    value={upsurface}
                    onChange={(e) => setSurfaceup(e.target.value)}
                    required
                />

                <label className="label-house" htmlFor="Price">Price</label>
                <input
                    className="input-prophouse"
                    type="text"
                    defaultValue={editrow.price}
                    name="Price"
                    value={upprice}
                    onChange={(e) => setPriceup(e.target.value)}
                    required
                />
                <label className="label-house" htmlFor="localisation">Localisation</label>
                <input
                    className="input-prophouse"
                    type="text"
                    defaultValue={editrow.localisation}
                    name="localisation"
                    value={uplocalisation}
                    onChange={(e) => setLocalisationup(e.target.value)}
                    required
                />

                <label className="label-house" htmlFor="description">Description</label>
                <textarea
                    name="description"
                    className="input-prophouse"
                    id="desc"
                    cols="30"
                    rows="10"
                    defaultValue={editrow.description}
                    value={updescription}
                    onChange={(e) => setDescriptionup(e.target.value)}
                    required
                ></textarea>
                <CloudinaryUpload imageURLs={upimages} setImageURLs={setImagesup} loading={loading} setLoading={setLoading} />

                {/* <Box sx={{ display: 'flex', gap: '5px' }}>
                    {editrow.images.map((img) => (
                        <img
                            key={img.url}
                            src={img.url}
                            alt={`Image of ${editrow.title}`}
                            style={{ width: '100px', height: '100px', objectFit: 'cover', cursor: 'pointer' }}

                        />
                    ))}
                </Box> */}

                <div className="button-container">
                    <Button variant="contained" type="submit" style={{ width: '200px', marginLeft: '0' }} endIcon={<BrowserUpdatedIcon />}>Update</Button>

                    <Button variant="contained" color="error" endIcon={<CancelOutlinedIcon />} onClick={() => navigate("/admin/houses")}>Cancel</Button>
                </div>

            </form>
        </div>
    );
}

export default Updatehouse;