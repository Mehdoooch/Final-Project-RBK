const db = require("../orm/Models/index.js")

//getting all images
const getAllImages = async (req, res) => {
    try {
        const result = await db.ImgHouse.findAll({})
        res.status(200).send(result);
    }
    catch (error) {
        console.log(error)
        res.status(500).send(error)
    }
}
//getting just one specific image by id
const getOneImage = async (req, res) => {
    try {
        const id = req.params.id;
        const result = await db.ImgHouse.findOne({ where: { id } })
        if (result.length === 0) {
            res.status(404).send({ "Message": `Image with id ${id} not found !` })
        } else res.status(200).send(result)
    }
    catch (error) {
        console.error('Error fetching image:', error);
        res.status(500).send({ error: 'Internal Server Error' });
    }
}

//add a new Image in database
const addImage = async (req, res) => {
    try {
        const body = req.body;
        const result = await db.ImgHouse.create(body)
        res.status(201).send({ Image: result, message: 'Image added successfully!' })
    }
    catch (error) {
        res.status(500).send(error)
    }
}

// delete a Image from database by his id
const deleteImage = async (req, res) => {
    try {
        const id = req.params.id;
        const delImage = await db.ImgHouse.destroy({ where: { id } })
        res.status(200).send({ message: 'Image deleted successfully!' })
    }
    catch (error) {
        res.status(500).send(error)
    }
};
module.exports = { getAllImages, getOneImage, addImage, deleteImage }