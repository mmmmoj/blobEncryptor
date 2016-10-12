var blobEncryptor = (function () {
    try {
        
        /* Encrypt the blob using key
         input :file: blob file, str: passphrase used to encrypt the file
         callback: will return encrypted blob
         */
        function encryptFile(blob,str,cb) {
            // body...
            var type = blob.type
            key = hexToInt(str.hexEncode()) % blob.size;
            console.log(key)
            if(key >= blob.size) return;
            var end = blob.slice(0,key);
            var start = blob.slice(key,blob.size);
            var all = [];
            all.push(start),all.push(end);
            var b = new Blob(all,{type : type})
            if(cb)
                cb(b);
        }

        /* Decrypt the blob using key
         input :file: blob file, str: passphrase used to decrypt the file
         onProgress: callback will return the progree
         callback: will return encrypted blob
         */
        function decryptFile(blob,str,cb) {
            // body...
            key = hexToInt(str.hexEncode()) % blob.size;
            console.log(key)
            if(key >= blob.size) return;
            var end = blob.slice(0,blob.size-key);
            var start = blob.slice(blob.size-key,blob.size);
            var all = [];
            all.push(start),all.push(end);
            var b = new Blob(all,{type : 'video/mp4'})
            if(cb)
                cb(b);
        }

        /* get blob from specific url */
        var getBlob = function (url, callback) {
            var xhr = new XMLHttpRequest();
            xhr.open("GET", url);
            xhr.responseType = "blob";
            xhr.onload = function () {
                var file = xhr.response;
                if (callback)
                    callback(file);
            }
            xhr.send();
        };

        /* convert string to hex */
        String.prototype.hexEncode = function(){
            var hex, i;

            var result = "";
            for (i=0; i<this.length; i++) {
                hex = this.charCodeAt(i).toString(16);
                result += ("000"+hex).slice(-4);
            }

            return result
        }

        /* convert hex to string */
        String.prototype.hexDecode = function(){
            var j;
            var hexes = this.match(/.{1,4}/g) || [];
            var back = "";
            for(j = 0; j<hexes.length; j++) {
                back += String.fromCharCode(parseInt(hexes[j], 16));
            }

            return back;
        }

        /* convert integer to hex */
        function intToHex(num){
            return num.toString(16);
        }

        /* convert hex to integer */
        function hexToInt(hexString){
            return parseInt(hexString, 16);
        }

        return {
            encryptFile: encryptFile,
            decryptFile: decryptFile,
            getBlob: getBlob
        }
    }
    catch (err) {
        console.log(err);
    }
})();