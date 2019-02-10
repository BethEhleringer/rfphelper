const router = require("express").Router();
const projectsRoutes = require("./projects");
const usersRoutes = require("./users");
const membersRoutes = require("./members");

// Project routes
router.use("/projects", projectsRoutes);
router.use("/users", usersRoutes);
router.use("/members", membersRoutes);

module.exports = router;
