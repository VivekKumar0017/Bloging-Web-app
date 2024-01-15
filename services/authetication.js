const JWT=require('jsonwebtoken');

const secret="BatMan@123";

function createTokenForUser(user){
    const payload={
        _id:user._id,
        email:user.email,
        profileImageURL:profileImageURL,
        role:user.role,
    };

    const token=JWT.sign(payload,secret);
    return token;

}

function validToken(token){
    const payload=JWT.verify(token,secret);
    return payload;
}

module.exports={
    createTokenForUser,
    validToken,
}