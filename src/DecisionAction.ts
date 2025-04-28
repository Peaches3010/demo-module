import { Action, stateElement } from "./type";

export class DecisionAction {
  private keys: stateElement[];
  private actions: Record<stateElement, Action>;
  private conditionOrder: stateElement[];


  constructor(keys: stateElement[], actions: Record<stateElement, Action>, conditionOrder: stateElement[]) {
    this.keys = keys;
    this.actions = actions;
    this.conditionOrder = conditionOrder;
  }

  selectAction(): Action | null {
    for (const key of this.conditionOrder) {
      if (this.keys.includes(key) && this.actions[key]) {
        return this.actions[key];
      }
    }
    return null;
  }

}
