const usersRoute = require("express").Router();
const {getAll,getOne,add,remove,update} = require("../controller/users.controller")

usersRoute.get("/getAll",getAll)
usersRoute.post("/create",add)
usersRoute.get("/getOne/:id",getOne)
usersRoute.delete("/delete/:id",remove)
usersRoute.put("/update/:id",update)



module.exports = usersRoute;