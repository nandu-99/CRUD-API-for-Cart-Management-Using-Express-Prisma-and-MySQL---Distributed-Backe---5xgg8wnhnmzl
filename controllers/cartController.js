const {prisma} = require("../db/config")

const addProduct = async(req, res)=>{
    const {userId, productId, count} = req.body; 
    if(!userId || !productId || !count){
        return res.status(404).json({
            "error": "All fields required"
          })
    }
    const create = await prisma.cart.create({
        data: {
            userId, productId, count
        }
    })
    console.log(create)
    return res.status(201).json(create)
}

const getProductById = async(req, res)=>{
    const {id} = req.params; 
    const exist = await prisma.cart.findUnique({where: {cartId : parseInt(id)}})
    console.log(exist)
    if(!exist){
        return res.status(404).json({ 
            "error": "Cart not found"
         })
    }
    return res.status(200).json(exist)
}

const patchProductById = async(req, res)=>{
    const {id} = req.params; 
    const {count} = req.body;
    const update = await prisma.cart.update({where: {cartId: parseInt(id)}, data: {count}})
    return res.status(200).json(update)
}

const removeProductById = async(req, res)=>{
    const {id} = req.params; 
    const deleted = await prisma.cart.delete({where: {cartId: parseInt(id)}})
    return res.status(200).json({ 
        "message": "Cart deleted successfully" 
     })
}

module.exports = {addProduct, getProductById, patchProductById, removeProductById}
