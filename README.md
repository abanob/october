# October's technical test

The purpose of the test is to provide an API with a unique route which purpose is to provide, given a company's name or SIREN or address, it's phone number.

The retained solution exploits the Google API namely the google place Search & google place details APIs Which are consumed through a googleMapApiService.
---

## Installation instruction

```console
> git clone https://github.com/abanob/october.git
> cd october
> npm i 
> npm run start
```

### Tests

To run the unit tests, use the following command line 

```console
> npm run test
```

<b> :warning: CAUTION ! :warning:</b>

<b>The source code contains a template .env file</b>
<b>In order for the project to work, you must come with your own .env file with the following parameters</b>

Key | Description
------------ | -------------
API_TOKEN | API token created in GCP in order to access their APIs (more specifically : <b>Place Search API</b> & <b>Place Details API</b> )
PORT | Contains the default port that the application will be running on (if no specified in .env file, the application will run on port 5000)

## Project Usage

As stated above, the project contains a unique route in order to try and resolve a company's phone number


### Phone ROUTE

Method | Route 
------------ | -------------
GET | /phone 

##### Body

Key | Description | Required
------------ | ------------- | ------------
name | The name of the company | false
siren | The siren of the company | false
address | The address of the company | false

```json
{
    "name" : "October",
    "siren" : "",
    "address" : "94 rue de la Victoire 75009 Paris"
}
```
##### Reponse 

The response is a json object with a unique "phone" field, as shown below : 

```json
{
    "phone" : "01 02 03 04 05"
}
```