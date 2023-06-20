// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Deck } = initSchema(schema);

export {
  Deck
};