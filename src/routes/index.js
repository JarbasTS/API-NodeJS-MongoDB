import express from "express";
import livros from "./routes.js";

const routes = app => {
  app.route("/").get((req, res) => {
    res.send("Curso de Node");
  });
  app.use(express.json(), livros);
};

export default routes;
