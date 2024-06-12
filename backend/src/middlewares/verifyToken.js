export const verifyToken =(req, res, next) => {




    if(!req.header('Authorization')) return res.status(400).json({message: 'No se envio token'})


    const token = req.header('Authorization').replace('Bearer', '').trim()
    console.log(token)
    if(token != '123') return res.status(400).json({message: 'token invalido'})


   
    next()


}