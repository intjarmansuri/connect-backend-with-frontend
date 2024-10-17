const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());

app.get("/", (req, res) => {
  res.send("Welcome to home page!");
});

app.get("/api/users", (req, res) => {
  const users = [
    {
      id: 1,
      name: "Aamir Khan",
      age: 25,
      contact: "+91 9876543210",
      address: "123 Jama Masjid Road, Old Delhi, Delhi",
    },
    {
      id: 2,
      name: "Fatima Sheikh",
      age: 30,
      contact: "+91 9876509876",
      address: "456 Bapu Nagar, Jaipur, Rajasthan",
    },
    {
      id: 3,
      name: "Zubair Ali",
      age: 22,
      contact: "+91 9876512345",
      address: "789 Charminar Street, Hyderabad, Telangana",
    },
    {
      id: 4,
      name: "Sadia Begum",
      age: 28,
      contact: "+91 9876598765",
      address: "321 Marine Drive, Mumbai, Maharashtra",
    },
  ];
  res.json(users);
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
