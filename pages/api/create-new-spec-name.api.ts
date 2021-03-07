import { NextApiRequest, NextApiResponse } from "next";
import { Error, ValidationError } from "sequelize/types";
import Specification from "../../models/specification.model";

export default function (req: NextApiRequest, res: NextApiResponse) {
  ///////////////////////////////
  ///////////////////////////////
  ///////////////////////////////
  ///////////////////////////////
  /// POST METHOD
  if (req.method === "POST") {
    return new Promise((resolve, reject) => {
      Specification.sync().then(() => {
        const { en_spec_name, ar_spec_name, absolute_spec_name } = req.body;
        // Insert The new spec name into DB
        Specification.create({
          en_spec_name,
          ar_spec_name,
          absolute_spec_name,
        })
          .then(() => {
            resolve(res.json({ name: "Mahmoud" }));
          })
          .catch((err) => {
            console.error(err);
            resolve(res.status(401).json({ errorMessage: err.message }));
          });
      });
    });
  }
  ///////////////////////////////
  ///////////////////////////////
  ///////////////////////////////
  ///////////////////////////////
  /// PUT METHOD
  else if (req.method === "PUT") {
    return new Promise(async (resolve) => {
      req.body.forEach((record) => {
        Specification.sync();
        Specification.update(
          {
            en_spec_name: record.en_spec_name,
            ar_spec_name: record.ar_spec_name,
            absolute_spec_name: record.absolute_spec_name,
          },
          { where: { en_spec_name: record.where } }
        ).catch(async (err) => {
          console.error("The Error message is >>>>>>>>>> ", err.errors);
        });
      });
      resolve(res.status(200).send("Done"));
    });
  }
}
