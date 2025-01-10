import { Col, Container, Row } from "react-bootstrap"
import TaskCard from "./TaskCard"
import Navbar from "./Navbar"
import { useEffect, useState } from "react"
import axios from "axios"

interface Task {
  title: string
  content: string
}

function App() {

  const [tasks, setTasks] = useState<Task[]>([])

  useEffect(() => {
    axios.get<Task[]>("http://localhost:8080/tasks")
      .then((response) => {
        setTasks(response.data)
      })
      .catch((error) => {
        console.log(`Failed to fetch tasks ${error}`)
      })
  })

  return (
    <Container fluid className="vh-100">
      <Row className="h-100">
        <Col xs={3} md={1} className="bg-dark text-white p-3">
          <Navbar />
        </Col>

        <Col className="p-4">
          {tasks.map((task: Task, index) => (
            <TaskCard key={index} title={task.title} content={task.content} />
          ))}
        </Col>
      </Row>
    </Container>
  )
}

export default App
