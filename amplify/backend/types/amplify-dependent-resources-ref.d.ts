export type AmplifyDependentResourcesAttributes = {
  "api": {
    "amplitudeproxy": {
      "ApiId": "string",
      "ApiName": "string",
      "RootUrl": "string"
    },
    "regenerable": {
      "GraphQLAPIEndpointOutput": "string",
      "GraphQLAPIIdOutput": "string",
      "GraphQLAPIKeyOutput": "string"
    }
  },
  "auth": {
    "Regenerable": {
      "AppClientID": "string",
      "AppClientIDWeb": "string",
      "IdentityPoolId": "string",
      "IdentityPoolName": "string",
      "UserPoolArn": "string",
      "UserPoolId": "string",
      "UserPoolName": "string"
    }
  },
  "function": {
    "amplitudeproxy": {
      "Arn": "string",
      "LambdaExecutionRole": "string",
      "LambdaExecutionRoleArn": "string",
      "Name": "string",
      "Region": "string"
    }
  },
  "storage": {
    "s3regenerablestorage623682d8": {
      "BucketName": "string",
      "Region": "string"
    }
  }
}