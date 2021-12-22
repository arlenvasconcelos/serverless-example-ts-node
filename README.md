# Simple project with Serverless - AWS Node.js Typescript

This is a simple project created to test Serverless.
This project has two endpoints: 

- Create TODO:
    - POST: http://localhost:3000/dev/todos/{userid}
    - body:
    ```json
    {
        title: 'Task name',
        deadline: new Date(deadline)
    }
    ```

- List TODOs:
    - GET: http://localhost:3000/dev/todos/{userid}



This project has been generated using the `aws-nodejs-typescript` template from the [Serverless framework](https://www.serverless.com/).

For detailed instructions, please refer to the [documentation](https://www.serverless.com/framework/docs/providers/aws/).

## Installation/deployment instructions

- Run `yarn` to install the project dependencies
- Run `yarn dynamo:start` to run local dynamoDB
- In new terminal, run `yarn dev` to run serverless on localhost

Done. You can test application with Insomnia (or similar).