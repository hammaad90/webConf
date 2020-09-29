const webinarDb = require('../model/webinar')

const createWebinar =  async function(req, res) {
    try {
        let result =  await createToWebinar(req.body);
      return res
        .status(200)
        .send(result);
    } catch (err) {
      return res
        .status(500)
        .send(err.message);
    }
  }

  async function createToWebinar(data) {
    let result =  await webinarDb.create(data);
    return result
  }

  module.exports = {
    createWebinar
  };