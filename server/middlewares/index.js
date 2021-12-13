module.exports = {
    isLoggedIn: (req, res, next) => {
        req.session.currentUser ? next() : res.status(401).json({ code: 401, errorMessage: "You must be logged to see this content" })
    },

    isAdmin: (req, res, next) => {
        req.session.currentUser.role === "ADMIN" ? next() : res.status(401).json( { code: 401, errorMessage: "Has de ser administrador para ver este contenido" })
    },


    checkRoles: (...roles) => (req, res, next) => {
        roles.includes(req.session.currentUser.role) ? next() : res.status(401).json({ code: 401, errorMessage: "No tienes los permisos adecuados" })
    }

    

    /////////   Alternativas  ////////
    // isLoggedIn: (req, res, next) => {
    // if (req.session.currentUser) {
    //   next()
    // } else {
    //   res.render("auth/login-page", { errorMessage: "Has de estar logueado para ver este contenido" })
    // }
    // }

}