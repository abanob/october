import companiesToTest from './companies';
import phoneService from '../services/phoneService';

require('regenerator-runtime');

describe('Automation tests', () => {
  companiesToTest.forEach(async (company) => {
    test('Application should resolve the correct phone number', async () => {
      const phone = await phoneService.resolveCompanyPhone(company);
      expect(phone).toStrictEqual(company.phone);
    });
  });
});
