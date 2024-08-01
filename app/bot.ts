import { NextApiRequest, NextApiResponse } from 'next';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    // Assuming the body contains a "message" object
    const message = req.body.message;

    // Handling messages or commands from Telegram
    if (message) {
      // Example: Send a response back to the user
      await fetch(`https://api.telegram.org/bot${process.env.BOT_TOKEN}/sendMessage`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          chat_id: message.chat.id,
          text: 'Hello, this is your bot response!',
        }),
      });

      return res.status(200).json({ status: 'ok' });
    }
  }

  res.setHeader('Allow', ['POST']);
  res.status(405).end('Method Not Allowed');
};
