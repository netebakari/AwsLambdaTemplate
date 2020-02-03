/* eslint-disable @typescript-eslint/no-unused-vars */
import * as LambdaTypes from "aws-lambda";
import * as env from "./env";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
exports.handler = async (event: LambdaTypes.APIGatewayEvent | any, context: LambdaTypes.Context): Promise<boolean> => {
  console.log("HELLO WORLD");
  return true;
};
