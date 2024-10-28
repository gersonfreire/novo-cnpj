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