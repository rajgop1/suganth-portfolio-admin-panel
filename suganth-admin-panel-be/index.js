const express = require("express");
const port = 3000;
const cors = require("cors");

const app = express();
require("./db.js");

const LanguageRoute = require("./routes/language.route");
const OrganicManualRoute = require("./routes/organicManual.route");
const OrganicManualTranslationsRoute = require("./routes/organicManualTranslations.route");
const ProductRoute = require("./routes/products.route");
const DashboardRoute = require("./routes/dashboard.route");
const AreaClustersRoute = require("./routes/areaClusters.route");
const CartsRoute = require("./routes/carts.route");
const CouponsRoute = require("./routes/coupon.route");
const AuthRoute = require("./routes/auth.route");
const DashboardDummyRoute = require("./routes/dashboard-dummy.route.js")

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static("public"));
app.use("/language", LanguageRoute);
app.use("/organicManual", OrganicManualRoute);
app.use("/organicManualT", OrganicManualTranslationsRoute);
app.use("/product", ProductRoute);
app.use("/dashboard", DashboardRoute);
app.use("/areaCluster", AreaClustersRoute);
app.use("/cart", CartsRoute);
app.use("/coupons", CouponsRoute);
app.use("/auth", AuthRoute);
app.use("/dashboard-dummy", DashboardDummyRoute);

app.get("/", async (req, res) => {
  const languageCode = req.params["lang"];
  return res.status(200).json({ state: "Status on" });
});

// Start server
app.listen(port, async () => {
  console.log(`Server running on port ${port}`);
  /* try {
    const organicData = await db.select().from("organic_manual");
    console.log("Organic Manual Data:", organicData);
  } catch (error) {
    console.error("Error fetching data:", error);
  } */
});
