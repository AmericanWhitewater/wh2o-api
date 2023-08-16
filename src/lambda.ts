import awsLambdaFastify from "@fastify/aws-lambda"

import app from "./server"

const proxy = awsLambdaFastify(app)

exports.handler = proxy
