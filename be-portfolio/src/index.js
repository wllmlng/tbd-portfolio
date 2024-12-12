// const express = require('express');
// const bodyParser = require('body-parser');
// const admin = require('firebase-admin');
// const cors = require('cors');

// const app = express();
// app.use(cors());
// app.use(bodyParser.json());

// // Initialize Firebase Admin SDK
// const serviceAccount = require('./path/to/serviceAccountKey.json');

// admin.initializeApp({
//   credential: admin.credential.cert(serviceAccount),
//   databaseURL: "https://<your-database-name>.firebaseio.com" // Replace with your Firebase URL
// });

// const db = admin.firestore();

// // Routes
// app.post('/todos', async (req, res) => {
//   try {
//     const { title, completed } = req.body;
//     const newTodo = await db.collection('todos').add({
//       title,
//       completed: completed || false,
//       createdAt: new Date()
//     });
//     res.status(200).send({ id: newTodo.id, message: 'Todo added successfully!' });
//   } catch (error) {
//     res.status(500).send({ error: error.message });
//   }
// });

// // Start Server
// const PORT = 5000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


const todosRoutes = require('./routes/todos');

app.use('/todos', todosRoutes);
