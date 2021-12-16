import { setupWorker } from "msw";
import { handlers } from './handlers';

const worker = setupWorker(...handlers);
worker.start();

export default worker;
