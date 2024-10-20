const db = require("../orm/Models/index");

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const secret = process.env.JWT_SECRET;

const signUp = async (req, res) => {
  try {
    const { username, email, image, password } = req.body;
    console.log(username, email, image, password);

    const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[^_\s]{6,}$/.test(
      password
    );
    const existingUser = await db.User.findOne({ where: { email } });

    if (existingUser) {
      return res.status(400).send({ message: "Email already in use" });
    }

    if (!isPasswordValid) {
      return res
        .status(400)
        .send({ message: "Password does not meet the criteria" });
    }

    const newUser = await db.User.create({
      username,
      email,
      image,
      password: await bcrypt.hash(password, 10),
    });

    const token = jwt.sign(
      {
        userid: newUser.userid,
        email: newUser.email,
        username: newUser.username,
        image: newUser.image,
      },
      secret
    );
    res.status(201).send({ token, message: "Signup successful" });
  } catch (err) {
    console.error(err);
    res.status(500).send({ message: "Server error", error: err.message });
  }
};

const logIn = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await db.User.findOne({ where: { email } });

    if (!user) {
      return res.status(404).send({ message: "Email not found" });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(401).send({ message: "Invalid credentials" });
    }

    const token = jwt.sign(
      {
        userid: user.userid,
        email: user.email,
        username: user.username,
        image: user.image,
      },
      secret
    );
    res.send({ token });
  } catch (err) {
    console.error(err);
    res.status(500).send({ message: "Server error", error: err.message });
  }
};
const updatePassword = async (req, res) => {
  try {
    const { email, currentPassword, newPassword } = req.body;
    const user = await db.User.findOne({ where: { email } });

    if (!user) {
      return res.status(404).send({ message: "User not found" });
    }

    const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[^_\s]{6,}$/.test(
      newPassword
    );
    if (!isPasswordValid) {
      return res
        .status(400)
        .send({ message: "New password does not meet the criteria" });
    }

    const isCurrentPasswordValid = await bcrypt.compare(
      currentPassword,
      user.password
    );
    if (!isCurrentPasswordValid) {
      return res.status(401).send({ message: "Current password is incorrect" });
    }

    const hashedNewPassword = await bcrypt.hash(newPassword, 10);
    await db.User.update(
      { password: hashedNewPassword },
      { where: { userid: user.userid } }
    );

    res.send({ message: "Password updated successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).send({ message: "Server error", error: err.message });
  }
};

module.exports = { signUp, logIn, updatePassword };
