const supertest = require('supertest')
const app = 'https://restful-booker.herokuapp.com';
const chai = require('chai')
const chaiJsonSchema = require('chai-json-schema')
const main = require('./apitest-booker')
const request = supertest(app);

chai.use(chaiJsonSchema)
const expect = chai.expect

const authSchema = main.authSchema()
const bookerSchema = main.bookerSchema()

describe('Testing API booker', function () {
    it('Auth - CreateToken', async function () {
        const response = await request.get('/auth')
        // console.log(response)
        expect(response.status).have.jsonSchema(authSchema)
    })

    it('Get BookingIds', async function () {
        const response = await request.get('/booking')
        expect(response.body).have.jsonSchema(bookerSchema)

    })
    it('Get Booking', async function () {
        const response = await request.get('/booking/1')
        expect(response.body).have.jsonSchema(bookerSchema)
    })
    it('Create Booking', async function () {
        const payload = {
            "firstname": "Jim",
            "lastname": "Brown",
            "totalprice": 111,
            "depositpaid": true,
            "bookingdates": {
                "checkin": "2018-01-01",
                "checkout": "2019-01-01"
            },
            "additionalneeds": "Breakfast"
        }
        const response = await request.post('/booking').send(payload)
        expect(response.body).have.jsonSchema(bookerSchema)
    })
    it('Update Booking', async function () {
        const payload = {
            "firstname": "James",
            "lastname": "Brown",
            "totalprice": 111,
            "depositpaid": true,
            "bookingdates": {
                "checkin": "2018-01-01",
                "checkout": "2019-01-01"
            },
            "additionalneeds": "Breakfast"
        }
        const response = await request.put('/booking/1').send(payload)
        expect(response.body).have.jsonSchema(bookerSchema)
    })
    it('Partial Update Booking', async function () {
        const payload = {
            "firstname": "James",
            "lastname": "Brown"
        }
        const response = await request.patch('booking/1').send(payload)
        expect(response.body).have.jsonSchema(bookerSchema)
    })
    it('Delete Booking', async function () {

        const response = await request.delete('booking/1')
        expect(response.status).have.jsonSchema(bookerSchema)
    })
    it('Ping - HealtCheck', async function () {

        const response = await request.get('/ping')
        expect(response.status).have.jsonSchema(201)
    })
})
