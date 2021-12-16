import { rest } from 'msw';
import cv from './response';

const handlers = [
    rest.get("http://localhost:8080/api/cv", (req, res, context) => {
        return res(context.status(200), context.json(cv));
    })
];

export { handlers, rest }
