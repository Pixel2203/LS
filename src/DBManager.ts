import {Db, MongoClient} from "mongodb";

class DatabaseManager {
    private database: Db | undefined;

    public async connectToDB(con: string): Promise<void> {
        const client:MongoClient = await MongoClient.connect(con)
        this.database = client.db();
    }

    public getDatabase(): Db | undefined {
        return this.database;
    }
}

export default DatabaseManager;
