### Plano em Pseudocódigo

1. **Definir a Estrutura do Programa COBOL:**

   - Criar seções para `IDENTIFICATION DIVISION`, `ENVIRONMENT DIVISION`, `DATA DIVISION`, e `PROCEDURE DIVISION`.
2. **Definir as Variáveis:**

   - Declarar variáveis para armazenar o CNPJ e CPF, pesos, e resultados intermediários.
3. **Implementar Funções de Validação:**

   - Implementar a lógica de validação para CPF e CNPJ, incluindo a remoção de caracteres não numéricos e o cálculo dos dígitos verificadores.
4. **Implementar Funções Auxiliares:**

   - Implementar funções auxiliares para manipulação de strings e cálculos.

### Código COBOL

```cobol
       IDENTIFICATION DIVISION.
       PROGRAM-ID. ValidadorCPF_CNPJ.

       ENVIRONMENT DIVISION.
       CONFIGURATION SECTION.

       DATA DIVISION.
       WORKING-STORAGE SECTION.
       01 WS-CNPJ.
           05 WS-CNPJ-NUM PIC X(14).
           05 WS-CNPJ-SEM-DV PIC X(12).
           05 WS-CNPJ-DV PIC X(2).
       01 WS-CPF.
           05 WS-CPF-NUM PIC X(11).
           05 WS-CPF-SEM-DV PIC X(9).
           05 WS-CPF-DV PIC X(2).
       01 WS-RESULT PIC X(3) VALUE SPACES.
       01 WS-INDEX PIC 9(2) VALUE 1.
       01 WS-SOMA PIC 9(5) VALUE 0.
       01 WS-RESTO PIC 9(2) VALUE 0.
       01 WS-DIGITO1 PIC 9 VALUE 0.
       01 WS-DIGITO2 PIC 9 VALUE 0.
       01 WS-PESOS-CNPJ.
           05 PIC 9 VALUE 5.
           05 PIC 9 VALUE 4.
           05 PIC 9 VALUE 3.
           05 PIC 9 VALUE 2.
           05 PIC 9 VALUE 9.
           05 PIC 9 VALUE 8.
           05 PIC 9 VALUE 7.
           05 PIC 9 VALUE 6.
           05 PIC 9 VALUE 5.
           05 PIC 9 VALUE 4.
           05 PIC 9 VALUE 3.
           05 PIC 9 VALUE 2.
       01 WS-PESOS-CPF.
           05 PIC 9 VALUE 10.
           05 PIC 9 VALUE 9.
           05 PIC 9 VALUE 8.
           05 PIC 9 VALUE 7.
           05 PIC 9 VALUE 6.
           05 PIC 9 VALUE 5.
           05 PIC 9 VALUE 4.
           05 PIC 9 VALUE 3.
           05 PIC 9 VALUE 2.

       PROCEDURE DIVISION.
       MAIN-LOGIC.
           PERFORM VALIDAR-CNPJ
           DISPLAY "CNPJ Válido: " WS-RESULT
           PERFORM VALIDAR-CPF
           DISPLAY "CPF Válido: " WS-RESULT
           STOP RUN.

       VALIDAR-CNPJ.
           MOVE "12345678000195" TO WS-CNPJ-NUM
           MOVE WS-CNPJ-NUM(1:12) TO WS-CNPJ-SEM-DV
           MOVE WS-CNPJ-NUM(13:2) TO WS-CNPJ-DV
           PERFORM CALCULAR-DIGITO-CNPJ
           IF WS-CNPJ-DV = WS-DIGITO1 & WS-DIGITO2
               MOVE "SIM" TO WS-RESULT
           ELSE
               MOVE "NÃO" TO WS-RESULT
           END-IF.

       VALIDAR-CPF.
           MOVE "12345678909" TO WS-CPF-NUM
           MOVE WS-CPF-NUM(1:9) TO WS-CPF-SEM-DV
           MOVE WS-CPF-NUM(10:2) TO WS-CPF-DV
           PERFORM CALCULAR-DIGITO-CPF
           IF WS-CPF-DV = WS-DIGITO1 & WS-DIGITO2
               MOVE "SIM" TO WS-RESULT
           ELSE
               MOVE "NÃO" TO WS-RESULT
           END-IF.

       CALCULAR-DIGITO-CNPJ.
           MOVE 0 TO WS-SOMA
           PERFORM VARYING WS-INDEX FROM 1 BY 1 UNTIL WS-INDEX > 12
               ADD FUNCTION NUMVAL(WS-CNPJ-SEM-DV(WS-INDEX:1)) * WS-PESOS-CNPJ(WS-INDEX) TO WS-SOMA
           END-PERFORM
           COMPUTE WS-RESTO = WS-SOMA MOD 11
           IF WS-RESTO < 2
               MOVE 0 TO WS-DIGITO1
           ELSE
               COMPUTE WS-DIGITO1 = 11 - WS-RESTO
           END-IF
           MOVE 0 TO WS-SOMA
           PERFORM VARYING WS-INDEX FROM 1 BY 1 UNTIL WS-INDEX > 13
               ADD FUNCTION NUMVAL(WS-CNPJ-SEM-DV(WS-INDEX:1)) * WS-PESOS-CNPJ(WS-INDEX) TO WS-SOMA
           END-PERFORM
           ADD WS-DIGITO1 * 2 TO WS-SOMA
           COMPUTE WS-RESTO = WS-SOMA MOD 11
           IF WS-RESTO < 2
               MOVE 0 TO WS-DIGITO2
           ELSE
               COMPUTE WS-DIGITO2 = 11 - WS-RESTO
           END-IF.

       CALCULAR-DIGITO-CPF.
           MOVE 0 TO WS-SOMA
           PERFORM VARYING WS-INDEX FROM 1 BY 1 UNTIL WS-INDEX > 9
               ADD FUNCTION NUMVAL(WS-CPF-SEM-DV(WS-INDEX:1)) * WS-PESOS-CPF(WS-INDEX) TO WS-SOMA
           END-PERFORM
           COMPUTE WS-RESTO = WS-SOMA MOD 11
           IF WS-RESTO < 2
               MOVE 0 TO WS-DIGITO1
           ELSE
               COMPUTE WS-DIGITO1 = 11 - WS-RESTO
           END-IF
           MOVE 0 TO WS-SOMA
           PERFORM VARYING WS-INDEX FROM 1 BY 1 UNTIL WS-INDEX > 10
               ADD FUNCTION NUMVAL(WS-CPF-SEM-DV(WS-INDEX:1)) * WS-PESOS-CPF(WS-INDEX) TO WS-SOMA
           END-PERFORM
           ADD WS-DIGITO1 * 2 TO WS-SOMA
           COMPUTE WS-RESTO = WS-SOMA MOD 11
           IF WS-RESTO < 2
               MOVE 0 TO WS-DIGITO2
           ELSE
               COMPUTE WS-DIGITO2 = 11 - WS-RESTO
           END-IF.
```

### Instruções

1. **Salvar o Código:**
   - Salve o código em um arquivo chamado

valida.cbl

.

2. **Compilar e Executar:**
   - Use um compilador COBOL para compilar e executar o programa. Por exemplo, usando o GnuCOBOL:
     ```sh
     cobc -x -o valida valida.cbl
     ./valida
     ```

Este código implementa a validação de CPF e CNPJ em COBOL de acordo com o algoritmo fornecido em

cnpj.py

.
