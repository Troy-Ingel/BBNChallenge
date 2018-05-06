let subAlphabet = ['M','K','Y','O','C','P','S','H','U','V','I','J','W','D','X','A','F','G','L','Z','T','Q','R','N','B','E'];
let vigenereKey = 'CELTICS';
let A = getAscii('A');

module.exports = function(app){
    app.post('/substitution/encryption', function(req, res){
        let plaintext = removeNonLetters(req.body.plaintext).toUpperCase();
        let ciphertext = '';
        for(let i = 0; i < plaintext.length; i++){
            let c = subAlphabet[getAscii(plaintext.charAt(i)) - A];
            ciphertext += c;
        }
        res.json({plaintext, ciphertext})
    });

    app.post('/substitution/decryption', function(req, res){
        let ciphertext = removeNonLetters(req.body.ciphertext).toUpperCase();
        let plaintext = '';
        for(let i = 0; i < ciphertext.length; i++){
            let c = String.fromCharCode(subAlphabet.indexOf(ciphertext.charAt(i)) + A);
            plaintext += c;
        }
        res.json({plaintext, ciphertext})
    });

    app.get('/substitution/key', function(req, res){
        setTimeout(function(){
            res.json({key: subAlphabet});
        }, 25 * 1000)
    });
    
    app.post('/vigenere/encryption', function(req, res){
        let plaintext = removeNonLetters(req.body.plaintext).toUpperCase();
        let ciphertext = '';
        for(let i = 0; i < plaintext.length; i++){
            let c = getAscii(plaintext.charAt(i))
            ciphertext += String.fromCharCode(((c + getAscii(vigenereKey.charAt(i % vigenereKey.length)) - 2 * A) % 26 + A))
        }
        res.json({plaintext, ciphertext})
    });

    app.post('/vigenere/decryption', function(req, res){
        let ciphertext = removeNonLetters(req.body.ciphertext).toUpperCase();
        let plaintext = '';
        for(let i = 0; i < ciphertext.length; i++){
            let c = getAscii(ciphertext.charAt(i));
            plaintext += String.fromCharCode(((c - getAscii(vigenereKey.charAt(i % vigenereKey.length)) + 26) % 26 + A));
        }
        res.json({plaintext, ciphertext})
    });

    app.get('/vigenere/key', function(req, res){
        setTimeout(function(){
            res.json({key: vigenereKey});
        }, 25 * 1000)
    });
}

function getAscii(char){
    return char.charCodeAt(0);
}

function removeNonLetters(string){
    return string.replace(/[^A-Za-z]/g, '');
}

