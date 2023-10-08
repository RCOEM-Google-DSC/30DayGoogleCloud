import { init as participantsInit } from "./getParticipants.js";
import { init as initLB } from "./makeLB.js";
import { read, write } from "./utils.js";

const data = read("participants.json");
data.profiles = data.profiles.slice(0, 50);
write("participants.json", data);
await participantsInit();
initLB();
