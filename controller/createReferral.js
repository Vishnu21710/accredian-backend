import { CreatReferral } from "../validation/index.js";
import { db } from "../db/index.js";
import { sendMail } from "../lib.js";

export const createReferral = async (req, res) => {
  const body = req.body;
  const { success, data: bodyData, error } = CreatReferral.safeParse(body);
  console.log(body, "body");

  if (!success) {
    return res.json({
      field_errors: error.flatten().fieldErrors,
    });
  }

  console.log(req.user);

  try {

    const user = await db.user.findUnique({
      where:{
        id: req.user.id
      }
    })

    const data = await db.referral.create({
      data: bodyData,
    });
    console.log(data, "created data");
    if (data) {
        sendMail((data?.referrer_name || data.referrer_email.split('@')[0]).toUpperCase(),data.referee_email, user.code)
      return res.json(data);
    }
  } catch (error) {
    console.log(error);
    return res.json({
      msg: "Something went wrong"
    });
  }
};
