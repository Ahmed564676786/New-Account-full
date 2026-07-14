//

import express from "express";
import swaggerUi from "swagger-ui-express";

import { swaggerSpec } from "./config/swagger.js";
import userRoutes from "./routes/user.routes.js";

const app = express();

app.use(express.json());

app.use("/api/users", userRoutes);

app.use("/api/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

export default app;
