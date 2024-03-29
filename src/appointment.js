import React, { useState } from 'react';

const AppointmentTab = () => {
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [purpose, setPurpose] = useState('');
  const [appointments, setAppointments] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (purpose === '') {
      // Purpose field is empty, prevent form submission
      return;
    }
    const newAppointment = { name, date, time, purpose };
    setAppointments([...appointments, newAppointment]);
    // Reset form fields
    setName('');
    setDate('');
    setTime('');
    setPurpose('');
  };

  return (
    <div>
      <h2>Appointment Tab</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <br />
        <label>
          Date:
          <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
        </label>
        <br />
        <label>
          Time:
          <input type="time" value={time} onChange={(e) => setTime(e.target.value)} />
        </label>
        <br />
        <label>
          Purpose:
          <select value={purpose} onChange={(e) => setPurpose(e.target.value)}>
            <option value="">Select Purpose</option>
            <option value="Meeting">Meeting</option>
            <option value="Consultation">Consultation</option>
            <option value="Check-up">Check-up</option>
            <option value="Follow-up">Follow-up</option>
          </select>
        </label>
        <br />
        <button type="submit" disabled={purpose === ''}>Submit</button>
      </form>

      <h3>Submitted Appointments:</h3>
      <ul>
        {appointments.map((appointment, index) => (
          <li key={index}>
            <strong>Name:</strong> {appointment.name}, <strong>Date:</strong> {appointment.date}, <strong>Time:</strong> {appointment.time}, <strong>Purpose:</strong> {appointment.purpose}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AppointmentTab;