"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DecisionAction = void 0;
class DecisionAction {
    constructor(keys, actions, conditionOrder) {
        this.keys = keys;
        this.actions = actions;
        this.conditionOrder = conditionOrder;
    }
    selectAction() {
        for (const key of this.conditionOrder) {
            if (this.keys.includes(key) && this.actions[key]) {
                return this.actions[key];
            }
        }
        return null;
    }
}
exports.DecisionAction = DecisionAction;
//# sourceMappingURL=DecisionAction.js.map