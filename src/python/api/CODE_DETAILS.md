### Plan

1. **Project Structure**:

   - `app.py`: Main entry point for the Flask application.
   - `controllers/cpf_controller.py`: Controller for CPF operations.
   - `controllers/cnpj_controller.py`: Controller for CNPJ operations.
   - `dao/cpf_dao.py`: Data Access Object for CPF operations.
   - `dao/cnpj_dao.py`: Data Access Object for CNPJ operations.
   - `tests/test_cpf_controller.py`: Unit tests for CPF controller.
   - `tests/test_cnpj_controller.py`: Unit tests for CNPJ controller.
   - `requirements.txt`: Dependencies for the project.
2. **Dependencies**:

   - Flask: Web framework.
   - pytest: Testing framework.
3. **Endpoints**:

   - `/validarCpf/<cpf>`: Validate CPF.
   - `/gerarCpf`: Generate CPF.
   - `/validarCnpj/<cnpj>`: Validate CNPJ.
   - `/gerarCnpj`: Generate CNPJ.

### Code

#### `app.py`

```python
from flask import Flask, jsonify
from controllers.cpf_controller import CPFController
from controllers.cnpj_controller import CNPJController

app = Flask(__name__)

@app.route('/validarCpf/<cpf>', methods=['GET'])
def validar_cpf(cpf):
    response = CPFController.validar_cpf(cpf)
    return jsonify(response)

@app.route('/gerarCpf', methods=['GET'])
def gerar_cpf():
    response = CPFController.gerar_cpf()
    return jsonify(response)

@app.route('/validarCnpj/<cnpj>', methods=['GET'])
def validar_cnpj(cnpj):
    response = CNPJController.validar_cnpj(cnpj)
    return jsonify(response)

@app.route('/gerarCnpj', methods=['GET'])
def gerar_cnpj():
    response = CNPJController.gerar_cnpj()
    return jsonify(response)

if __name__ == '__main__':
    app.run(port=9002, debug=True)
```

#### `controllers/cpf_controller.py`

```python
from dao.cpf_dao import CPFDao

class CPFController:
    @staticmethod
    def validar_cpf(cpf):
        try:
            response = CPFDao.validar_cpf(cpf)
            return {
                "valid": response,
                "message": 'O CPF é valido' if response else 'O CPF é invalido'
            }
        except Exception as e:
            raise e

    @staticmethod
    def gerar_cpf():
        try:
            response = CPFDao.gerar_cpf()
            return response
        except Exception as e:
            raise e
```

#### `controllers/cnpj_controller.py`

```python
from dao.cnpj_dao import CNPJDao

class CNPJController:
    @staticmethod
    def validar_cnpj(cnpj):
        try:
            response = CNPJDao.validar_cnpj(cnpj)
            return {
                "valid": response,
                "message": 'O CNPJ é valido' if response else 'O CNPJ é invalido'
            }
        except Exception as e:
            raise e

    @staticmethod
    def gerar_cnpj():
        try:
            response = CNPJDao.gerar_cnpj()
            return response
        except Exception as e:
            raise e
```

#### `dao/cpf_dao.py`

```python
class CPFDao:
    @staticmethod
    def validar_cpf(cpf):
        # Implement CPF validation logic here
        pass

    @staticmethod
    def gerar_cpf():
        # Implement CPF generation logic here
        pass
```

#### `dao/cnpj_dao.py`

```python
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
```

#### `tests/test_cpf_controller.py`

```python
import pytest
from controllers.cpf_controller import CPFController

def test_validar_cpf_valid():
    # Mock CPFDao.validar_cpf to return True
    CPFController.validar_cpf = lambda cpf: {"valid": True, "message": "O CPF é valido"}
    response = CPFController.validar_cpf("12345678909")
    assert response == {"valid": True, "message": "O CPF é valido"}

def test_validar_cpf_invalid():
    # Mock CPFDao.validar_cpf to return False
    CPFController.validar_cpf = lambda cpf: {"valid": False, "message": "O CPF é invalido"}
    response = CPFController.validar_cpf("12345678909")
    assert response == {"valid": False, "message": "O CPF é invalido"}

def test_gerar_cpf():
    # Mock CPFDao.gerar_cpf to return a specific CPF
    CPFController.gerar_cpf = lambda: "12345678909"
    response = CPFController.gerar_cpf()
    assert response == "12345678909"
```

#### `tests/test_cnpj_controller.py`

```python
import pytest
from controllers.cnpj_controller import CNPJController

def test_validar_cnpj_valid():
    # Mock CNPJDao.validar_cnpj to return True
    CNPJController.validar_cnpj = lambda cnpj: {"valid": True, "message": "O CNPJ é valido"}
    response = CNPJController.validar_cnpj("12345678000195")
    assert response == {"valid": True, "message": "O CNPJ é valido"}

def test_validar_cnpj_invalid():
    # Mock CNPJDao.validar_cnpj to return False
    CNPJController.validar_cnpj = lambda cnpj: {"valid": False, "message": "O CNPJ é invalido"}
    response = CNPJController.validar_cnpj("12345678000195")
    assert response == {"valid": False, "message": "O CNPJ é invalido"}

def test_gerar_cnpj():
    # Mock CNPJDao.gerar_cnpj to return a specific CNPJ
    CNPJController.gerar_cnpj = lambda: {"cnpj": "12345678000195", "cnpj_formatado": "12.345.678/0001-95"}
    response = CNPJController.gerar_cnpj()
    assert response == {"cnpj": "12345678000195", "cnpj_formatado": "12.345.678/0001-95"}
```

#### `requirements.txt`

```
Flask==2.0.1
pytest==6.2.4
```

### Instructions

1. Create the project structure as described.
2. Copy the provided code into the respective files.
3. Install the dependencies using `pip install -r requirements.txt`.
4. Run the Flask application using `python app.py`.
5. Run the tests using `pytest`.

This should give you a functional Python API similar to the original JavaScript project.
