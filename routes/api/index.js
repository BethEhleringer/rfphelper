const router = require("express").Router();
const projectsRoutes = require("./projects");
const usersRoutes = require("./users");

// Project routes
router.use("/projects", projectsRoutes);
router.use("/users", usersRoutes);

module.exports = router;
