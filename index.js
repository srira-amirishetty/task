const express = require('express');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const User = require('./models/Users');
const auth = require('./middleware');
const AttendenceApi = require('./routes/AttendenceApi');
const CareGiverApi = require('./routes/CareGiverApi');
const ChildrenApi = require('./routes/ChildrenApi');
const FinancialApi = require('./routes/FinancialApi');
const EnrollmentApi = require('./routes/EnrollmentApi');
const app = express();
app.use(express.json());

mongoose.connect("mongodb+srv://sriram:camps@cluster0.88kqnqd.mongodb.net/aspire-task")
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

app.post('/register', async (req, res) => {
    try {
        const { username, password } = req.body;

        const existingUser = await User.findOne({ username });
        if (existingUser) {
          return res.status(400).json({ message: 'Username already exists' });
        }

        const user = new User({ username, password });
        await user.save();
        const token = jwt.sign({ userId: user._id }, "jwt-secret");
        res.json({ token });
      } catch (err) {
        console.error('Registration error:', err);
        res.status(500).json({ message: 'Error registering user' });
      }
})


app.post('/login', async (req, res) => {
    try {
      const { username, password } = req.body;
      const user = await User.findOne({ username });
      if (!user || !(await user.comparePassword(password))) {
        return res.status(401).json({ message: 'Invalid credentials' });
      }
      const token = jwt.sign({ userId: user._id }, "jwt-secret");
      res.json({ token });
    } catch (err) {
      res.status(500).json({ message: 'Error logging in' });
    }
  });

  app.use('/children', auth, ChildrenApi);
  app.use('/caregivers', auth, CareGiverApi);
  app.use('/financials', auth, FinancialApi);
  app.use('/attendance', auth, AttendenceApi);
  app.use('/enrollments', auth, EnrollmentApi);
  
  
app.listen(5000, () => console.log('Server running on port 5000'));

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});
