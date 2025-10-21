import express from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

// ---------------------------------------- server settings ----------------------------------------------\\
const app = express();
const PORT = 8000;
app.use(express.json());
app.use(cors());

// --------------------------------------------- routes --------------------------------------------------\\

app.get("/api/movies", async (req, res) => {
  try {
    const userSearch = req.query.query; // use ?query=term from frontend
    const url = `https://api.themoviedb.org/3/search/movie?query=${userSearch}&include_adult=false&language=en-US&page=1`;
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjYjNiNTRjMDhlOWIzMDEwY2JjYTQ2YTdkNWE5OWQ4MCIsIm5iZiI6MTc1NzM1NDQwNS43ODcwMDAyLCJzdWIiOiI2OGJmMTlhNTM4YWU0YmZhYjUxZjU4NjgiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.zudfQk4xdnj8TXQtK4NdWPHrHCTLw6t1rNiAQgkMZt0",
      },
    };

    const response = await fetch(url, options);
    if (!response.ok) throw new Error(`HTTP error! ${response.status}`);

    const data = await response.json();
    const limitedResults = data.results.slice(0, 8);

    res.json(limitedResults);
  } catch (error) {
    console.error(error);
  }
});

app.listen(PORT, () => {
  console.log(`listening on ${PORT}`);
});
