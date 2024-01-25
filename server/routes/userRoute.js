import express from "express";
import {create, getAll,getOne,update,deleteUser} from "../controller/usercontroller.js";
const route =express.Router();
route.post("/create",create);
route.get("/getAll",getAll);
route.get("/getOne/:id",getOne);
route.put("/update/:id",update);
route.delete("/delete/:id",deleteUser);

export default route;