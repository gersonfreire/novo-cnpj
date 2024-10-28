class CNPJDao:
    @staticmethod
    def validar_cnpj(cnpj):
        # Remove non-numeric characters
        cnpj = ''.join(filter(str.isdigit, cnpj))

        if len(cnpj) != 14:
            return False

        def calculate_digit(cnpj, weights):
            total = sum(int(digit) * weight for digit, weight in zip(cnpj, weights))
            remainder = total % 11
            return 0 if remainder < 2 else 11 - remainder

        weights1 = [5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2]
        weights2 = [6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2]

        digit1 = calculate_digit(cnpj[:12], weights1)
        digit2 = calculate_digit(cnpj[:13], weights2)

        return cnpj[-2:] == f"{digit1}{digit2}"

    @staticmethod
    def gerar_cnpj():
        import random

        def calculate_digit(cnpj, weights):
            total = sum(int(digit) * weight for digit, weight in zip(cnpj, weights))
            remainder = total % 11
            return 0 if remainder < 2 else 11 - remainder

        cnpj = [random.randint(0, 9) for _ in range(8)] + [0, 0, 0, 1]
        weights1 = [5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2]
        weights2 = [6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2]

        cnpj.append(calculate_digit(cnpj, weights1))
        cnpj.append(calculate_digit(cnpj, weights2))

        cnpj_str = ''.join(map(str, cnpj))
        formatted_cnpj = f"{cnpj_str[:2]}.{cnpj_str[2:5]}.{cnpj_str[5:8]}/{cnpj_str[8:12]}-{cnpj_str[12:]}"

        return {
            "cnpj": cnpj_str,
            "cnpj_formatado": formatted_cnpj
        }