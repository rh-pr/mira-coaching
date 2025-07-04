import mongoose from "mongoose";
import dotenv from 'dotenv';
import config from "./config";

import app from "./app";

dotenv.config();

const PORT = config.port || 3000;

mongoose.connect(config.dbUri)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch(err => console.error('DB connection failed:', err));