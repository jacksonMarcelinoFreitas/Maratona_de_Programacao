export class Matrix{
    constructor(alpha){
        this.headers = Array.from(alpha);
        this.matrix = [...this.fillMatrix()];
    }

    fillMatrix(){
        let matrix = [];
        for (let i = 0; i < this.headers.length; i++) {
            matrix.push(this.shiftAlphabet(i));
        }
        return matrix;
    }

    shiftAlphabet(shift){
        const start = this.headers.slice(shift);
        const end = this.headers.slice(0, shift);
        return [...start, ...end];
    }

    getMatch(key, character){
        const indexKey = this.headers.indexOf(key);
        const indexPlain = this.headers.indexOf(character);
        return this.matrix[indexKey][indexPlain];
    }
    
    getHeader(key, character){
        const indexKey = this.headers.indexOf(key);
        const row = this.matrix[indexKey];
        const indexPlain = row.indexOf(character);
        return this.matrix[0][indexPlain];
    }
}
