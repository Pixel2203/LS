import express, { Express } from "express";
import DatabaseManager from "./DBManager";
import {RouteManager} from "./routes";
import {Db} from "mongodb";
const app: Express = express();

const dbManager:DatabaseManager = new DatabaseManager();


const start = async () => {
    await dbManager.connectToDB("mongodb://localhost:27017/test")
    app.listen(8082, () => {
        console.log("Listening on port 8082");
    });
    const routeManager:RouteManager = new RouteManager(app, dbManager.getDatabase() as Db);
}
start();

