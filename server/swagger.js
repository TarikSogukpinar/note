const options = {
  language: "en-US", // Change response language. By default is 'en-US'
  disableLogs: false, // Enable/Disable logs. By default is false
  autoHeaders: true, // Enable/Disable automatic headers capture. By default is true
  autoQuery: true, // Enable/Disable automatic query capture. By default is true
  autoBody: true, // Enable/Disable automatic body capture. By default is true
};

import swaggerAutogen from "swagger-autogen";

const outputFile = "./swagger_output.json";

const endpointsFiles = [
  "./routes/contact.routes.js",
  "./routes/login.routes.js",
  "./routes/note.routes.js",
  "./routes/register.routes.js",
  "./routes/user.routes.js",
];

swaggerAutogen(outputFile, endpointsFiles);
