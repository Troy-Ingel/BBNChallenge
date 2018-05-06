angular
.module('mainApp')
.factory('Factory', Factory);

Factory.$inject = ['$http'];

function Factory($http){

	var service = {
		substitutionEncryption,
		substitutionDecryption,
		vigenereEncryption,
		vigenereDecryption,
		getSubstitutionKey,
		getVigenereKey
	};

	return service;

	////////////////////
	
	function substitutionEncryption(plaintext){
		return $http.post('/substitution/encryption', {plaintext})
		.then((res)=>res.data)
		.catch((err)=>console.error(err));
	}

	function substitutionDecryption(ciphertext){
		return $http.post('/substitution/decryption', {ciphertext})
		.then((res)=>res.data)
		.catch((err)=>console.error(err));
	}

	function getSubstitutionKey(){
		return $http.get('/substitution/key')
		.then((res)=>res.data)
		.catch((err)=>console.error(err));
	}

	function vigenereEncryption(plaintext){
		return $http.post('/vigenere/encryption', {plaintext})
		.then((res)=>res.data)
		.catch((err)=>console.error(err));
	}

	function vigenereDecryption(ciphertext){
		return $http.post('/vigenere/decryption', {ciphertext})
		.then((res)=>res.data)
		.catch((err)=>console.error(err));
	}

	function getVigenereKey(){
		return $http.get('/vigenere/key')
		.then((res)=>res.data)
		.catch((err)=>console.error(err));
	}
}