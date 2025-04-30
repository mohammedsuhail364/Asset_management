require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const { sequelize } = require("./models");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Static files
app.use(express.static(path.join(__dirname, "public")));

// View engine setup
app.set("view engine", "jade");
app.set("views", path.join(__dirname, "views"));

// Routes
const employeeRoutes = require("./routes/employeeRoutes");
const assetRoutes = require("./routes/assetRoutes");
const categoryRoutes = require("./routes/categoryRoutes");
const stockRoutes = require("./routes/stockRoutes");
const issueRoutes = require("./routes/issueRoutes");
const returnRoutes = require("./routes/returnRoutes");
const scrapRoutes = require("./routes/scrapRoutes");
const historyRoutes = require("./routes/historyRoutes");
app.get("/", (req, res) => {
  const navLinks = [
    { name: "Manage Employees", link: "/employees" },
    { name: "Manage Assets", link: "/assets" },
    { name: "Manage Categories", link: "/categories" },
    { name: "Manage Stock", link: "/stock" },
    { name: "Issue Asset", link: "/issue" },
    { name: "Return Asset", link: "/return" },
    { name: "Scrapped Assets", link: "/scraps" },
  ];
  res.render("home", { navLinks });
});

app.use("/employees", employeeRoutes);
app.use("/assets", assetRoutes);
app.use("/categories", categoryRoutes);
app.use("/stock", stockRoutes);
app.use("/issue", issueRoutes);
app.use("/return", returnRoutes);
app.use("/scraps", scrapRoutes);
app.use("/history", historyRoutes);

// Start Server
sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});
