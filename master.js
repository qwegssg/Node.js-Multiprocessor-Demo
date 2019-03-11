/* ES6 module */
import { exec } from "child_process";
// import child_process from "child_process";

for (let i = 0; i < 3; i++) {
    /* child_process.exec(command[, options], callback) */
    const childProcessor = exec("node child.js " + i, function(error, stdout, stderr) {
        if (error) {
            console.error(`exec error: ${error}`);
            return;
        }
        /* ES6 template literal */
        console.log(`stdout: ${stdout}`);
        console.log(`stderr: ${stderr}`);
        // console.log("stdout: " + stdout);
        // console.log("stderr: " + stderr);
    });

    childProcessor.on("exit", function(code) {
        console.log("Child process exited, code: " + code);
    });
}