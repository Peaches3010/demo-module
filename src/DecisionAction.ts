import { Action, BotContext, Gambit, stateElement, TargetType } from "./type";

export class DecisionAction {
  private gambits: Gambit[];
  private context: BotContext;

  constructor(gambits: Gambit[], context: BotContext) {
    this.gambits = gambits;
    this.context = context;
  }

  public selectAction(): Action | null {
    for (const gambit of this.gambits) {
      const keys = this.getKeysByTarget(gambit.targetType);
      if (keys.includes(gambit.conditionKey)) {
        return gambit.action;
      }
    }
    return null;
  }


  private getKeysByTarget(target: TargetType): stateElement[] {
    switch (target) {
      case 'self': return this.context.selfKeys;
      case 'enemy': return this.context.enemyKeys;
      case 'ally': return this.context.allyKeys;
      case 'environment': return this.context.environmentKeys ?? [];
      default: return [];
    }
  }

}
