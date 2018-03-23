const chai      = require('chai')
const expect    = chai.expect
const chaiHttp  = require('chai-http')
const app       = require('../app')

chai.use(chaiHttp)

var userId = ''


describe('API /card ',()=>{
    //addCards
    describe('Post /add',()=>{
        it('add Cards',done=>{
            chai.request(app)
            .post('/cards/add')
            .send({
                name    : 'joker',
                value   : 12  
            })
            .end((err,res)=>{
                console.log(res.body)
                expect(res).to.have.status(201)
                expect(res.body.message).to.be.a('string').eql('add card success')
                expect(res.body).to.be.an('object')
                expect(res.body.data).to.be.a('string')
                done()
            })
        })
    })
    //ShowCards
    describe('Get /show',()=>{
        it('get all card',done=>{
            chai.request(app)
            .get('/cards/show')
            .end((err,res)=>{
                expect(res).to.have.status(201)
                expect(res.body.message).to.be.a('string').eql('read data success')
                expect(res.body.data).to.be.an('object')
                done()
            })
        })
    })
    //add player
    describe('Post /addPlayer',()=>{
        it('add player firebase',done=>{
            chai.request(app)
            .post(`/cards/addPlayer`)
            .send({
                name    :'kevin',
                room    :'123455',
                userid  :'12344'
            })
            .end((err,res)=>{
                expect(res).to.have.status(201)
                expect(res.body.message).to.be.a('string').eql('add users success')
                done()
            })
        })
    })
    //Get player user
    describe('Get /getPlayer',()=>{
        it('show user who join',done=>{
            chai.request(app)
            .get(`/cards/getPlayer`)
            .end((err,res)=>{
                expect(res).to.have.status(201)
                expect(res.body.message).to.be.a('string').eql('read data success')
                done()
            })
        })
    })
})
