import type { NextApiRequest, NextApiResponse } from "next";
import { ddbClient } from "@lib/dynamodb";
import { unmarshall } from "@aws-sdk/util-dynamodb";

type Data = {
  items: {
    [key: string]: any;
  }[];
  meta: {
    scannedCount: number;
  };
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const scanRes = await ddbClient.scan({
    TableName: "lvlzUs-user",
  });

  const {
    $metadata: { httpStatusCode },
    Items,
    ScannedCount,
  } = scanRes;

  if (!Items) {
    return res.status(204).json({
      items: [],
      meta: {
        scannedCount: 0,
      },
    });
  }

  const items = Items.map((item) => unmarshall(item));

  return res.status(httpStatusCode ?? 200).json({
    items,
    meta: {
      scannedCount: ScannedCount ?? 0,
    },
  });
}
