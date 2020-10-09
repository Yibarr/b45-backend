import celeb from 'celebrate'

const { celebrate, Joi, Segments } = celeb

export default {
  create: celebrate({
    [Segments.BODY]: Joi.object().keys({
      url_photo: Joi.string().required(),
      body: Joi.string(),
      comments: Joi.array()
        .items(
          Joi.object()
            .keys({
              user_id: Joi.string().required(),
              body: Joi.string(),
            }),
        ),
      permissions: Joi.string().valid('PRIVATE', 'PUBLIC'),
    }),
  }),
  findOne: celebrate({
    [Segments.PARAMS]: Joi.object().keys({
      id: Joi.string().required(),
    }),
  }),
}
