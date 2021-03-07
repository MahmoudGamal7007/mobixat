import type {
  NextApiHandler,
  NextApiRequest,
  NextApiResponse,
  PageConfig,
} from "next";
import cors from "cors";
cors({ methods: ["method"] });
import { join } from "path";
import formidable from "formidable";
// const formidable = require("formidable");
export const config: PageConfig = {
  api: {
    bodyParser: false,
  },
};

const handler = async function (req: NextApiRequest, res: NextApiResponse) {
  return new Promise((resolve, reject) => {
    const form = new formidable.IncomingForm();
    form.multiples = true;
    form.uploadDir = join("./public/uploads/images/temp/");
    form.keepExtensions = true;
    form.parse(req, (err, fields, files) => {
      if (err) return reject(err);
      // console.log(fields, files);
      // res.status(200).json({ fields, files });
      resolve(res.send({ fields, files }));
    });
  });
};

export default handler;
