import {Db, WithId} from "mongodb";

export class HeaderService {
    private readonly database: Db;
    constructor (database: Db) {
        this.database = database;
    }
    public async getLanguagePackByLanguageId(res: any, langId: string): Promise<any> {
        const result = await this.database.collection("tutorial").find().next()
        console.log(result)
        if(!result){
            return res.json({
                msg: "No entries found!"
            })

        }
        return res.json(result);
        return res.json({
            msg: "You requested a Language Pack!",
            langId: langId
        })
    }
}