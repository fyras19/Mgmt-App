import app from "./app";
import connectDB from "./config/db";

const port = process.env.PORT || 5000;

connectDB();
app.listen(port, () => console.log(`Server started on port ${port}`));