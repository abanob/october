import phoneService from '../services/phoneService';

require('regenerator-runtime');

describe('getPlace method Tests', () => {
  test('getPlace should return an empty object if no criteria is passed', async () => {
    // Arrange
    const place = await phoneService.getPlace();

    // Act
    // Assert
    expect(place).toBeTruthy();
    expect(place).toStrictEqual({});
  });

  test('getPlace should return a truthy object if a criteria is passed and should contain "place_id" field', async () => {
    // Arrange
    const testCompany = 'October';

    // Act
    const place = await phoneService.getPlace(testCompany);

    // Assert
    expect(place).toBeTruthy();
    expect(Object.keys(place)).toContain('place_id');
  });
});
