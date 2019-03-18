# Node.js-Multiprocessor-Demo  
Require <strong>child_process</strong> module to take advantage of multi-processing.  
## exec:  
Spawns a shell then executes the command within that shell, <strong>buffering</strong> any generated output.  
Call the <strong>callback function</strong> with output when the process is terminated.  
  
exec output:  
```
Child process exited, code: 0  
stdout: Process 0 executed.  

stderr:  
Child process exited, code: 0  
Child process exited, code: 0  
stdout: Process 2 executed.  

stderr: 
stdout: Process 1 executed.  

stderr:  
```  
  
## spawn:  
Spawns a new process using the given command, with command line arguments in args (args is an array of strings).  
  
spawn output:  
```
stdout: Process 0 executed.  

stdout: Process 1 executed.  

stdout: Process 2 executed.  

Child process closed, code: 0  
Child process closed, code: 0  
Child process closed, code: 0  
```
