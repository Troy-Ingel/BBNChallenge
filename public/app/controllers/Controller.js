angular
.module('mainApp')
.controller('Controller', Controller);

Controller.$inject = ['$scope', '$location', 'Factory'];

function Controller($scope, $location, Factory){
	$scope.substitutionEncryption = substitutionEncryption;
	$scope.substitutionDecryption = substitutionDecryption;
	$scope.vigenereEncryption = vigenereEncryption;
	$scope.vigenereDecryption = vigenereDecryption;
	$scope.getSubstitutionKey = getSubstitutionKey;
	$scope.getVigenereKey = getVigenereKey;
	$scope.loadingSubKey = false;
	$scope.loadingVigKey = false;

	///////////

	function substitutionEncryption(){
		Factory.substitutionEncryption($scope.subPlaintext).then(function(res){
			$scope.subPlaintext = res.plaintext.toLowerCase();
			$scope.subCiphertext = res.ciphertext.toUpperCase();
		}).catch(function(err){
			console.log(err);
		});
	}
	
	function substitutionDecryption(){
		Factory.substitutionDecryption($scope.subCiphertext).then(function(res){
			$scope.subPlaintext = res.plaintext.toLowerCase();
			$scope.subCiphertext = res.ciphertext.toUpperCase();
		}).catch(function(err){
			console.log(err);
		});
	}

	function getSubstitutionKey(){
		$scope.loadingSubKey = true;
		Factory.getSubstitutionKey().then(function(res){
			$scope.substitutionKey = JSON.stringify(res.key).replace(/\"/g, "");
			console.log('here')
			$scope.loadingSubKey = false;
		}).catch(function(err){
			$scope.loadingSubKey = false;
		});
	}

	function vigenereEncryption(){
		Factory.vigenereEncryption($scope.vigPlaintext).then(function(res){
			$scope.vigPlaintext = res.plaintext.toLowerCase();
			$scope.vigCiphertext = res.ciphertext.toUpperCase();
		}).catch(function(err){
			console.log(err);
		});
	}
	
	function vigenereDecryption(){
		Factory.vigenereDecryption($scope.vigCiphertext).then(function(res){
			$scope.vigPlaintext = res.plaintext.toLowerCase();
			$scope.vigCiphertext = res.ciphertext.toUpperCase();
		}).catch(function(err){
			console.log(err);
		});
	}

	function getVigenereKey(){
		$scope.loadingVigKey = true;
		Factory.getVigenereKey().then(function(res){
			$scope.vigenereKey = JSON.stringify(res.key).replace(/\"/g, "");
			$scope.loadingVigKey = false;
		}).catch(function(err){
			console.log(err);
			$scope.loadingVigKey = false;
		});
	}

}
