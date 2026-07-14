// import app from "./app.js";
// import { env } from "./config/env.js";

// const PORT = env.PORT;

// app.listen(PORT, () => {
//   console.log("=================================");
//   console.log(`🚀 Server running on port ${PORT}`);
//   console.log(`🌐 http://localhost:${PORT}`);
//   console.log("=================================");
// });

import app from "./app.js";

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
