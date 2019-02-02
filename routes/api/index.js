const router = require("express").Router();
const projectsRoutes = require("./projects");

// Book routes
router.use("/projects", projectsRoutes);

module.exports = router;
