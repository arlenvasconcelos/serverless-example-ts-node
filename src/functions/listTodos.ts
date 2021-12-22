import { APIGatewayProxyHandler } from "aws-lambda";

import { document } from "../utils/dynamodbClient";

export const handle: APIGatewayProxyHandler = async (event) => {
  const { userId } = event.pathParameters;

  const response = await document
    .scan({
      TableName: "todos",
      FilterExpression: "user_id = :user_id",
      ExpressionAttributeValues: {
        ":user_id": userId,
      },
    })
    .promise();

  console.log(response)


  return {
    statusCode: 200,
    body: JSON.stringify(response.Items),
  };
};