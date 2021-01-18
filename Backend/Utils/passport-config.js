const { Strategy, ExtractJwt } = require("passport-jwt");
const dotenv = require("dotenv");
dotenv.config();
const User = require("../Models/UserModel");
function configurePassport(passport) {
  passport.use(
    new Strategy(
      {
        jwtFromRequest: (req) => {
          return req.cookies.jwt;
        },
        secretOrKey: process.env.SECRET,
      },
      async (payload, done) => {
        const findUser = await User.findById(payload.sub)
          .select("-password")
          .select("-confirmed");

        if (findUser) {
          console.log("findUser=", findUser);
          console.log("user exist");
          return done(null, findUser);
        } else {
          return done("User not found", false);
        }
      }
    )
  );
}
module.exports = configurePassport;
