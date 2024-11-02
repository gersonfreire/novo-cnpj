# Função para remover caracteres não numéricos
def remove_non_numeric(str)
  str.gsub(/\D/, '')
end

# Função para calcular o dígito verificador
def calculate_digit(numbers, weights)
  sum = numbers.zip(weights).map { |n, w| n * w }.reduce(:+)
  remainder = sum % 11
  remainder < 2 ? 0 : 11 - remainder
end

# Função para validar CNPJ
def validar_cnpj(cnpj)
  cnpj = remove_non_numeric(cnpj)
  return false unless cnpj.length == 14

  weights1 = [5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2]
  weights2 = [6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2]

  digits = cnpj.chars.map(&:to_i)
  digit1 = calculate_digit(digits[0..11], weights1)
  digit2 = calculate_digit(digits[0..12], weights2)

  digits[12] == digit1 && digits[13] == digit2
end

# Função para validar CPF
def validar_cpf(cpf)
  cpf = remove_non_numeric(cpf)
  return false unless cpf.length == 11

  weights1 = [10, 9, 8, 7, 6, 5, 4, 3, 2]
  weights2 = [11, 10, 9, 8, 7, 6, 5, 4, 3, 2]

  digits = cpf.chars.map(&:to_i)
  digit1 = calculate_digit(digits[0..8], weights1)
  digit2 = calculate_digit(digits[0..9], weights2)

  digits[9] == digit1 && digits[10] == digit2
end

# Função principal para interação com o usuário
def main
  puts "Digite o CNPJ ou CPF para validação:"
  input = gets.chomp

  if input.length > 11
    if validar_cnpj(input)
      puts "CNPJ válido."
    else
      puts "CNPJ inválido."
    end
  else
    if validar_cpf(input)
      puts "CPF válido."
    else
      puts "CPF inválido."
    end
  end
end

# Executa a função principal
main