const {Router} = require ("express");
const animes = require("../controller/controllerAnimes")

const router = Router();



router.get("/",
animes.getAllAnimes
);


module.exports= router
