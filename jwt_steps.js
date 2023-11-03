/***
 * Install jsonwebtoken
 * jwt.sign (payload or user, "secret",{expiresIn:'1hr'})
 * token clint
 */



/**How to store token in client site
 * 1.memory --> ok type
 * 2.local storage --> ok type (XSS)
 * 3.cookies: http only
 *  */ 

/**
 * 1.set cookies with http only.for the development secure:false
 * 2.cors
 * app.use(cors({
    origin: ['http://localhost:5173'],
    credentials: true
}))
 * 
 * 3.client side axios setting
 * in axios set withCredentials: true
 * */ 

/**
 *1. to send cookies from the client make sure you added withCreadiential :true from the api call using axios 
 *2. use cookies parser as middleware 
 * */ 


//  app.post('/jwt', async (req, res) => {
//     const user = req.body
//     console.log(user);
//    const token = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET , { expiresIn: '1h' })
//     res.send(token)
// }) 