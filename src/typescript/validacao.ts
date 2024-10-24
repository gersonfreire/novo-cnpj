import { CNPJ } from "./cnpj";
import process from 'node:process';

if (process.argv.length > 2) {
    for (let i = 2, j = 1; i < process.argv.length; i++, j++) {
        const cnpj = process.argv[i];
        const isValid: boolean = CNPJ.isValid(cnpj);
        console.info(`[${j}] O CNPJ [${cnpj}] ${ isValid ? 'é válido' : 'não é válido' }.`);
    }
} else {
    console.error("Não foi passado nenhuma argumento.");
}