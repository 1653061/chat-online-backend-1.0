import { Field, ID, ObjectType } from '@nestjs/graphql';
import { toGlobalId } from 'graphql-relay';
import { Node } from 'Node/models/node.models';

@ObjectType({ implements: Node })
export class User implements Node {
  @Field()
  _id: string;

  readonly createdAt: Date;

  readonly updatedAt: Date;

  @Field({ name: 'id'})
  relayId: string

  @Field()
  isVerified: boolean;

  @Field()
  name: string;

  @Field()
  email: string;

  @Field({nullable: true})
  phone: string;
}
