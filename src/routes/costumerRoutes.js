import express from "express";
import {
  addCostumers,
  getAllcostumers,
} from "../controllers/custumer-controller.js";

const costumerRouter = express.Router();

costumerRouter.get("/costumers", getAllcostumers);
costumerRouter.post("/addcostumers", addCostumers);

export default costumerRouter;
