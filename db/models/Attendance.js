import mongoose from 'mongoose';

const AttendanceSchema = new mongoose.Schema({
    student: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    course: { type: mongoose.Schema.Types.ObjectId, ref: 'Course', required: true },
    date: { type: Date, required: true },
    status: { type: String, enum: ['present', 'absent', 'late'], required: true },
});

const Attendance = mongoose.model('Attendance', AttendanceSchema);

export default Attendance;
