require("dotenv").config();
const { Router } = require("express");
const router = Router();
const anime = require("./animes.ts");




router.use("/animes", anime);




export default router;