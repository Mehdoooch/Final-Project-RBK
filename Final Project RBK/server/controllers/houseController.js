const db = require("../orm/Models/index.js")


//getting all the Houses
const getAllHouses = async (req, res) => {
  try {
    const result = await db.House.findAll({})
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
    const result = await db.House.findOne({ where: { id } })
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
  try {
    const body = req.body;
    const result = await db.House.create(body)
    res.status(201).send({ House: result, message: 'House created successfully!' })
  }
  catch (error) {
    res.status(500).send(error)
  }
}

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