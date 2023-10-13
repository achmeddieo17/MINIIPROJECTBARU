module.exports = {
    authSchema: function () {
        const authSchema = {
            "username": "admin",
            "password": "password123"
        }
        return authSchema
    },

    bookerSchema: function () {
        const bookerSchema = {
            "firstname": "Sally",
            "lastname": "Brown",
            "totalprice": 111,
            "depositpaid": true,
            "bookingdates": {
                "checkin": "2013-02-23",
                "checkout": "2014-10-23"
            },
            "additionalneeds": "Breakfast"
        }
        return bookerSchema
    }
}