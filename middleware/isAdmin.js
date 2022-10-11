module.exports = (req, res, next) => {
    
    // checks if the user is an Admin when trying to access a specific page
    if (!req.session.user.isAdmin) {
      return res.redirect("/");
    }
   
    next();
  };
  