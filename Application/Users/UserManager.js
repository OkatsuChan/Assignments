class UserManager {
    constructor(appDbContext) {
        if (UserManager.instance) {
            return userManager.instance;
        }
        this.users = [];

        UserManager.instance = this;

        // Set Db Context
        UserManager.appDbContext = appDbContext;

        // holder
        UserManager.Save;
        UserManager.Delete;
        UserManager.Get;
        UserManager.Update;

    }
}


