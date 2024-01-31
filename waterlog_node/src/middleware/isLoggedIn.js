const isUserAuthenticated = (req, res, next) => {
    console.log("user from middleware", req.user)
    // if (req.user) {
    //     next();
    // }

    // return res.status(401).json({
    //     message: 'You are not logged in'
    // });

    if (req.body.slno) {
        console.log("everything ok")
        next();
    }

    return res.status(401).json({
        message: 'mast joke mara re'
    });

}


module.exports = isUserAuthenticated;