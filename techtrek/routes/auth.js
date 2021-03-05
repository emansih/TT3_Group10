const router = require('express').Router();
const Joi = require('@hapi/joi');
const server = "https://849rs099m3.execute-api.ap-southeast-1.amazonaws.com/techtrek"

dotenv.config();

const loginValidation = (data) => {
    const schema = Joi.object({
        username: Joi.string().required(),
        password: Joi.string().required()
    })
}
router.post(server + '/login', (req, res) => {
    res.send('Register');
});

module.exports = router;