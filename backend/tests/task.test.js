const { Task } = require('../models');
jest.mock('../models', () => ({
  Task: {
    findAll: jest.fn().mockResolvedValue([{ id: 1, title: 'Mock Task', description: 'Do something', completed: false }]),
    findByPk: jest.fn().mockResolvedValue({ id: 1, title: 'Mock Task', description: 'Do something', completed: false }),
    create: jest.fn().mockResolvedValue({ id: 1, title: 'New Task', description: 'Do something new', completed: false }),
    update: jest.fn(),
    destroy: jest.fn()
  }
}));

const taskController = require('../controllers/taskController'); // Require after mocks

describe('Task Controller Tests', () => {
  it('should fetch all tasks', async () => {
    const mockReq = {};
    const mockRes = {
      json: jest.fn(),
      status: jest.fn().mockReturnThis() // Mock status and make it chainable
    };

    await taskController.getAllTasks(mockReq, mockRes);

    expect(mockRes.status).toHaveBeenCalledWith(200); // Check status code
    expect(mockRes.json).toHaveBeenCalledWith([{ id: 1, title: 'Mock Task', description: 'Do something', completed: false }]);
  });
});

