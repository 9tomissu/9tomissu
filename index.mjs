import jsonfile from 'jsonfile';
import moment from 'moment';
import simpleGit from 'simple-git';

const path = "./test4.txt";

const markCommit = async (date, message) => {
    const data = { date: date.toISOString() };
    await jsonfile.writeFile(path, data);

    const git = simpleGit();
    await git.add([path]);
    await git.commit(message, { "--date": date.toISOString() }); // Thêm message vào commit
};

const markCommits = async () => {
    const git = simpleGit();
    const date = moment('2024-12-25');
    const commitMessage = 'Adding commit with specific date and message'; // Thông báo commit

    console.log(`Creating commit: ${date.toISOString()}`);
    await markCommit(date, commitMessage);

    console.log(`Pushing all commits...`);
    await git.push();
};

markCommits();
