const express = require("express"); // Creating the backend server and handling routes.🔹 Express is a lightweight framework for Node.js that makes building APIs and web servers easier.
const mongoose = require("mongoose"); // Connecting to MongoDB and defining database schemas/models.🔹 Mongoose is an ODM (Object Data Modeling) library that helps in interacting with MongoDB using JavaScript.
const cors = require("cors");// Used for: Handling Cross-Origin Resource Sharing (CORS) issues.🔹 CORS is needed when your frontend (React) and backend (Express) are running on different domains (e.g., React on http://localhost:3000 and Express on http://localhost:5000).This allows your backend API to be accessible from the frontend.
const dotenv = require("dotenv");// Used for: Loading environment variables from a .env file.🔹 This keeps sensitive data (like database URLs, API keys, and passwords) secure and hidden.
const contactRoutes = require("./routes/contactRoutes");// Used for: Handling form submissions and routing API calls.🔹 This imports the contactRoutes.js file where you define API endpoints for handling user contact form submissions.This means your Express app will use the routes defined in contactRoutes.js, such as:jsCopyEditrouter.post("/contact", contactController.submitContactForm);✅ This helps keep your code organized by separating routes from the main server file.

dotenv.config();
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/contact", contactRoutes);

//  Email Subscription Routes
// ------------------------------
const emailRoutes = require("./routes/emailRoutes"); // Used for: Handling email subscriptions
app.use("/api/email", emailRoutes); // All email-related API requests will go through /api/email


// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log(" MongoDB Connected"))
  .catch(err => console.log(" MongoDB Error:", err));

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
