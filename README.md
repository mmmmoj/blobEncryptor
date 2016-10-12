# blobEncryptor
This is a simple library to help in enc/dec blob file
## How to use:

### blobEncryptor.encryptFile(blob,pass,cb)

This function is used to encrypt the blob file and return an encrypted blob with same type.

Example:
`
  blobEncryptor.encryptFile(blob,pass,function(b){ 
    // b is an encrypted blob 
  });
`
### blobEncryptor.decryptFile(blob,pass,cb)

This function is used to encrypt the blob file and return an encrypted blob with same type. 

Example:
`
  blobEncryptor.decryptFile(blob,pass,function(b){ 
    // b is a decrypted blob 
  });
`
