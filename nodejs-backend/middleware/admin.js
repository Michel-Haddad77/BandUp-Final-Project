const TOKEN_SECRET = process.env.TOKEN_SECRET || "";
const jwt = require('jsonwebtoken');

function adminMiddleware(){
    return (req,res,next)=>{
        //get token from authorization header
        const token = req.headers.authorization;
       
        try{
            const verified = jwt.verify(token, TOKEN_SECRET);

            //check if verified token is an admin
            if(verified.type === 0){
                next();
            }else{
                return res.status(401).send("Unauthorized User");
            }

        }catch(error){
            console.log(error);
            res.status(401).send("Invalid Token");
        }
    }
}

module.exports = adminMiddleware;