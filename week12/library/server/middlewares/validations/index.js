import { body, validationResult } from "express-validator";

const registerValidations = () => {
  return [
    body("email", "A valid email is required").isEmail(),
    body("username", "Username must be at least 5 characters long")
      .notEmpty()
      .isLength({ min: 5 }),
    // body(
    //   "password",
    //   "Password must contain at least 1 number, Uppercase, Lowercase and Special character, must be at least 8 characters long"
    // ).isStrongPassword(),
    body("fullname", "Name must be at least 5 characters long")
      .notEmpty()
      .isLength({ min: 5 }),
    // body("password").isLength({ min: 5 }),
    // body("password2").custom((value, { req }) => {
    //   if (value !== req.body.password) {
    //     throw new Error("Password confirmation does not match password");
    //   }

    //   // Indicates the success of this synchronous custom validator
    //   return true;
    // }),
  ];
};

const bookValidations = () => {
  return [
    body("title", "Title must be at least three characters long").isLength({
      min: 3,
    }),
    body("author", "Author must be at least 5 characters long").isLength({
      min: 5,
    }),
    body("coverImageUrl", "Valid Image URL is required").isURL(),
    body("synopsis", "Synopsis must contain at least 10 characters").isLength({
      min: 10,
    }),
    body("publisher", "Publisher must be at least 3 characters long").isLength({
      min: 3,
    }),
    body("pageCount", "Page Count must be a valid number").isNumeric(),
    body("ISBN", "ISBN must contain at least 5 characters").isLength({
      min: 5,
    }),
  ];
};

const errorMiddleware = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};

export { registerValidations, errorMiddleware ,bookValidations};
