"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DecisionAction_1 = require("./DecisionAction");
const actions = {
    hungry: { name: "EAT", desc: "eat food" },
    tired: { name: "SLEEP", desc: "sleep" },
    cool: { name: "HEATING", desc: "heating seft" },
    thirsty: { name: "DRINK", desc: "drink water" },
};
const keys = ['hungry', 'tired'];
const conditionOrder = ['thirsty', 'hungry', 'tired', 'cool'];
const decision = new DecisionAction_1.DecisionAction(keys, actions, conditionOrder);
const action = decision.selectAction();
if (action) {
    console.log(`Action chosen: ${action.name}`);
    console.log(`Action desc: ${action.desc}`);
}
else {
    console.log("No action selected.");
}
//# sourceMappingURL=index.js.map