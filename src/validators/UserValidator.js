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
}
