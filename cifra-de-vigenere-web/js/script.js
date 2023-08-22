
import { Vigenere } from './models/vigenere.js';

const reset = () => {
    document.getElementById("encrypt_text").value = '';
    document.getElementById('encrypt_encrypt').value = '';
    document.getElementById("decrypt_encrypt").value = '';
    document.getElementById('decrypt_text').value = '';
    document.getElementById("shift_decrypt").value = '';
    document.getElementById("shift_encrypt").value = '';
}

const encrypt = (e) =>{
    const vigenere = new Vigenere();
    const encrypt_text = document.getElementById("encrypt_text").value;
    const shift_encrypt = document.getElementById("shift_encrypt").value;
    if( encrypt_text && shift_encrypt ){
        const result = vigenere.encrypt(shift_encrypt, encrypt_text);
        document.getElementById('encrypt_encrypt').value = result;
        document.getElementById("shift_decrypt").value = shift_encrypt;
        document.getElementById("decrypt_encrypt").value = result;
    }else{
        Swal.fire({
            title: 'Atención',
            text: 'Hay campos vacíos',
            icon: 'error',
            confirmButtonText: 'Aceptar'
        })
    }
}

const decrypt = (e) =>{
    const vigenere = new Vigenere();
    const decrypt_text = document.getElementById("decrypt_encrypt").value;
    const shift_decrypt = document.getElementById("shift_decrypt").value;
    if( decrypt_text && shift_decrypt ){
        const result = vigenere.decrypt(shift_decrypt, decrypt_text);
        document.getElementById('decrypt_text').value = result;
    }else{
        Swal.fire({
            title: 'Atención',
            text: 'Hay campos vacíos',
            icon: 'error',
            confirmButtonText: 'Aceptar'
        });
    }
}

const init = () => {
    document.getElementById('encrypt').addEventListener('click', encrypt);
    document.getElementById('decrypt').addEventListener('click', decrypt);
    document.getElementById('reset').addEventListener('click', reset);
}

init();
