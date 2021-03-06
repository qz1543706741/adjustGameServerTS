import 'reflect-metadata';
import { createConnection } from 'typeorm';
import { Request, Response, json } from 'express';
import { AppRoutes } from './routes/routes';

const express = require('express');
const bodyParser = require('body-parser');

createConnection()
    .then(async () => {
        // create express app
        const app = express();
        app.use(bodyParser.urlencoded({ extended: false }));
        app.use(bodyParser.json());

        // register all application routes
        AppRoutes.forEach((route) => {
            app[route.method](route.path, (request: Request, response: Response, next: Function) => {
                route
                    .action(request, response)
                    .then(() => next)
                    .catch((err) => {
                        const { message } = new Error(err);
                        response.status(400).json(message);
                    });
            });
        });

        // run app
        app.listen(3000 || process.env.PORT);
    })
    .catch((error) => console.log('TypeORM connection error: ', error));
