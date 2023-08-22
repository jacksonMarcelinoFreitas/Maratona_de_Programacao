import { alphabet } from './alphabet.js';
import { Matrix } from './matrix.js';

export class Vigenere{
    constructor(){
        this.matrix = new Matrix(alphabet());
    }

    encrypt(key, plainText){
        let result = "";
        const completeKey = this.fillKey(key, plainText);
        for (let i = 0; i<plainText.length; i++) 
            result += this.matrix.getMatch(completeKey[i], plainText[i]);
        return result;
    }

    decrypt(key, encryptText){
        let result = "";
        const completeKey = this.fillKey(key, encryptText);
        for (let i = 0; i<encryptText.length; i++) 
            result += this.matrix.getHeader(completeKey[i], encryptText[i]);
        return result;
    }

    fillKey(key, text){
        /** key and text are same length */
        if ( text.length == key.length ) {
            return key;
        /** key is more length than text */
        }else if ( text.length < key.length ){
            return key.substring(0, text.length);
        /** text is more length than key */
        }else{
            let fill = key;
            let difference = text.length - key.length;
            while(difference >= key.length){
                fill += key;
                difference -=key.length;
            }
            if(difference > 0 )
                fill += key.substring(0, difference);
            return fill;
        }
    }
}