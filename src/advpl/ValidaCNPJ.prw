/* 
 * Programa ADVPL para validar CNPJ
 * Solicita ao usuário que insira um CNPJ e valida se é válido ou não.
 */

#Include "Protheus.ch"

// Função principal
User Function ValidaCNPJ()
    Local cCNPJ := ""
    Local lValido := .F.

    // Solicita o CNPJ ao usuário
    cCNPJ := AllTrim(Upper(InputBox("Digite o CNPJ para validação:", "Validação de CNPJ")))

    // Valida o CNPJ
    lValido := IsValidCNPJ(cCNPJ)

    // Exibe o resultado
    If lValido
        MsgInfo("CNPJ válido.", "Resultado")
    Else
        MsgStop("CNPJ inválido.", "Resultado")
    EndIf

Return

// Função para remover caracteres não numéricos
Static Function RemoveNonNumeric(cText)
    Local cResult := ""
    Local nIndex := 0

    For nIndex := 1 To Len(cText)
        If IsDigit(SubStr(cText, nIndex, 1))
            cResult += SubStr(cText, nIndex, 1)
        EndIf  
    Next

Return cResult

// Função para calcular o dígito verificador
Static Function CalculateDigit(aNumbers, aWeights)
    Local nSum := 0
    Local nIndex := 0
    Local nRemainder := 0

    For nIndex := 1 To Len(aNumbers)
        nSum += Val(SubStr(aNumbers, nIndex, 1)) * aWeights[nIndex]
    Next

    nRemainder := Mod(nSum, 11)
    If nRemainder < 2
        Return 0
    Else
        Return 11 - nRemainder
    EndIf
EndFunction

// Função para validar o CNPJ
Static Function IsValidCNPJ(cCNPJ)
    Local cCNPJNum := RemoveNonNumeric(cCNPJ)
    Local aWeights1 := {5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2}
    Local aWeights2 := {6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2}
    Local nDigit1 := 0
    Local nDigit2 := 0

    If Len(cCNPJNum) != 14
        Return .F.
    EndIf

    nDigit1 := CalculateDigit(SubStr(cCNPJNum, 1, 12), aWeights1)
    nDigit2 := CalculateDigit(SubStr(cCNPJNum, 1, 12) + Str(nDigit1), aWeights2)

    Return (SubStr(cCNPJNum, 13, 2) == Str(nDigit1) + Str(nDigit2))
EndFunction