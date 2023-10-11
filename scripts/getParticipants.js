import { getBadges } from './scrape.js';
import { read, write } from './utils.js';
import { trackData } from './trackData.js';

const dbFileLoc = 'db.json';
export async function wait(ms) {
	return (await import('node:util')).promisify(setTimeout)(ms);
}

const getCurrentTime = () => {
	return new Date().toLocaleString('en-US', { timeZone: 'Asia/Kolkata', dateStyle: 'full', timeStyle: 'short' });
};

const joinStr = (inp) => {
	try {
		inp = inp.replace('amp;', '');
		inp = inp.toLowerCase().split(' ').join('').trim();
	} catch {
		console.log(inp);
	}
	return inp;
};

export const init = async () => {
	/**
	 * 1. get profile links
	 * 2. scrape their data
	 * 3. match badges
	 * 4. send mails
	 */
	console.log('\n=========================');
	console.log('---Fetching Badge Data---');
	console.log('=========================\n');

	let profile = read('participants.json');

	for (let i = 0; i < profile.length; i++) {
		if (!profile[i]['isEnrollStatusGood']) continue;
		console.log(`Fetching Person ${i + 1}`);
		profile[i]['badges'] = await getBadges(profile[i]['profileLink'], profile[i]['enrollDate']);
	}
	// count skills and quests
	let track1 = trackData[0];
	track1.skills = track1.skills.map((elem) => joinStr(elem));
	let track2 = trackData[1];
	track2.skills = track2.skills.map((elem) => joinStr(elem));

	for (let i = 0; i < profile.length; i++) {
		if (profile[i]['isEnrollStatusGood'] == false) {
			continue;
		}
		let badges = profile[i]['badges']?.map((elem) => elem.badgeName);
		if (!badges) {
			console.log(profile[i]['name']);
			break;
		}
		let skills = 0,
			trackOne = 0,
			trackTwo = 0;
		badges.forEach((elem) => {
			elem = joinStr(elem);
			if (track1.skills.indexOf(elem) != -1) {
				trackOne++;
				skills++;
			}
			if (track2.skills.indexOf(elem) != -1) {
				trackTwo++;
				skills++;
			}
		});
		profile[i]['skills'] = skills;
		profile[i]['trackOne'] = trackOne;
		profile[i]['trackTwo'] = trackTwo;
	}

	console.log('\nUpdating db.json\n');
	const db = {
		participants: profile,
		time: getCurrentTime(),
	};
	write(dbFileLoc, db);
	console.log('\n---Data collection done---\n');
};
