import express from "express";


const postViewRotuer = express.Router();
const BASE_PATH = "/views";


postViewRotuer.get(`${BASE_PATH}/post`, (req, res) => {
  res.render(`post/index`);
});

postViewRotuer.get(`${BASE_PATH}/post/detail`, (req, res) => {
  res.render(`post/postDetail`);
});

export default postViewRotuer;

