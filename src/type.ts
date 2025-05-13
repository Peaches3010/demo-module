
export type stateElement = string

export type TargetType = 'self' | 'enemy' | 'ally' | 'environment';

export interface Action {
  name: string;
  desc:  string;
}

export interface Gambit {
  conditionKey: stateElement;
  action: Action;
  targetType: TargetType;
}


export interface BotContext {
  selfKeys: stateElement[]; 
  enemyKeys: stateElement[]; 
  allyKeys: stateElement[]; 
  environmentKeys?: stateElement[];   
}


