// Reference: https://editor.swagger.io/ 

const task = {
    'userId': '943b7681-b1c3-4244-8a37-423ae7a3d7bc',
    'summary': 'Updating user laptop Zoom app.',
};

const return200 = {
    description: 'Success',
    content: {
        'application/json': {
            schema:{
                type: 'object',
                example: { message: 'success'}
            }
        }
    }
};

const return201 = {
    description: 'Success',
    content: {
        'application/json': {
            schema:{
                type: 'object',
                example: task
            }
        }
    }
};

const return400 = {
    description: 'Invalid',
    content: {
        'application/json': {
            schema:{
                type: 'object',
                example: {error: 'invalid data' }
            }
        }
    }
};

const return404 = {
    description: 'Not found',
    content: {
        'application/json': {
            schema:{
                type: 'object',
                example: {error: 'task not found' }
            }
        }
    }
};

const return500 = {
    description: 'Internal error',
    content: {
        'application/json': {
            schema:{
                type: 'object',
                example: { error: 'internal error during process' }
            }
        }
    }
};

// tasksRouter.post('/task/add', async (req: Request, res: Response) => await (await taskFactory()).httpAddTask(req, res));
const taskAddSchema = {
    post: {
        tags: ['Task'],
        summary: 'Create new users',
        description: 'Create a new user',
        requestBody: {
            content: {
                'application/json': {
                    schema: {
                        type: 'object',
                        properties: {
                            userId: {
                                type: 'string',
                                description: 'User responsible for the task',
                                example: '943b7681-b1c3-4244-8a37-423ae7a3d7bc'
                            },
                            summary: {
                                type: 'string',
                                description: 'Task summary',
                                example: 'Updating user laptop Zoom app.'
                            },
                        }
                    }
                }
            }
        },
        responses:{
            201: return201,
            500: return500,
        } 
    }
};


// tasksRouter.get('/task/list', async (req: Request, res: Response) => await (await taskFactory()).httpListTasks(req, res));
const taskListSchema = {
    get: {
        tags: ['Task'],
        summary: 'List current tasks',
        description: 'List of all current tasks',
        responses:{
            200: return200,
            500: return500,
        } 
    }
};


// tasksRouter.get   ('/task/find/:id'  , async (req: Request, res: Response) => await (await taskFactory()).httpFindById(req, res));
const usersByIdSchema = {
    get: {
        tags: ['Task'],
        summary: 'Get task from query id',
        description: 'Get task by its id',
        parameters: [
            {
                name: 'id',
                in: 'path',
                description: 'id of the task',
                type: 'string',
                example: '500994c6-b51b-4544-8dfb-ccced2b87e73',
            },
        ],
        responses:{
            200: return200,
            404: return404,
            500: return500,
        } 
    }
};


// tasksRouter.put   ('/task/update/:id', async (req: Request, res: Response) => await (await taskFactory()).httpUpdateTask(req, res));
const taskUpdateSchema = {
    put: {
        tags: ['Task'],
        summary: 'Update task data',
        description: 'Update summary of the task',
        parameters: [
            {
                name: 'id',
                in: 'path',
                description: 'id of the task',
                type: 'string',
                example: '500994c6-b51b-4544-8dfb-ccced2b87e73',
            },
        ],
        requestBody: {
            content: {
                'application/json': {
                    schema: {
                        type: 'object',
                        properties: {
                            summary: {
                                type: 'string',
                                description: 'Summary of the task',
                                example: 'Updating user laptop Zoom and Microsoft Teams apps.'
                            },
                            userId: {
                                type: 'string',
                                description: 'User of the task',
                                example: '533b7681-b1c3-4244-8a37-423ae7a3d8ac'
                            },
                        }
                    }
                }
            }
        },
        responses:{
            200: return200,
            400: return400,
            404: return404,
            500: return500,
        } 
    }
};



// tasksRouter.delete('/task/delete/:id', async (req: Request, res: Response) => await (await taskFactory()).httpDeleteTask(req, res));






// usersRouter.get   ('/users/confirm-email/:id/:uniqueString', handleRegisterOrUpdateEmailConfirmation); 
//Not an API

// usersRouter.get   ('/users/user-message', handleEmailConfirmationVerified); 
//Not an API

// // usersRouter.put   ('/users/update-user-email/:id',httpUpdateUserEmail);
// const usersUpdateUserEmailSchema = {
//     put: {
//         tags: ['User'],
//         summary: 'Update user email',
//         description: 'Update the user email - it has its specific requirements and validations',
//         parameters: [
//             {
//                 name: 'id',
//                 in: 'path',
//                 description: 'id of the user',
//                 type: 'number',
//                 example: '5678',
//             },
//         ],
//         requestBody: {
//             content: {
//                 'application/json': {
//                     schema: {
//                         type: 'object',
//                         properties: {
//                             email: {
//                                 type: 'string',
//                                 description: 'Email of the user',
//                                 example: 'john.doe@email.com'
//                             },
//                         }
//                     }
//                 }
//             }
//         },
//         responses:{
//             200: return200,
//             400: return400,
//             404: return404,
//             409: return409,
//             500: return500,
//         } 
//     }
// };


// usersRouter.delete('/users/delete/:id', handleUserDelete); 

// const userDeleteUserSchema = {
//     delete: {
//         tags: ['User'],
//         summary: 'Delete user',
//         description: 'Delete a specific user by id',
//         parameters: [
//             {
//                 name: 'id',
//                 in: 'path',
//                 description: 'id of the user',
//                 type: 'number',
//                 example: '5678',
//             },
//         ],
//         responses:{
//             200: return200,
//             400: return400,
//             404: return404,
//             500: return500,
//         } 
//     }
// };

export const taskRouteDoc = {
    '/task/list': taskListSchema,
    '/task/add': taskAddSchema,
    '/task/find/{id}': usersByIdSchema,
    '/task/update/{id}': taskUpdateSchema,
};