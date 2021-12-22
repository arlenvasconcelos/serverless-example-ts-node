import { document } from "../utils/dynamodbClient";

import {v4 as uuidV4} from 'uuid';

interface ICreateTodo {
  title: string;
	deadline: string;
}



export const handle = async (event) => {
  const { userId } = event.pathParameters;
  const { title, deadline } = JSON.parse(event.body) as ICreateTodo;


  const newTodo = await document
      .put({
        TableName: "todos",
        Item: {
          id: uuidV4(),
          user_id: userId,
          title,
          done: false,
          deadline,
        },
      })
      .promise();

  return {
    statusCode: 201,
    body: JSON.stringify(newTodo),
    headers: {
      "Content-type": "application/json",
    },
  };
};