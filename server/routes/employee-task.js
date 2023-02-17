const router = require("express").Router();

const isAuthenticated = require("../middleware/auth");
const { createTask, getTaskByUserId, getTaskByEmpRoleId } = require("../controllers/employeeTask");

router.post("/", isAuthenticated, createTask);
router.get("/user", isAuthenticated, getTaskByUserId);
router.get("/employee", isAuthenticated, getTaskByEmpRoleId);

module.exports = router;
