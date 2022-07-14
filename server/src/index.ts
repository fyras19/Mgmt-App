import app from "./app";
import connectDB from "./config/db";

const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.send('Hello World');
});

connectDB();
app.listen(port, () => console.log(`Server started on port ${port}`));