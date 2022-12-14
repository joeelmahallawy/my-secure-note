import { NextApiRequest, NextApiResponse } from "next";
import { decrypt, encrypt } from "../../helpers";
import prisma from "../../prisma";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { data, path, pin, image } = JSON.parse(req.body);

    const encryptedData = await encrypt(data);

    const page = await prisma.page.findUnique({ where: { path } });

    const decryptedPin = await decrypt(page.pin);

    if (pin !== decryptedPin) throw new Error("Not authorized: Invalid pin");

    // NOTE: This was recntly changed, figure out how to remove a single photo
    if (image.length)
      await prisma.page.updateMany({
        where: { path },
        data: {
          body: encryptedData,
          imageUrl: { set: [...image] },
        },
      });
    else
      await prisma.page.updateMany({
        where: { path },
        data: { body: encryptedData },
      });

    await prisma.$disconnect();

    res.status(200).json({ success: true });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
export default handler;
