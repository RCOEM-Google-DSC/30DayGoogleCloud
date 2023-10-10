import { read, write } from "./utils.js";
const dbFileLoc = "./src/components/leaderBoard.ts";

const max = (a, b) => {
	return a >= b ? a : b;
};
const min = (a, b) => {
	return a <= b ? a : b;
};

export const init = () => {
	let participants = read("db.json");
	let profile = participants["participants"];

	let leaderBoard = [];
	for (let i = 0; i < profile.length; i++) {
		if (profile[i]["isEnrollStatusGood"] == false) {
			continue;
		}

		let color = "black";
		if (profile[i]["trackOne"] == 8 || profile[i]["trackTwo"] == 1) {
			color = "green";
		}
		if (profile[i]["trackOne"] == 8 && profile[i]["trackTwo"] == 1) {
			color = "blue";
		}
		let data = {
			name: profile[i]["name"],
			nickname: profile[i]["nickname"],
			skills: profile[i]["skills"],
			trackOne: profile[i]["trackOne"],
			trackTwo: profile[i]["trackTwo"],
			color,
			latestSkill: profile[i]["badges"]?.[0] ? profile[i]["badges"][0]["badgeDate"] : null,
		};
		leaderBoard.push(data);
	}

	leaderBoard.sort((a, b) => {
		let maxA = max(a["trackOne"], a["trackTwo"]);
		let maxB = max(b["trackOne"], b["trackTwo"]);
		let minA = min(a["trackOne"], a["trackTwo"]);
		let minB = min(b["trackOne"], b["trackTwo"]);
		if (maxA == maxB) {
			if (minA == minB) {
				if (a["latestSkill"] == b["latestSkill"]) {
					return 0;
				} else if (a["latestSkill"] < b["latestSkill"]) {
					return -1;
				} else {
					return 1;
				}
			} else if (minA > minB) {
				return -1;
			} else {
				return 1;
			}
		} else if (maxA > maxB) {
			return -1;
		} else {
			return 1;
		}
	});

	write(
		dbFileLoc,
		`export const leaderBoardData = ` +
			JSON.stringify(leaderBoard, null, 4) +
			`;\n\nexport const updateTime =  "${participants["time"]}"`
	);
};
