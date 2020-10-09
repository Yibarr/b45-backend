import celeb from 'celebrate'

const { celebrate, Joi, Segments } = celeb

export default {
  create: celebrate({
    [Segments.BODY]: Joi
      .object()
      .keys({
        email: Joi.string().email().required(),
        first_name: Joi.string().required(),
        last_name: Joi.string().required(),
        phone_number: Joi.string().max(10).required(),
        password: Joi.string().required(),
      }),
  }),
  login: celebrate({
    [Segments.BODY]: Joi
      .object()
      .keys({
        email: Joi.string().email().required(),
        password: Joi.string().required(),
      }),
  }),
  updateOne: celebrate({
    [Segments.BODY]: Joi.object().keys({
      first_name: Joi.string(),
      last_name: Joi.string(),
      email: Joi.string().email(),
      password: Joi.string(),
    }),
  }),
  findOne: celebrate({
    [Segments.PARAMS]: Joi.object().keys({
      id: Joi.string().required(),
    }),
  }),
}
