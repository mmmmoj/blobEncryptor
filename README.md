# blobEncryptor
This is a simple library to help in enc/dec blob file. Below how to use
## How to use:

### blobEncryptor.setKeyLength(keyLength)

This function is used to set the key length for encryption. The default length is 128 bit.

Example:
```js
    // set key length to 256 bit
    blobEncryptor.setKeyLength(256);
```

### blobEncryptor.encryptFile(blob,pass,cb)

This function is used to encrypt the blob file and return an encrypted blob with same type.

Example:
```javascript
  blobEncryptor.encryptFile(blob,pass,function(b){ 
    // b is an encrypted blob 
  });
```
### blobEncryptor.decryptFile(blob,pass,cb)

This function is used to encrypt the blob file and return an encrypted blob with same type. 

Example:
```javascript
  blobEncryptor.decryptFile(blob,pass,function(b){ 
    // b is a decrypted blob 
  });
```
