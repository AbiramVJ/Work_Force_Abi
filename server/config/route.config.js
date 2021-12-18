import passport from "passport";
import JwtPassport from "passport-jwt";

//database
import { UserModel } from "../Database/User";

const JWTStrategy = JwtPassport.Strategy;
const ExtractJwt = JwtPassport.ExtractJwt;

const options = {
    jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretKey:"WorkForce",

};

export default(passport)=>{
    passport.use(
        new JWTStrategy(options, async (jwt__payload,done)=>{
            try{
                const doesUserExit = await UserModel.findById(jwt__payload.user);
                if(!doesUserExit) return done(null,false);
                return done(null,doesUserExit)

            }catch(error){
                throw new Error(error);

            }
        })
    )
}