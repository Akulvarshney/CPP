const express = require("express");
const multer = require("multer");
const fs = require("fs");
const { v4: uuidv4 } = require("uuid");
const { promisify } = require("util");
const path = require("path");

const pipeline = promisify(require("stream").pipeline);

const router = express.Router();

const upload = multer({
  dest: "./public/resume",
});

router.post("/resume", upload.single("file"), (req, res) => {
  const { file } = req;
  console.log(file);
  if (file.originalname != ".pdf") {
    res.status(400).json({
      message: "Invalid format",
    });
  } else {
    const filename = `${uuidv4()}${file.originalname}`;

    pipeline(
      file.stream,
      fs.createWriteStream(`${__dirname}/../public/resume/${filename}.pdf`)
    )
      .then(() => {
        res.send({
          message: "File uploaded successfully",
          url: `/host/resume/${filename}`,
        });
      })
      .catch((err) => {
        console.log(err);
        res.status(400).json({
          message: "Error while uploading",
        });
      });
  }
});
router.post("/profile", upload.single("file"), (req, res) => {
  const { file } = req;
  const fileExtension = path.extname(file.originalname);
  if (fileExtension != ".jpg" && fileExtension != ".png") {
    res.status(400).json({
      message: "Invalid format",
    });
  } else {
    const filename = `${uuidv4()}${fileExtension}`;

    pipeline(
      file.stream,
      fs.createWriteStream(`${__dirname}/../public/profile/${filename}`)
    )
      .then(() => {
        res.send({
          message: "Profile image uploaded successfully",
          url: `/host/profile/${filename}`,
        });
      })
      .catch((err) => {
        res.status(400).json({
          message: "Error while uploading",
        });
      });
  }
});

module.exports = router;
