'use strict';

//module.exports.entryPoint = async (event) => {
  module.exports.entryPoint = (event) => {
  console.log('Into Entry Point')
  /* return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'Go Serverless v1.0! Your function executed successfully!',
        input: event,
      },
      null,
      2
    ),
  }; */

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};
