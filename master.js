/* 
    <import> is from ES6 module.
    <exec> is in child_process module in Node.js/lib:

    exports.exec = function exec(command, options, callback) {
    const opts = normalizeExecArgs(command, options, callback);
    return exports.execFile(opts.file,
                            opts.options,
                            opts.callback);
    };

    Attention: As of now, Node.js doesn't support ES6 imports yet. 
    However, we can use them today with the help of Babel.
*/
// import { exec } from "child_process";

/* 
    Below is CommonJS syntax (require/module.exports):
*/
const child_process = require("child_process");

/* 
    Use exec.
*/
for (let i = 0; i < 3; i++) {
    /* child_process.exec(command[, options], callback) */
    /* callback <Function> called with the output when process terminates. */
    const childProcessorExec = child_process.exec("node child.js " + i, function(error, stdout, stderr) {
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

    childProcessorExec.on("exit", function(code) {
        /* Any exit code other than 0 is considered to be an error. */
        console.log("Child process exited, code: " + code);
    });
}

/* 
    Use spawn.
*/
for (let i = 0; i < 3; i++) {
    /* child_process.spawn(command[, args][, options]) */
    /* args is an array of string */
    const childProcessorSpawn = child_process.spawn("node", ["child.js", i]);
    childProcessorSpawn.stdout.on("data", (data) => {
        console.log(`stdout: ${data}`);
    });
    childProcessorSpawn.stderr.on("data", (data) => {
        console.log(`stderr: ${data}`);
    });

    childProcessorSpawn.on("close", function(code) {
        /* Any exit code other than 0 is considered to be an error. */
        console.log("Child process closed, code: " + code);
    });
}