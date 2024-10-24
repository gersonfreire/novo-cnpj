import { CNPJ } from "./cnpj";

try {

    assertEquals("91", CNPJ.calculaDV("000000000001"));
    assertEquals("35", CNPJ.calculaDV("12.ABC.345/01DE"));

    assertThrows(Error, () => CNPJ.calculaDV("")); //Vazio
    assertThrows(Error, () => CNPJ.calculaDV("'!@#$%&*-_=+^~")); //Apenas caracteres não permitido
    assertThrows(Error, () => CNPJ.calculaDV("$0123456789A")); //Caracter não permitido no início
    assertThrows(Error, () => CNPJ.calculaDV("012345?6789A")); //Caracter não permitido no meio
    assertThrows(Error, () => CNPJ.calculaDV("0123456789A#")); //Caracter não permitido no final
    assertThrows(Error, () => CNPJ.calculaDV("12ABc34501DE")); //Com letra minúscula
    assertThrows(Error, () => CNPJ.calculaDV("00000000000")); //Dígitos a menos
    assertThrows(Error, () => CNPJ.calculaDV("00000000000191")); //Dígitos a mais

    assertTrue(CNPJ.isValid("12.ABC.345/01DE-35"));
    assertTrue(CNPJ.isValid("90.021.382/0001-22"));
    assertTrue(CNPJ.isValid("90.024.778/0001-23"));
    assertTrue(CNPJ.isValid("90.025.108/0001-21"));
    assertTrue(CNPJ.isValid("90.025.255/0001-00"));
    assertTrue(CNPJ.isValid("90.024.420/0001-09"));
    assertTrue(CNPJ.isValid("90.024.781/0001-47"));
    assertTrue(CNPJ.isValid("04.740.714/0001-97"));
    assertTrue(CNPJ.isValid("44.108.058/0001-29"));
    assertTrue(CNPJ.isValid("90.024.780/0001-00"));
    assertTrue(CNPJ.isValid("90.024.779/0001-78"));
    assertTrue(CNPJ.isValid("00000000000191"));
    assertTrue(CNPJ.isValid("ABCDEFGHIJKL80"));
    
    assertFalse(CNPJ.isValid("")); //Vazio
    assertFalse(CNPJ.isValid("'!@#$%&*-_=+^~")); //Apenas caracteres não permitido
    assertFalse(CNPJ.isValid("$0123456789ABC")); //Caracter não permitido no início
    assertFalse(CNPJ.isValid("0123456?789ABC")); //Caracter não permitido no meio
    assertFalse(CNPJ.isValid("0123456789ABC#")); //Caracter não permitido no fim
    assertFalse(CNPJ.isValid("12.ABc.345/01DE-35")); //Com letra minúscula
    assertFalse(CNPJ.isValid("0000000000019")); //Dígitos a menos
    assertFalse(CNPJ.isValid("000000000001911")); //Dígitos a mais
    assertFalse(CNPJ.isValid("0000000000019L")); //Letra na posição do segundo DV
    assertFalse(CNPJ.isValid("000000000001P1")); //Letra na posição do primeiro DV
    assertFalse(CNPJ.isValid("00000000000192")); //DV inválido
    assertFalse(CNPJ.isValid("ABCDEFGHIJKL81")); //DV inválido
    assertFalse(CNPJ.isValid("00000000000000")); //CNPJ zerado
    assertFalse(CNPJ.isValid("00.000.000/0000-00")); //CNPJ zerado com máscara

    console.info("All tests passed successfully!");
    
} catch (e: unknown) {
    console.error("Some of the tests failed.");
    if (e instanceof Error) {
        console.error(e.message, e.stack);
    } else {
        console.error(e);
    }
}

function assertTrue(value: any) {
    assertEquals(true, value);
}

function assertFalse(value: any) {
    assertEquals(false, value);
}

function assertEquals(expected: any, actual: any) {
    if (expected !== actual) {
        const message = `Assertion error: expected [${expected}] but was [${actual}].`;
        throw new Error(message);
    }
}

function assertThrows(expectedType: any, executable: Function) {
    try {
        executable();
    } catch(e: unknown) {
        if (e instanceof expectedType) {
            return;
        }
        const message = `Assertion error: expected instance of [${expectedType}] to be thrown but it was [${e}].`;
        throw new Error(message);
    }
    const message = `Assertion error: expected [${expectedType}] to be thrown but nothing was thrown.`;
    throw new Error(message);
}