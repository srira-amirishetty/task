const mongoose = require('mongoose');
const User = require('./models/Users');
const Attendance = require('./models/Attendance');
const Caregiver = require('./models/Caregiver');
const Children = require('./models/Children');
const Financials = require('./models/Financials');
const Enrollment = require('./models/Enrollment');

// MongoDB connection
mongoose.connect("mongodb+srv://sriram:camps@cluster0.88kqnqd.mongodb.net/aspire-task")
.then(() => {
  console.log('MongoDB connected');
})
.catch(err => {
  console.error('MongoDB connection error:', err);
});

// Seeder function
const seedData = async () => {
  try {
    // Clear existing data
    await User.deleteMany({});
    await Attendance.deleteMany({});
    await Caregiver.deleteMany({});
    await Children.deleteMany({});
    await Financials.deleteMany({});
    await Enrollment.deleteMany({});

    // Seed Users
    const users = [
      { username: 'user1', password: 'password1' },
      { username: 'user2', password: 'password2' },
      { username: 'user3', password: 'password3' },
      { username: 'user4', password: 'password4' },
      { username: 'user5', password: 'password5' },
      { username: 'user6', password: 'password6' },
      { username: 'user7', password: 'password7' },
      { username: 'user8', password: 'password8' },
      { username: 'user9', password: 'password9' },
      { username: 'user10', password: 'password10' },
    ];
    await User.insertMany(users);

    // Seed Attendance
    const attendanceStatuses = ['On-time', 'Late', 'Day-off', 'Not-present'];
    const attendances = Array.from({ length: 10 }, (_, i) => ({
      status: attendanceStatuses[i % attendanceStatuses.length],
      date: new Date(),
    }));
    await Attendance.insertMany(attendances);

    // Seed Caregivers
    const caregivers = Array.from({ length: 10 }, (_, i) => ({
      name: `Caregiver ${i + 1}`,
      status: i % 2 === 0 ? 'Active' : 'Inactive',
    }));
    await Caregiver.insertMany(caregivers);

    // Seed Children
    const children = Array.from({ length: 10 }, (_, i) => ({
      name: `Child ${i + 1}`,
      status: i % 2 === 0 ? 'Active' : 'Inactive',
      enrollmentDate: new Date(),
    }));
    await Children.insertMany(children);

    // Seed Financials
    const financials = Array.from({ length: 10 }, (_, i) => ({
      totalRevenue: (i + 1) * 1000,
      totalExpenses: (i + 1) * 500,
      date: new Date(),
    }));
    await Financials.insertMany(financials);

    // Seed Enrollments
    const enrollmentStatuses = ['Enrolled', 'Pending', 'Withdrawn'];
    const enrollments = Array.from({ length: 10 }, (_, i) => ({
      childName: `Child ${i + 1}`,
      enrollmentDate: new Date(),
      status: enrollmentStatuses[i % enrollmentStatuses.length],
    }));
    await Enrollment.insertMany(enrollments);

    console.log('Data seeding completed.');
  } catch (error) {
    console.error('Error seeding data:', error);
  } finally {
    mongoose.connection.close();
  }
};

// Run seeder
seedData();
