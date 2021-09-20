import { DynamoDB } from "@aws-sdk/client-dynamodb";
import { region, credentials } from "@lib/aws-sdk";

export const ddbClient = new DynamoDB({
  region,
  credentials,
  apiVersion: "2012-08-10",
});
