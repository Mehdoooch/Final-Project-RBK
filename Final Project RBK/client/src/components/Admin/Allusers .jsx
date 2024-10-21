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

function Allusers() {
    const [user, setUser] = useState([]);
    const [searchUser, setSearchUser] = useState('')
    const [editrow, setEditrow] = useState({})
    const navigate = useNavigate();


    // function for getting data from table user
    const fetchData = async () => {
        axios.get('http://localhost:8080/user/getAll')
            .then(res => setUser(res.data))
            .catch(err => console.log(err))
    };

    //-useEffect for rendering data in data grid (list user)
    useEffect(() => {
        fetchData();
    }, [])

    // Function to delete rows in the data grid (list user)
    const handleDelete = (row) => {
        if (window.confirm(`Are you sure you want to delete <<< ${row.username.toUpperCase()} >>> ?`)) {
            const allafterdel = user.filter(hou => hou.id !== row.id)

            axios.delete(`http://localhost:8080/user/delete/` + row.id)
                .then(res => {
                    console.log("User Deleted successfully.")
                    setUser(allafterdel);
                    setSearchUser('')
                })
                .catch(err => console.log(err));
        }
    }
    // function to navigate to the user profile page component
    // const handlePreview=(row)=>{
    //     setEditrow(row)
    //     navigate(`/profile/${row.id}`, { state: { detailsrow: row } })
    // }

    // function to navigate to the update component
    // const handleEditClick = (row) => {
    //     setEditrow(row)
    //     navigate(`/admin/users/update/${row.id}`, { state: { editrow: row } })
    // }

    const columns = [
        { field: 'id', headerName: 'ID', width: 3 },
        { field: 'username', headerName: 'User Name',headerAlign: 'center', headerClassName: 'custom-header', width: 100 },
        { field: 'email', headerName: 'Email',headerAlign: 'center', headerClassName: 'custom-header', width: 200 },
        { field: 'password', headerName: 'Password',headerAlign: 'center', headerClassName: 'custom-header', width: 200 },
        {field: 'images', headerName: 'Image Profile',headerAlign: 'center', headerClassName: 'custom-header', width: 120, renderCell: (params) => {
                return [
                    <Box sx={{ display: 'flex', gap: '10px' }}>
                        
                            <img
                                src={params.row.image}
                                alt={`Image of ${params.row.username}`}
                                style={{ width: '50px', height: '50px', objectFit: 'cover', borderRadius: '50%', cursor: 'pointer' }}
                                // onClick={() => handleClickOpen(img.url)}
                            />
                        
                    </Box>
                    
                ]}
            },
        {
            field: 'actions', type: 'actions', headerName: 'Actions', width: 120, cellClassName: 'actions',
            renderCell: (params) => {
                return [
                    // <GridActionsCellItem
                    //     icon={<EditIcon />}
                    //     label="Edit"
                    //     title="Edit" 
                    //     className="textPrimary"
                    //     onClick={() => handleEditClick(params.row)}
                    //     color="inherit"
                    // />,
                    <GridActionsCellItem
                        icon={<CalendarMonthIcon style={{ color: 'blue' }}  />}
                        label="Reservations"
                        title="Reservations"
                        className="textPrimary"
                        // onClick={() => handleShowReservations(params.row)}
                        color="inherit"
                    />,
                    <GridActionsCellItem
                        icon={<PreviewIcon style={{ color: 'green' }}  />}
                        label="Preview"
                        title="Preview"
                        // onClick={() => handlePreview(params.row)}
                        color="inherit"
                    />,
                    <GridActionsCellItem
                    icon={<DeleteIcon style={{ color: '#ec1212' }} />}
                    label="Delete"
                    title="Delete"
                    onClick={() => handleDelete(params.row)}
                />,
                ];
            },
        },
    ];

    // Function to filter rows based on search query
    const filtered = user.filter((row) => {

        const userName = row.username.toLowerCase();
        const searchText = searchUser.toLowerCase();
        // Check if the (title and description) match the search query
        return (
            userName.includes(searchText) || row.email?.toLowerCase().includes(searchText)
        )
    })

    return (
        <div className='user-list'>
            <h1 className='All-Users'> Users </h1>
            <Box sx={{ height: '70%', width: '100%' }}>
                <div className='container-grid'>
                    <TextField sx={{ '& .MuiInputBase-root': { height: '50px', padding: '10px 8px',borderColor: 'red' } }} fullWidth label="Search user..." type="search" value={searchUser} onChange={(e) => setSearchUser(e.target.value)}
                    />
                    <DataGrid
                        rows={filtered}
                        columns={columns}
                        getRowId={(row) => row.id}
                        disableSelectionOnClick
                        rowHeight={50}
                        initialState={{
                            pagination: {
                                paginationModel: {
                                    pageSize: 20,
                                },
                            },
                        }}
                        pageSizeOptions={[20]}
                        RowSelectionOnClick
                        sx={{
                            '& .MuiDataGrid-columnHeaders': {
                              backgroundColor: '#1976d2',  
                              color: 'red',              
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

export default Allusers;