db.createUser(
    {
        user: "rouslan",
        pwd: "50m9FiD3",
        roles: [
            {
                role: "readWrite",
                db: "OrderDB"
            }
        ]
    }
);

db = new Mongo().getDB('OrderDB');

db.createCollection('TacoOrders');