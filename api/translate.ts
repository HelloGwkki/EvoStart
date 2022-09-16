/**
 * Only support Youdao Translate cuz something went wrong.
 */

import { VercelRequest, VercelResponse } from "@vercel/node";
import fetch from "node-fetch";

export default async function (request: VercelRequest, response: VercelResponse){
    const { src, type } = request.query;

    const res = await fetch(
        `https://fanyi.youdao.com/translate?doctype=json&type=${type}&i=${src}`
    );

    const data = await res.json();
    response.status(200).json(data)
}
