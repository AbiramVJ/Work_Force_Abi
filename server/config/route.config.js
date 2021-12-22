import passport from "passport";
import JwtPassport from "passport-jwt";

//database
import { UserModel } from "../Database/User";
import { WorkerModel } from "../Database/Worker";

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
                const doesWorkerExit = await WorkerModel.findById(jwt__payload.Worker);

                if(!doesUserExit || !doesWorkerExit ){
                    return done(null,false);
                } else{}
                return done(null,doesUserExit,doesWorkerExit);

            }catch(error){
                throw new Error(error);

            }
        })
    )
}