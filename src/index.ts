import * as LambdaTypes from "aws-lambda";
import * as env from "./env";

exports.handler = async (
  event: LambdaTypes.APIGatewayEvent | any,
  context: LambdaTypes.Context
) => {
  console.log("HELLO WORLD");
  return true;
};
