import { Express, Request, Response } from 'express';
import swaggerJsdoc from 'swagger-jsdoc';   // builds documentation
import swaggerUi from 'swagger-ui-express'; // exposes documentation
import tasksRouter from '../../routes/tasks/tasks.router';


require('dotenv').config();

const options = {
    definition: {
        openapi: '3.1.0',
        servers: [
            {
                url: `${process.env.SERVER_ADDRESS || 'http://localhost'}:${process.env.PORT || 8000}`,
            }
        ],
        security: [
            {
                bearerAuth: [],
            },
        ],
        info: {
            title: 'REST API Docs',
            version: '1.0.0'
        },
        tags: [
            {
                name: "User",
                description: "User routes"
            }
        ],
        paths: tasksRouter,
    },
    components: {
        securitySchemas: {
            bearerAuth: {
                type: 'http',
                scheme: 'bearer',
                bearerFormat: 'JWT',
            },
        },
    },
    security: [
        {
            bearerAuth: [],
        },
    ],
    apis: ['../../routes/tasks/tasks.router.ts']
}

const swaggerSpec = swaggerJsdoc(options);

function swaggerDocs(app: Express){

    // Swagger page
    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

    // Docs in JSON format
    app.get('/api-docs.json', (req: Request, res: Response) => {
        res.setHeader('Content-Type', 'application/json');
        res.send(swaggerSpec);
    });
}

export default swaggerDocs;