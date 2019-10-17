import googleMapApi from '../services/googleMapApi';

require('regenerator-runtime');

describe('Resolving a place', () => {
  test('resolvePlaceId should throw if no criteria is passed', async () => {
  // Arrange
    const resolvePlaceIdWrapper = () => {
      googleMapApi.resolvePlaceId();
    };

    // Act
    // Assert
    expect(resolvePlaceIdWrapper).toThrow();
  });

  test('resolvePlaceId should return a promise otherwise', async () => {
    // Arrange
    const criteria = 'whatever';

    // Act
    const place = googleMapApi.resolvePlaceId(criteria);

    // Assert
    expect(place).toBeInstanceOf(Promise);
  });
});

describe('Resolve place details', () => {
  test('resolvePlaceDetails should throw if no placeId is passed', async () => {
    // Arrange
    const resolvePlaceDetailsWrapper = () => {
      googleMapApi.resolvePlaceDetails();
    };

    // Act
    // Assert
    expect(resolvePlaceDetailsWrapper).toThrow();
  });

  test('resolvePlaceDetails should return a promise otherwise', async () => {
    // Arrange
    const placeId = 'whatever';

    // Act
    const details = googleMapApi.resolvePlaceDetails(placeId);

    // Assert
    expect(details).toBeInstanceOf(Promise);
  });
});
