// Reference: https://editor.swagger.io/ 

const return200 = {
    description: "Success",
    content: {
        "application/json": {
            schema:{
                type: "object",
                example: { message: 'success'}
            }
        }
    }
};

const return500 = {
    description: "Internal error",
    content: {
        "application/json": {
            schema:{
                type: "object",
                example: { error: 'internal error during process' }
            }
        }
    }
};

// tasksRouter.post('/task/add', async (req: Request, res: Response) => await (await taskFactory()).httpAddTask(req, res));



// tasksRouter.get('/task/list', async (req: Request, res: Response) => await (await taskFactory()).httpListTasks(req, res));
const taskListSchema = {
    get: {
        tags: ["Task"],
        summary: "List current tasks",
        description: "List of all current tasks",
        responses:{
            200: return200,
            500: return500,
        } 
    }
};


// tasksRouter.get   ('/task/find/:id'  , async (req: Request, res: Response) => await (await taskFactory()).httpFindById(req, res));



// tasksRouter.put   ('/task/update/:id', async (req: Request, res: Response) => await (await taskFactory()).httpUpdateTask(req, res));



// tasksRouter.delete('/task/delete/:id', async (req: Request, res: Response) => await (await taskFactory()).httpDeleteTask(req, res));



export const taskRouteDoc = {
    "/task/list": taskListSchema,
};