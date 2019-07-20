import sns = require('@aws-cdk/aws-sns');
import subs = require('@aws-cdk/aws-sns-subscriptions');
import sqs = require('@aws-cdk/aws-sqs');
import cdk = require('@aws-cdk/core');
import ses = require('@aws-cdk/aws-ses');
import rds = require('@aws-cdk/aws-rds');
import { cfnTagToCloudFormation } from '@aws-cdk/core';

export class InfrastructureStack extends cdk.Stack {
  constructor(scope: cdk.App, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const dbProps: rds.CfnDBClusterProps = {
      engine: 'AURORA_POSTGRESQL',
      engineMode: 'SERVERLESS'
    }

    new rds.CfnDBCluster(
      this,
      'TenantDatabase', 
      dbProps
    );

    const queue = new sqs.Queue(this, 'InfrastructureQueue', {
      visibilityTimeout: cdk.Duration.seconds(300)
    });

    const topic = new sns.Topic(this, 'InfrastructureTopic');

    topic.addSubscription(new subs.SqsSubscription(queue));
  }
}
