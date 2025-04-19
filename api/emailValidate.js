const validator = require('email-validator');

module.exports = (req, res) => {
  if (req.method === 'POST') {
    const { email } = req.body;
    if (email) {
      console.info('/emailValidate call success');
      res.json({ status: validator.validate(email) });
    } else {
      console.warn('/emailValidate wrong input');
      res.status(400).json({ status: 'wrong input' });
    }
  } else {
    res.status(405).send('Method Not Allowed');
  }
};
