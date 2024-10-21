const db = require("../orm/Models/index.js");

//getting all the users
const getAllUsers = async (req, res) => {
  try {
    const result = await db.User.findAll({});
    res.status(200).send(result);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};
//getting just one specific User by id
const getOneUser = async (req, res) => {
  try {
    const id = req.params.id;
    const result = await db.User.findOne({ where: { id } });
    if (result.length === 0) {
      res.status(404).send({ Message: `User with id ${id} not found !` });
    } else res.status(200).send(result);
  } catch (error) {
    console.error("Error fetching User:", error);
    res.status(500).send({ error: "Internal Server Error" });
  }
};

//add a new user in database

const addUser = async (req, res) => {
  try {
    const body = req.body;
    const result = await db.User.create(body);
    res
      .status(201)
      .send({ User: result, message: "User created successfully!" });
  } catch (error) {
    res.status(500).send(error);
  }
};

// delete a user from database by his id
const deleteUser = async (req, res) => {
  try {
    const id = req.params.id;
    const delUser = await db.User.destroy({ where: { id } });
    res.status(200).send({ message: "User deleted successfully!" });
  } catch (error) {
    res.status(500).send(error);
  }
};

//update details of one house by id
const updateUser = async (req, res) => {
  try {
    const { username, email, password, image } = req.body;
    const id = req.params.id;
    const upUser = await db.User.update(
      {
        username: username,
        email: email,
        password: password,
        image: image,
      },
      { where: { id } }
    );
    const updatedUser = await db.User.findOne({ where: { id } });
    res
      .status(201)
      .send({ User: updatedUser, message: "User updated successfully!" });
  } catch (error) {
    res.status(500).send(error);
  }
};

//----------------------------------------------------------------------------------------------------------------------------------------
// Add House to the favorite list of a user
// const addhouseToList = async (req, res) => {
//   const user = await db.User.findByPk(req.params.id);
//   const house = await db.house.findByPk(req.body.houseId);
//   await user.addhouse(house);
//   res.json({ message: 'house added to favorites' });
// }

// // Get all favorite House for a user
// const getHouseFromList = async (req, res) => {
//   try {
//     const user = await db.User.findByPk(req.params.id, {
//       include: {
//         model: db.house,
//         through: {
//           attributes: [],
//         },
//       },
//     });

//     if (!user) {
//       return res.status(404).json({ message: 'User not found' });
//     }

//     user.House.length === 0 ? res.json({ message: "No House added for this user" }) : res.json(user.House);  // Send back the list of favorite House
//   } catch (error) {
//     console.error('Error fetching favorite House:', error);  // Log error to console for debugging
//     res.status(500).json({ message: 'Error fetching favorite House', error: error.message });  // Return detailed error
//   }
// }

// // Remove a house from user's favorite list
// const deletehouseFromList = async (req, res) => {
//   try {
//     const { userId, houseId } = req.params;

//     // Find the user and house
//     const user = await db.User.findByPk(userId);
//     const house = await db.house.findByPk(houseId);

//     if (!user || !house) {
//       return res.status(404).json({ message: 'User or house not found' });
//     }

//     // Remove the house from the user's favorites
//     await user.removehouse(house);

//     res.json({ message: 'house removed from favorites' });
//   } catch (error) {
//     console.error('Error removing house from favorites:', error);
//     res.status(500).json({ message: 'Error removing house from favorites', error: error.message });
//   }
// }
//--------------------------------------------------------------------------------------------------------------------------

module.exports = {
  getAllUsers,
  getOneUser,
  addUser,
  deleteUser,
  updateUser /*addhouseToList, getHouseFromList, deletehouseFromList */,
};
