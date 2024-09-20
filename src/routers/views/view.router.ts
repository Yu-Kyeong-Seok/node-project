import express from "express";

const viewRouter = express.Router();

const BASE_PATH = "/views";

viewRouter.get(`${BASE_PATH}/login`, (req, res) => {
  res.render(`login`);
});

viewRouter.get(`${BASE_PATH}/profile`, (req, res) => {
  res.render(`profile`);
});

viewRouter.get(`${BASE_PATH}/profileUpdate`, (req, res) => {
  res.render(`profileUpdate`);
});

viewRouter.get(`${BASE_PATH}/profileChangeEmail`, (req, res) => {
  res.render(`profileChangeEmail`);
});

viewRouter.get(`${BASE_PATH}`, (req, res) => {
  res.render("index", {
    title: "홈",
  });
});

viewRouter.get(`${BASE_PATH}/users`, (req, res) => {
  res.render("users", {
    title: "유저 목록",
    users: [
      {
        name: "다영짱",
        age: 27,
      },
      {
        name: "현영짱",
        age: 26,
      },
      {
        name: "동준짱",
        age: 27,
      },
    ],
  });
});

export default viewRouter;
