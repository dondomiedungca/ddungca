import { NextApiResponse, NextApiRequest } from "next";
import axios from "axios";

export default async function POST(req: NextApiRequest, res: NextApiResponse) {
  const { email, message, name } = JSON.parse(req.body);

  const response = await axios.post(`${process.env.BACKEND_API}/mail`, {
    email,
    name,
    message,
  });

  res.status(200).json({ success: response.data });
}
