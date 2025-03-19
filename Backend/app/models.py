class Task:
    def __init__(self, id, title, description, status):
        self.id = id
        self.title = title
        self.description = description
        self.status = status
    
    def to_dict(self):
        return {
            'id': self.id,
            'title': self.title,
            'description': self.description,
            'status': self.status
        }

# Sample data
tasks = [
    Task(1, "Implement Backend", "Create a Flask API", "Completed"),
    Task(2, "Develop Frontend", "Build React application", "In Progress"),
    Task(3, "Setup CI/CD", "Configure Jenkins and ArgoCD", "Pending")
]
