import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import ShowImage from './ShowImage';
//import Dashboard from "./Dashboard.jsx"
import "./Admin.css"

// import from material UI
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import EditIcon from '@mui/icons-material/Edit';
import PreviewIcon from '@mui/icons-material/Preview';
import DeleteIcon from '@mui/icons-material/DeleteOutlined';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { DataGrid, GridActionsCellItem } from '@mui/x-data-grid';

function Allhouses() {

    const [house, setHouse] = useState([]);
    const [searchhouse, setSearchhouse] = useState('')
    const [editrow, setEditrow] = useState({})
    const navigate = useNavigate();


    // function for getting data from table house
    const fetchData = async () => {
        axios.get('http://localhost:8080/house/getAll')
            .then(res => setHouse(res.data))
            .catch(err => console.log(err))
    };

    //-useEffect for rendering data in data grid (list house)
    useEffect(() => {
        fetchData();
    }, [])

    // Function to delete rows in the data grid (list house)
    const handleDelete = (row) => {
        if (window.confirm(`Are you sure you want to delete the house with title : ${row.title} ?`)) {
            const allafterdel = house.filter(hou => hou.id !== row.id)

            axios.delete(`http://localhost:8080/house/delete/` + row.id)
                .then(res => {
                    console.log("house Deleted")
                    setHouse(allafterdel);
                    setSearchhouse('')
                })
                .catch(err => console.log(err));
        }
    }
 // function to navigate to the DetailsPage component
    const handlePreview=(row)=>{
        setEditrow(row)
        navigate(`/detailsPage/${row.id}`, { state: { detailsrow: row } })
    }

    // function to navigate to the update component
    const handleEditClick = (row) => {
        setEditrow(row)
        navigate(`/admin/houses/update/${row.id}`, { state: { editrow: row } })
    }

    const columns = [
        { field: 'id', headerName: 'ID',headerAlign: 'center', headerClassName: 'custom-header', width: 3 },
        { field: 'title', headerName: 'Title',headerAlign: 'center', headerClassName: 'custom-header', width: 120 },
        { field: 'description', headerName: 'Description',headerAlign: 'center', headerClassName: 'custom-header', width: 300 },
        { field: 'price', headerName: 'Price',headerAlign: 'center', headerClassName: 'custom-header', width: 80 },
        { field: 'region', headerName: 'Region',headerAlign: 'center', headerClassName: 'custom-header', width: 100 },
        { field: 'localisation', headerName: 'Localisation',headerAlign: 'center', headerClassName: 'custom-header', width: 150 },
        { field: 'surface', headerName: 'Surface',headerAlign: 'center', headerClassName: 'custom-header', width: 80 },
        { field: 'room', headerName: 'Room',headerAlign: 'center', headerClassName: 'custom-header', width: 60 },
        { field: 'images', headerName: 'Images',headerAlign: 'center', headerClassName: 'custom-header', width: 200, renderCell: (params) => <ShowImage params={params} /> },
        {
            field: 'actions', type: 'actions', headerName: 'Actions',headerAlign: 'center', headerClassName: 'custom-header', width: 120, cellClassName: 'actions',
            renderCell: (params) => {
                return [
                    <GridActionsCellItem
                        icon={<EditIcon />}
                        label="Edit"
                        title="Edit" 
                        className="textPrimary"
                        onClick={() => handleEditClick(params.row)}
                        color="inherit"
                    />,
                    <GridActionsCellItem
                        icon={<CalendarMonthIcon style={{ color: 'blue' }}  />}
                        label="Reservations"
                        title="Reservations" 
                        className="textPrimary"
                        // onClick={() => handleShowReservations(params.row)}
                        color="inherit"
                    />,
                    <GridActionsCellItem
                        icon={<DeleteIcon style={{ color: '#ec1212' }} />}
                        label="Delete"
                        title="Delete" 
                        onClick={() => handleDelete(params.row)}
                        color="inherit"
                    />,
                    <GridActionsCellItem
                    icon={<PreviewIcon style={{ color: 'green' }}  />}
                    label="Preview"
                    title="Preview" 
                    onClick={() => handlePreview(params.row)}
                    color="inherit"
                />,
                ];
            },
        },
    ];

    // Function to filter rows based on search query
    const filtered = house.filter((row) => {

        const titleHouse = row.title.toLowerCase();
        const searchText = searchhouse.toLowerCase();
        // Check if the (title and description) match the search query
        return (
            titleHouse.includes(searchText) ||
            row.description?.toLowerCase().includes(searchText) ||
            row.region?.toLowerCase().includes(searchText)
        );
    })

    return (
        <div className='house-list'>
            <h1 className='All-Houses'>Houses </h1>
            <Box sx={{ height: '70%', width: '100%' }}>
                <div className='container-grid'>
                    <TextField sx={{ '& .MuiInputBase-root': { height: '50px', padding: '10px 8px',borderColor: '#06ee3c' } }} fullWidth label="Search house..." type="search" value={searchhouse} onChange={(e) => setSearchhouse(e.target.value)}
                    />
                    <DataGrid
                        rows={filtered}
                        columns={columns}
                        getRowId={(row) => row.id}
                        disableSelectionOnClick
                        rowHeight={30}
                        initialState={{
                            pagination: {
                                paginationModel: {
                                    pageSize: 10,
                                },
                            },
                        }}
                        pageSizeOptions={[10]}
                        RowSelectionOnClick
                        sx={{
                            '& .MuiDataGrid-columnHeaders': {
                              backgroundColor: '#1976d2',  
                              color: '#06ee3c',              
                              fontSize: '16px',            
                              fontWeight: 'bold',          
                              textAlign:'center',
                            },
                          }}
                    />
                </div>
            </Box>
        </div >
    );

}

export default Allhouses;

