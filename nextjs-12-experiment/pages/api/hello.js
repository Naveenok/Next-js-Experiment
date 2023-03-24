// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import pokemon from "../../pokemon.json"

export default function handler(req, res) {
  res.status(200).json(pokemon)
}
