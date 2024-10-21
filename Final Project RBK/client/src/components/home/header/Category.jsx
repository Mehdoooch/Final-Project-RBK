import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function Category({ cat, setCat, filterByCateg, setFilterByCateg, data = [] }) {
  
  console.log("Data", data);

  
  const handleCategoryChange = (event) => {
    const selectedCategory = event.target.value;
    setCat(selectedCategory);

    if (selectedCategory === '') {
      setFilterByCateg(data); 
    } else {
      setFilterByCateg(data.filter((item) => item.room === selectedCategory));
    }
  };

 
  const getUniqueCategories = (data) => {
    const allCategories = data.map((item) => item.room);
    return ['',...new Set(allCategories)];
  };

  const uniqueCategories = data.length ? getUniqueCategories(data) : [];
  console.log('this unique category',uniqueCategories);
  
  return (
    <FormControl sx={{ m: 1, minWidth: 150 }} size="small">
      <InputLabel id="select-category-label">CATEGORY</InputLabel>
      <Select
        labelId="select-category-label"
        id="select-category"
        value={cat || ''}  
        label="Category"
        onChange={handleCategoryChange}
      >
        <MenuItem value="">
          <em>All</em>
        </MenuItem>
        {uniqueCategories.map((room, index) => (
          <MenuItem key={index} value={room}>
            {room} 
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
