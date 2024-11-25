import { Resend } from 'resend';
import type { NextApiRequest, NextApiResponse } from 'next';

const resend = new Resend('re_EcDRxk8H_Pkb67UUHLvNSgqATPMLUYHZB');

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { name, email } = req.body;

  try {
    await resend.emails.send({
      from: 'Portfolio <onboarding@resend.dev>',
      to: 'nbaldovino5@gmail.com',
      subject: 'New Password Request for Portfolio Case Study',
      html: `
        <h2>New password request received</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p>This user is requesting access to your portfolio case study.</p>
      `,
    });

    res.status(200).json({ message: 'Request sent successfully' });
  } catch (error) {
    console.error('Failed to send email:', error);
    res.status(500).json({ message: 'Failed to send request' });
  }
} 