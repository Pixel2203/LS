import {Express} from "express";
import {HeaderService} from "./HeaderService";
import {Db} from "mongodb";

export class RouteManager {
    private readonly app: Express;
    private readonly headerService:HeaderService;
    constructor(app: Express, database:Db) {
        this.app = app;
        this.defineRoutes();
        this.headerService = new HeaderService(database);
    }
    private defineRoutes(): void {
        this.app.get('/hello', (req, res) => {
            res.json({ msg: "Welcome to the API" });
        });
        this.app.get('/pack/:id', (req,res) => this.headerService.getLanguagePackByLanguageId(res, req.params.id))
    }
}