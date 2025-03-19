from flask import Blueprint, jsonify, request
from .models import tasks, Task

main_bp = Blueprint('main', __name__)

@main_bp.route('/api/health', methods=['GET'])
def health_check():
    return jsonify({"status": "healthy"})

@main_bp.route('/api/tasks', methods=['GET'])
def get_tasks():
    return jsonify([task.to_dict() for task in tasks])

@main_bp.route('/api/tasks/<int:task_id>', methods=['GET'])
def get_task(task_id):
    task = next((task for task in tasks if task.id == task_id), None)
    if task:
        return jsonify(task.to_dict())
    return jsonify({"error": "Task not found"}), 404

@main_bp.route('/api/tasks', methods=['POST'])
def add_task():
    data = request.json
    if not data or not all(key in data for key in ('title', 'description', 'status')):
        return jsonify({"error": "Missing required fields"}), 400
    
    new_id = max(task.id for task in tasks) + 1
    new_task = Task(new_id, data['title'], data['description'], data['status'])
    tasks.append(new_task)
    
    return jsonify(new_task.to_dict()), 201