const ControllerCPF = require('../../controllers/ControllerCPF');
const DaoCPF = require('../../dao/DaoCPF');

// Mocking DaoCPF methods
jest.mock('../../dao/DaoCPF');

describe('ControllerCPF', () => {

  describe('ValidarCPF', () => {
    it('should return valid response when CPF is valid', async () => {
      DaoCPF.ValidarCPF.mockResolvedValue(true);

      const cpf = '12345678909';
      const result = await ControllerCPF.ValidarCPF(cpf);

      expect(result).toEqual({
        valid: true,
        message: 'O CPF é valido'
      });
      expect(DaoCPF.ValidarCPF).toHaveBeenCalledWith(cpf);
    });

    it('should return invalid response when CPF is invalid', async () => {
      DaoCPF.ValidarCPF.mockResolvedValue(false);

      const cpf = '12345678909';
      const result = await ControllerCPF.ValidarCPF(cpf);

      expect(result).toEqual({
        valid: false,
        message: 'O CPF é invalido'
      });
      expect(DaoCPF.ValidarCPF).toHaveBeenCalledWith(cpf);
    });

    it('should throw an error when DaoCPF throws an error', async () => {
      DaoCPF.ValidarCPF.mockRejectedValue(new Error('Database error'));

      const cpf = '12345678909';

      await expect(ControllerCPF.ValidarCPF(cpf)).rejects.toThrow('Database error');
      expect(DaoCPF.ValidarCPF).toHaveBeenCalledWith(cpf);
    });
  });

  describe('GerarCPF', () => {
    it('should return generated CPF', async () => {
      const generatedCPF = '12345678909';
      DaoCPF.GerarCPF.mockResolvedValue(generatedCPF);

      const result = await ControllerCPF.GerarCPF();

      expect(result).toBe(generatedCPF);
      expect(DaoCPF.GerarCPF).toHaveBeenCalled();
    });

    it('should throw an error when DaoCPF throws an error', async () => {
      DaoCPF.GerarCPF.mockRejectedValue(new Error('Database error'));

      await expect(ControllerCPF.GerarCPF()).rejects.toThrow('Database error');
      expect(DaoCPF.GerarCPF).toHaveBeenCalled();
    });
  });
});
