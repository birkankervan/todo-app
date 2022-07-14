// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { collectionHandler } from "mongodb/db";
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  status: boolean;
  statusCode: number;
  message: string;
  todos?: Array<Todo>;
};

type Todo = {
  _id: any;
  todo: string;
  createdAt: Date;
  isDone: boolean;
};

let response: Data = {
  status: false,
  statusCode: 500,
  message: "WE HAVE A PROBLEM",
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { todosCollection, ObjectId } = await collectionHandler();

  if (req.method === "GET") {
    const todos = await todosCollection
      .find({})
      .sort({ isDone: 1, createdAt: -1 })
      .toArray();

    if (todos) {
      response = {
        status: true,
        statusCode: 200,
        message: "SUCCESS",
        todos,
      };
      return res.status(200).json(response);
    }
    return res.status(500).json(response);
  }

  if (req.method === "POST") {
    const data = { createdAt: new Date(), ...req.body };
    const result = await todosCollection.insertOne(data);
    if (result.acknowledged) {
      response = {
        status: true,
        statusCode: 200,
        message: "Todo created successfully",
      };
      return res.status(200).json(response);
    }
    return res.status(500).json(response);
  }

  if (req.method === "PUT") {
    const { id, isDone, todo } = req.body;
    const filter = { _id: new ObjectId(id) };

    const update = {
      $set: {
        createdAt: new Date(),
        ...(todo && { todo }),
        ...(typeof isDone !== "undefined" && { isDone }),
      },
    };
    const result = await todosCollection.updateOne(filter, update);

    if (result.acknowledged && result.modifiedCount > 0) {
      response = {
        status: true,
        statusCode: 200,
        message: "Todo updated successfully",
      };
      return res.status(200).json(response);
    }
    return res.status(500).json(response);
  }

  if (req.method === "DELETE") {
    const { id } = req.query;
    if (!id) {
      return res.status(500).json(response);
    }

    const result = await todosCollection.deleteOne({
      _id: new ObjectId(id as string),
    });

    if (result.acknowledged && result.deletedCount > 0) {
      response = {
        status: true,
        statusCode: 200,
        message: "Todo removed successfully",
      };
      return res.status(200).json(response);
    }

    return res.status(500).json(response);
  }
}
