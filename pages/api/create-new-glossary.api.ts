import { NextApiRequest, NextApiResponse } from "next";
import { resolve } from "path";
// import GlossaryModel from "../../models/glossary.model";
export default function (req: NextApiRequest, res: NextApiResponse) {
  if (req.method == "POST") {
    const { ar_name, ar_definition, en_name, en_definition } = req.body;
    return new Promise((resolve, reject) => {
      // GlossaryModel.sync().then(() => {
      //   GlossaryModel.create({
      //     ar_name,
      //     ar_definition,
      //     en_name,
      //     en_definition,
      //   })
      //     .then((data) => {
      //       console.log(data);
      //     })
      //     .catch((err) => {
      //       console.log(err);
      //     });
      // });
      // resolve(res.json({ name: "Mahmoud" }));
      resolve(res.send("hello"));
    });
  } else {
    return new Promise((resolve, reject) => {
      reject(res.status(405).send("Sorry, It's not Allowed"));
    });
  }
}
