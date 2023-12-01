# videotranslatorBE
BE of video translator
This project is about the deployment of Node application in the serverless architecture. AWS lambda is used in the process
1. Create a user and user-group in aws IAM
2. Give five permission for the user-group
    a. AWSCloudFormationFullAccess
    b. AWSLambda_FullAccess
    c. AWSLambdaRole
    d. CloudWatchLogsFullAccess
    e. IAMFullAccess
3. Get the ACCESS_KEY_ID and SECRET_KEY
4. Create the git repo for the project
5. In settings->Secret key -> Add both the ACCESS_ID and SECRET_KEY into the Repository secrets
6. run npm i -g serverless in terminal to install serverless