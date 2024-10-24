import { CNPJ } from "./cnpj";
import process from 'node:process';

if (process.argv.length > 2) {
    for (let i = 2, j = 1; i < process.argv.length; i++, j++) {
        const cnpj = process.argv[i];
        try {
            const dvCalculado: string = CNPJ.calculaDV(cnpj);
            console.info(`[${j}] CNPJ: [${cnpj}] DV: [${dvCalculado}]`);
        } catch (e) {
            console.error(`[${j}] Ocorreu um erro ao calcular o DV do CNPJ [${cnpj}].`);
            console.error(e);
        }
    }
} else {
    console.error("Não foi passado nenhuma argumento.");
}