//blue print or Class structure
class ApplicationDbContext{

    constructor(servername,database,userid,password){

        // pass the data
        this.Servername = servername;
        this.Database = database;
        this.Userid = userid;
        this.Password = password;


        // User Entity
        applicationDbContext.Users = [];

        // Singleton
        if (ApplicationDbContext.instance) {
            return applicationDbContext.instance;
        }

        ApplicationDbContext.instance = this;

    }

}

// instantiate DB Context
var applicationDbContext = new ApplicationDbContext("DESKTOP-HOUSE\\SQLEXPRESS","SampleDB","admin","123456")

