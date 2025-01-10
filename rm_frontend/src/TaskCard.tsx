import { Card } from "react-bootstrap"

function TaskCard({ title, content }: { title: string, content: string }) {
  return (
    <Card className="mb-4">
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{content}</Card.Text>
      </Card.Body>
    </Card>
  )
}

export default TaskCard
