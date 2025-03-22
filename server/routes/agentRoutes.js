

const router = express.Router();

router.post("/create", createAgent); // ✅ Route for creating an agent

// ✅ Get a Single Agent by ID
router.get("/:licenseNumber", getAgentById);

module.exports = router;
