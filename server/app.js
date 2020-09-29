const express 				=  require('express');
const app 					=  express();
const routes  				=  require('./route/route');
const path 					= require('path');
const dbConnect 			= require('./config/databaseConnection');
const dotenv 				= require('dotenv').config();
const PORT 					= process.env.PORT


const start = async function () {
	try {
	  let startMongoDb = await dbConnect.connect();
	  let serverStart = await startServer();
	  return;
	} catch (err) {
	  console.log('Try it error', err);
	}
  }

  const startServer = async function () {
	console.log(`Server is running on port ${PORT}`);
	return await app.listen(PORT);
  
  }

app.use('/api', routes)
app.use(express.static(path.join(__dirname, '../dist')));
app.use(/^((?!(api)).)*/, (req, res) => {
	res.sendFile(path.join(__dirname, '../dist/index.html'));
  });

  module.exports = {
	start
  };