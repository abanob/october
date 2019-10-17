import axios from 'axios';
import globalConfig from '../config';

const INPUT_TYPE = 'textquery';

function resolvePlaceId(searchCriteria) {
  if (!searchCriteria) {
    throw new Error('No search criteria provided');
  }

  const url = `https://maps.googleapis.com/maps/api/place/findplacefromtext/json?key=${globalConfig.googleMapApi.apiToken}&inputtype=${INPUT_TYPE}&input=${searchCriteria}`;
  return axios.get(url);
}

function resolvePlaceDetails(placeId) {
  if (!placeId) {
    throw new Error('No place_id provided');
  }

  const url = `https://maps.googleapis.com/maps/api/place/details/json?key=${globalConfig.googleMapApi.apiToken}&place_id=${placeId}`;
  return axios.get(url);
}

export default {
  resolvePlaceId,
  resolvePlaceDetails,
};
