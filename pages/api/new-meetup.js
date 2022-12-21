import { MongoClient } from "mongodb";
async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;
    //post data

    // const id = req.params.id;
    const connectionString =
      "mongodb+srv://fikremariam:f%40mongodb807@cluster0.ntqn95a.mongodb.net/?retryWrites=true&w=majority";
    const client = await MongoClient.connect(connectionString);
    const db = client.db();
    const meetupCollection = db.collection("meetups");
    const result = await meetupCollection.insertOne(data);
    console.log(result);
    res.status(202).json({ message: "OK", data: { ...data, id: result._id } });
    client.close();
    res.end();
  }
  res.status(200).json({ message: "OK" });
}
export default handler;
