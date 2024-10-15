import React, { useState } from 'react';
import { Box, Dialog, DialogContent, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import "./Admin.css"

// component for showing images in the list fo houses
const ShowImage = ({ params }) => {
  const [open, setOpen] = useState(false);
  const [selectedImg, setSelectedImg] = useState(null);

  const handleClickOpen = (imgUrl) => {
    setSelectedImg(imgUrl);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedImg(null);
  };

  return (
    <div>
      <Box sx={{ display: 'flex', gap: '5px' }}>
        {params.value.map((img) => (
          <img
            key={img.url} 
            src={img.url}
            alt={`Image of ${params.row.title}`}
            style={{ width: '50px', height: '50px', objectFit: 'cover', cursor: 'pointer' }}
            onClick={() => handleClickOpen(img.url)}
          />
        ))}
      </Box>

      <Dialog open={open} onClose={handleClose}>
        <DialogContent>
          <IconButton
            aria-label="close"
            onClick={handleClose}
            sx={{
              position: 'absolute',
              right: 8,
              top: 8,
              color: 'red',
            }}
          >
            <CloseIcon />
          </IconButton>
          {selectedImg && (
            <img
              src={selectedImg}
              alt="Selected"
              style={{ width: '500px', height: '500px' }}
            />
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ShowImage;