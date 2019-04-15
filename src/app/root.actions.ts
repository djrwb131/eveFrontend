import { Action } from '@ngrx/store';
import { Item } from './item';
import { PriceHistoryEntry } from './price-history';



export enum ActionCategories {
  Item    = '[Global] Item Action',
  Market  = '[Global] Market Data Action',
}

export enum MarketActions {
  RequestPriceHistory           = '[Market] Request price history for globally selected item',
  RequestPriceHistoryForRegion  = '[Market] Request price history for globally selected item in a specific region',
  AddPriceHistoryForRegion      = '[Market] Add price history for region to ngrx store',
  AddMarketRegion               = '[Market] Add region to relevant market regions list',
  RemoveMarketRegion            = '[Market] Remove region from relevant market regions list',
  ClearMarketRegions            = '[Market] Remove all regions from relevant market regions list',
}

export enum ItemActions {
  SetItem                       = '[Item] Set globally selected item',
  SyncItem                      = '[Item] Sync item details in global ngrx store',
  RequestItemDetails            = '[Item] Request item details from external API',
  RequestIconURLForItem         = '[Item] Request icon URL for an item from external API',
}



export class RequestItemDetails implements Action {
  readonly category = ActionCategories.Item ;
  readonly type = ItemActions.RequestItemDetails ;
  constructor(public typeID: number) {}
}

export class RequestIconURLForItem implements Action {
  readonly category = ActionCategories.Item ;
  readonly type = ItemActions.RequestIconURLForItem ;
  constructor(public item: Item) {}
}

export class SetItem implements Action {
  readonly category = ActionCategories.Item ;
  readonly type = ItemActions.SetItem ;
  constructor(public typeID: number) {}
}

export class SyncItem implements Action {
  readonly category = ActionCategories.Item ;
  readonly type = ItemActions.SyncItem ;
  constructor(public item: Item) {}
}



export class RequestPriceHistory implements Action {
  readonly category = ActionCategories.Market ;
  readonly type = MarketActions.RequestPriceHistory ;
  constructor(public typeID: number) {}
}

export class RequestPriceHistoryForRegion implements Action {
  readonly category = ActionCategories.Market ;
  readonly type = MarketActions.RequestPriceHistoryForRegion ;
  constructor(public typeID: number, public regionID: number) {}
}

export class AddPriceHistoryForRegion implements Action {
  readonly category = ActionCategories.Market ;
  readonly type = MarketActions.AddPriceHistoryForRegion ;
  constructor(public typeID: number, public priceHistory: PriceHistoryEntry[], public regionID: number) {}
}

export class AddMarketRegion implements Action {
  readonly category = ActionCategories.Market ;
  readonly type = MarketActions.AddMarketRegion ;
  constructor(public regionID: number) {}
}

export class RemoveMarketRegion implements Action {
  readonly category = ActionCategories.Market ;
  readonly type = MarketActions.RemoveMarketRegion ;
  constructor(public regionID: number) {}
}

export class ClearMarketRegions implements Action {
  readonly category = ActionCategories.Market ;
  readonly type = MarketActions.ClearMarketRegions ;
}



export type ActionsUnion = ItemActionsUnion | MarketActionsUnion;

export type ItemActionsUnion = SetItem | SyncItem;

export type MarketActionsUnion = RequestPriceHistory | RequestPriceHistoryForRegion |
  AddPriceHistoryForRegion |
  AddMarketRegion | RemoveMarketRegion | ClearMarketRegions;
