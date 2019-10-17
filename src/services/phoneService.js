import googleMapApi from './googleMapApi';
import errorFactory from '../errors/errorFactory';

/**
 *
 * @param {string} criteria The criteria used by the google API to search for the company id
 */
async function getPlace(criteria) {
  if (!criteria) { return {}; }

  const googlePlaceSearchApiResponse = await googleMapApi.resolvePlaceId(criteria);

  const {
    data: {
      candidates,
      status,
    },
  } = googlePlaceSearchApiResponse;
  const [firstLocation] = candidates;

  if (status !== 'OK') {
    throw errorFactory(status);
  }

  return firstLocation || {};
}

/**
 *
 * @param {string} placeId The place id used to retrieve the company details
 */
async function getPhone(placeId) {
  const googlePlaceDetailsApiResponse = await googleMapApi.resolvePlaceDetails(placeId);

  const {
    data: {
      result: {
        formatted_phone_number: formattedPhoneNumber,
        international_phone_number: internationalPhoneNumber,
      },
      status,
    },
  } = googlePlaceDetailsApiResponse;

  if (status !== 'OK') {
    throw errorFactory(status);
  }

  return formattedPhoneNumber || internationalPhoneNumber;
}

/**
 *
 * @param {object} company The fields used to perform a company search on the google api
 */
async function resolveCompanyPhone({ name = '', siren = '', address = '' }) {
  const criteria = `${name} ${siren} ${address}`;
  const { place_id: placeId } = await getPlace(criteria);
  const phone = await getPhone(placeId);

  if (!phone) {
    throw errorFactory(404);
  }

  return phone;
}

export default {
  resolveCompanyPhone,
  getPhone,
  getPlace,
};
