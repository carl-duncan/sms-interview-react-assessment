import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";





type EagerDeck = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Deck, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly faction: string;
  readonly cards: number[];
  readonly userId: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyDeck = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Deck, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly faction: string;
  readonly cards: number[];
  readonly userId: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Deck = LazyLoading extends LazyLoadingDisabled ? EagerDeck : LazyDeck

export declare const Deck: (new (init: ModelInit<Deck>) => Deck) & {
  copyOf(source: Deck, mutator: (draft: MutableModel<Deck>) => MutableModel<Deck> | void): Deck;
}