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