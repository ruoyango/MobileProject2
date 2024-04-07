/*
Authors: Elton Teo, Go Ruo Yan
Date: 1 April 2024
Summary: AWS.js: Configures the AWS S3 client for the application.
*/
// Ref: https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-s3/index.html
import { S3Client } from '@aws-sdk/client-s3';

// Constants
const awsRegion = 'us-east-1';
export const awsBucket = 'mobile-project-2-data';

export const S3 = new S3Client({
  region: awsRegion,
});