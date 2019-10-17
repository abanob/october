import { Router } from 'express';
import phoneService from '../services/phoneService';

const phoneRouter = Router();

phoneRouter.route('/phone').get(async (request, response, next) => {
  try {
    const phoneNumber = await phoneService.resolveCompanyPhone(request.body);
    response.send({ phone: phoneNumber });
  } catch (err) {
    next(err);
  }
});

module.exports = phoneRouter;
