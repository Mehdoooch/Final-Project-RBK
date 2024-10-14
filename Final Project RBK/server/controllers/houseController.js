const db = require("../orm/Models/index.js")

//getting all the Houses
const getAllHouses = async (req, res) => {
  try {
    const result = await db.House.findAll({
      include: [{
        model: db.ImgHouse,
        attributes:['id','url'],
        as: 'images',
        required: false
      }]
    })
    res.status(200).send(result);
  }
  catch (error) {
    console.log(error)
    res.status(500).send(error)
  }
}
//getting just one specific House by id
const getOneHouse = async (req, res) => {
  try {
    const id = req.params.id;
    const result = await db.House.findOne({ 
      where: { id },
      include: [{
        model: db.ImgHouse,
        attributes:['id','url'],
        as: 'images',
        required: false
      }]

     })
    if (result.length === 0) {
      res.status(404).send({ "Message": `House with id ${id} not found !` })
    } else res.status(200).send(result)
  }
  catch (error) {
    console.error('Error fetching House:', error);
    res.status(500).send({ error: 'Internal Server Error' });
  }
}

//add a new House in database
const addHouse = async (req, res) => {
  const { title, description, price,region,localisation,surface,room,imghouses } = req.body;

  try {
   
    const newHouse = await db.House.create({
      title,
      description,
      price,
      region,
      localisation,
      surface,
      room,
    });
   
    const imageRecords = imghouses.map(url => ({
      url,
      houseId: newHouse.id,
    }));

    await db.ImgHouse.bulkCreate(imageRecords);

    return res.status(201).json({
      message: 'House added successfully.',
      House: newHouse,
      images: imageRecords,
    });
  } catch (error) {
    console.error('Error adding House:', error);
    return res.status(500).json({ message: 'Internal server error.' });
  }
};



// delete a House from database by his id
const deleteHouse = async (req, res) => {
  try {
    const id = req.params.id;
    const delHouse = await db.House.destroy({ where: { id } })
    res.status(200).send({ message: 'House deleted successfully!' })
  }
  catch (error) {
    res.status(500).send(error)
  }
};

//update details of one house by id
const updateHouse = async (req, res) => {
  try {
    const { title, description,price,region,localisation,surface, room } = req.body;
    const id = req.params.id;
    const upHouse = await db.House.update(
      {
        title:title,
        description:description,
        price:price,
        region:region,
        localisation:localisation,
        surface:surface,
        room:room
      }, { where: { id } }
    )
    const updatedHouse = await db.House.findOne({ where: { id } })
    res.status(201).send({ House: updatedHouse, message: 'House updated successfully!' })
  }
  catch (error) {
    res.status(500).send(error)
  }
};
module.exports = { getAllHouses, getOneHouse, addHouse, deleteHouse, updateHouse}