const router = require("express").Router();
const {
  createOrganization,
  editOrganization,
  getOrganizations,
  getOrganizationById,
} = require("../controllers/organization");
const isAuthenticated = require("../middleware/auth");

router.post("/", isAuthenticated, createOrganization);
router.put("/:id", isAuthenticated, editOrganization);
router.get("/", isAuthenticated, getOrganizations);
router.get("/:id", isAuthenticated, getOrganizationById);

module.exports = router;
