#BBN Technology Challenge

#Technologies
NodeJS: Download at https://nodejs.org/en/download/
AngularJS: (Already installed)
Bootstrap: (Already installed)
Jquery: (Already installed)

#Running the Server (A remove server can also be reached at https://bbn-challenge.herokuapp.com/#!/)
1. cd into the project directory
2. run the command 'npm install' (only needs to be done if you don't have a node_modules folder in the project)
3. run the command 'npm start'. Once you see ‘Server running at localhost:8080’, the server has finished setting up and is ready to start accepting requests.
4. Open a web browser and go to the address ‘localhost:8080’. (mobile works as well)

#Using the Application
This simple server/client application allows you to encrypt or decrypt messages
using a substitution or vigenere cipher. The cipher keys are stored on 
the server side. The Client will make http requests to the server's REST api when
they have a message to encrypt/decrypt. The Client will also be able to request to 
see the keys that were used as part of the encryption/decryption process. However, 
this request for the keys may take up to 30 seconds to process. (per requirements)

#Help
For additional help, the developer can be reached at: Tingel@quinnipiac.edu
