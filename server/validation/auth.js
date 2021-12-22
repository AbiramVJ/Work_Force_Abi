import Joi from "joi";

// user

export const ValidatingUserSignup = (userData) =>{
    const Schema = Joi.object({
        fullName:Joi.string().required(),
        email:Joi.string().email().required(),
        password:Joi.string().min(8).required(),
        address:Joi.array().items(Joi.object({detail: Joi.string(),for:Joi.string()})),
        phoneNumber:Joi.number().min(10).required(),
        nic:Joi.string().required(),
        
    });
    return Schema.validateAsync(userData);

    
}

export const ValidatedUserSignin = (userData)=>{
    const Schema = Joi.object({
        email: Joi.string().email().required(),
        password: Joi.string().required(),
    });

    return Schema.validateAsync(userData);
}

// worker

export const ValidatingWorkerSignup = (userData) =>{
    const Schema = Joi.object({
        fullName:Joi.string().required(),
        email:Joi.string().email().required(),
        password:Joi.string().min(8).required(),
        address:Joi.array().items(Joi.object({detail: Joi.string(),for:Joi.string()})),
        phoneNumber:Joi.number().min(10).required(),
        Nic:Joi.string().required(),
        HourlyRate:Joi.number(),
        WorkCategory:Joi.string().required(),
        ExtraSkill:Joi.string()

        
    });
    return Schema.validateAsync(userData);

    
}

export const ValidatedWorkerSignin = (userData)=>{
    const Schema = Joi.object({
        email: Joi.string().email().required(),
        password: Joi.string().required(),
    });

    return Schema.validateAsync(userData);
}


