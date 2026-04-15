import { useState } from "react";

function App() {
  const [students, setStudents] = useState([]);
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [course, setCourse] = useState("");

  const handleAdd = () => {
    if (!name || !age || !course) {
      alert("Sab fields bharo!");
      return;
    }
    const newStudent = { name, age, course, id: Date.now() };
    setStudents([...students, newStudent]);
    setName("");
    setAge("");
    setCourse("");
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Student Management</h1>

      {/* Student Form */}
      <div style={styles.form}>
        <h2 style={styles.subheading}>Student Form</h2>
        <input
          style={styles.input}
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          style={styles.input}
          type="number"
          placeholder="Age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <input
          style={styles.input}
          type="text"
          placeholder="Course"
          value={course}
          onChange={(e) => setCourse(e.target.value)}
        />
        <button style={styles.button} onClick={handleAdd}>
          Add Student
        </button>
      </div>

      {/* Student List */}
      <div style={styles.listSection}>
        <h2 style={styles.subheading}>Student List</h2>
        {students.length === 0 ? (
          <p style={styles.empty}>Koi student nahi hai abhi.</p>
        ) : (
          students.map((student) => (
            <div key={student.id} style={styles.card}>
              <p><strong>Name:</strong> {student.name}</p>
              <p><strong>Age:</strong> {student.age}</p>
              <p><strong>Course:</strong> {student.course}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: "600px",
    margin: "40px auto",
    fontFamily: "sans-serif",
    padding: "0 16px",
  },
  heading: {
    fontSize: "28px",
    marginBottom: "24px",
    color: "#1a1a1a",
  },
  subheading: {
    fontSize: "20px",
    marginBottom: "12px",
    color: "#333",
  },
  form: {
    background: "#f5f5f5",
    padding: "20px",
    borderRadius: "10px",
    marginBottom: "32px",
    display: "flex",
    flexDirection: "column",
    gap: "12px",
  },
  input: {
    padding: "10px 14px",
    fontSize: "16px",
    border: "1px solid #ccc",
    borderRadius: "6px",
    outline: "none",
  },
  button: {
    padding: "10px",
    fontSize: "16px",
    backgroundColor: "#4f46e5",
    color: "white",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
  },
  listSection: {
    display: "flex",
    flexDirection: "column",
    gap: "12px",
  },
  card: {
    background: "#fff",
    border: "1px solid #e0e0e0",
    borderRadius: "8px",
    padding: "14px 18px",
    lineHeight: "1.8",
  },
  empty: {
    color: "#888",
    fontStyle: "italic",
  },
};

export default App;