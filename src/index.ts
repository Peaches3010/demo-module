import { DecisionAction } from "./DecisionAction";
import { BotContext, Gambit } from "./type";

const Actions = {
  skillA: { name: "dùng skill A", desc: "Sử dụng để hồi sinh" },
  skillB: { name: "dùng skill B", desc: "Sử dụng để tấn công gần" },
  skillC: { name: "dùng skill C", desc: "Sử dụng để hồi máu" },
  skillD: { name: "dùng skill D", desc: "Sử dụng để phòng thủ" },
  skillE: { name: "dùng skill E", desc: "Sử dụng để tấn công xa" },
  skillF: { name: "dùng skill F", desc: "Sử dụng để hồi máu đồng đội" },
};

const exampleGambits: Gambit[] = [
  {
    conditionKey: "tôi bị thương nặng",
    action: Actions["skillC"],
    targetType: "self",
  },
  {
    conditionKey: "tôi bị tấn công",
    action: Actions["skillD"],
    targetType: "self",
  },
  {
    conditionKey: "đồng đội tử trận",
    action: Actions["skillC"],
    targetType: "ally",
  },
  {
    conditionKey: "đồng đội bị thương",
    action: Actions["skillF"],
    targetType: "ally",
  },
  {
    conditionKey: "đối phương bị suy yếu",
    action: Actions["skillB"],
    targetType: "enemy",
  },
  {
    conditionKey: "đối phương đánh",
    action: Actions["skillD"],
    targetType: "enemy",
  },
  {
    conditionKey: "đối phương đứng xa",
    action: Actions["skillE"],
    targetType: "environment",
  },
];


const context: BotContext = {
  selfKeys: ["tôi bị tấn công"],
  allyKeys: ['đồng đội bị thương'],
  enemyKeys: ['đối phương đánh'],
  environmentKeys: ["đứng xa"]
};

// Code sẽ chạy dựa theo thứ tự trên xuống dưới trong context
// Thứ tự ưu tiên sẽ là: self > ally > enemy > environment

const decision = new DecisionAction(exampleGambits, context);


console.log(decision.selectAction());