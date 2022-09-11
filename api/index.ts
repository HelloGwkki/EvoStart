import { VercelRequest, VercelResponse } from "@vercel/node";
import { say } from "cowsay";

export default async (request:VercelRequest, response:VercelResponse) => {
    response.status(200).setHeader("Content-type", "text/plain").send(
        say({
            text: "This is EvoStart. Who\'s that?",
            T: "v"
        })
    );
}