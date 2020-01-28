import { getDb } from '../util/database'

export class Product {
    constructor(title, price, description, imageURL) {
        this.title = title
        this.price = price
        this.description = description
        this.imageURL = imageURL
    }

    save(){
        const db = getDb()
        return db
        .collection('products')
        .insertOne(this)
        .then(result => {
            console.log(result)
        }).catch(err =>{
            console.log(err)
        })
    }

    static fetchAll(){
        const db = getDb()
        return db
        .collection('products')
        .find()
        .toArray()
        .then(products => {
            console.log(products)
            return products
        })
        .catch( err => {
            console.log(err)
        })
    }
}