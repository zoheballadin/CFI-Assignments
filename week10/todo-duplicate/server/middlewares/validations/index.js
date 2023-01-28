import {body, validationResult} from "express-validator";

function userRegisterValidation(){
    return [
        body("username", "User name is required").notEmpty().isLength({min: 3}),
        body("email", "Email is required").isEmail(),
        body("phone", "phone is required").isMobilePhone(),
        body("location","Location required").notEmpty(),
        body("password", "Please must have 1 lowercase 1 uppercase 1 symbol and should be 8 characters")
        .isStrongPassword(),
        body('password2').custom((value, { req }) => {
            if (value !== req.body.password) {
              throw new Error('Password confirmation does not match password');
            }
        
            // Indicates the success of this synchronous custom validator
            return true;
          })
    ]
}

function userLoginValidation(){
  return [
        body("email", "Email is required").isEmail(),
        body("password", "Please must have 1 lowercase 1 uppercase 1 symbol and should be 8 characters")
        .isStrongPassword()
  ]
}
function errorMiddleware(req,res,next){
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    return next()
}

function addTaskValidations(){
  return body("todoName", "Task name required").notEmpty()
}

export {userRegisterValidation,userLoginValidation, errorMiddleware, addTaskValidations}