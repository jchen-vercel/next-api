import { comments } from "../../../data/comments";
export default function handler(req, res) {
  if (req.method === "GET") {
    res.status(200).json(comments);
  } else if (req.method === "POST") {
    const comment = req.body.comment;
    const newComment = {
      id: Date.now(), //easy way to set up new ID
      text: comment,
    };
    comments.push(newComment); //adding the comment that was just POSTed to the actual data folder (database)
    res.status(201).json(newComment); //responding with 201 that contains the newComment that was just POSTed
  }
}
