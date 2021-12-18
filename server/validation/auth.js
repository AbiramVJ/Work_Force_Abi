import Joi from "joi";


export const ValidatingSignup = (userData) =>{
    const Schema = Joi.object({
        fullName:Joi.string().required(),
        email:Joi.string().email().required(),
        password:Joi.string().min(8).required(),
        address:Joi.array().items(Joi.object({detail: Joi.string(),for:Joi.string()})),
        phoneNumber:Joi.number().min(10).required(),
        nic:Joi.string().required()
    });
    return Schema.validateAsync(userData);

    
}

export const ValidatedSignin = (userData)=>{
    const Schema = joi.object({
        email: joi.string().email().required(),
        password: joi.string().required(),
    });

    return Schema.validateAsync(userData);
}