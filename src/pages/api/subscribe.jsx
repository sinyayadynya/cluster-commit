import axios from 'axios';

const subscribe = async (req, res) => {
  const { email } = req.body;
  if (!email) {
    return res.status(400).json({ error: 'Email is required' });
  }

  try {
    const data = {
      email_address: email,
      status: 'subscribed'
    };

    const response = await axios.post(
      `https://${process.env.MAILCHIMP_SERVER_PREFIX}.api.mailchimp.com/3.0/lists/${process.env.MAILCHIMP_LIST_ID}/members`,
      data,
      {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `apikey ${process.env.MAILCHIMP_API_KEY}`
        }
      }
    );

    return res.status(200).json({ error: '' });

  } catch (error) {
    return res.status(500).json({ error: 'Error subscribing to Mailchimp' });
  }
};

export default subscribe;
