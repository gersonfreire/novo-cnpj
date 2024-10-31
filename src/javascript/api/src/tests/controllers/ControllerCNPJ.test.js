const ControllerCNPJ = require('../../controllers/ControllerCNPJ');
const DaoCNPJ = require('../../dao/DaoCNPJ');

// Mocking DaoCNPJ methods
jest.mock('../../dao/DaoCNPJ');

describe('ControllerCNPJ', () => {

  describe('ValidarCNPJ', () => {
    it('should return valid response when CNPJ is valid', async () => {
      DaoCNPJ.ValidarCNPJ.mockResolvedValue(true);

      const cnpj = '12345678000195';
      const result = await ControllerCNPJ.ValidarCNPJ(cnpj);

      expect(result).toEqual({
        valid: true,
        message: 'O CNPJ é valido.'
      });
      expect(DaoCNPJ.ValidarCNPJ).toHaveBeenCalledWith(cnpj);
    });

    it('should return invalid response when CNPJ is invalid', async () => {
      DaoCNPJ.ValidarCNPJ.mockResolvedValue(false);

      const cnpj = '12345678000195';
      const result = await ControllerCNPJ.ValidarCNPJ(cnpj);

      expect(result).toEqual({
        valid: false,
        message: 'O CNPJ é invalido.'
      });
      expect(DaoCNPJ.ValidarCNPJ).toHaveBeenCalledWith(cnpj);
    });

    it('should throw an error when DaoCNPJ throws an error', async () => {
      DaoCNPJ.ValidarCNPJ.mockRejectedValue(new Error('Database error'));

      const cnpj = '12345678000195';

      await expect(ControllerCNPJ.ValidarCNPJ(cnpj)).rejects.toThrow('Database error');
      expect(DaoCNPJ.ValidarCNPJ).toHaveBeenCalledWith(cnpj);
    });
  });

  describe('GerarCNPJ', () => {
    it('should return generated CNPJ', async () => {
      const generatedCNPJ = '12345678000195';
      DaoCNPJ.GerarCNPJ.mockResolvedValue(generatedCNPJ);

      const result = await ControllerCNPJ.GerarCNPJ();

      expect(result).toBe(generatedCNPJ);
      expect(DaoCNPJ.GerarCNPJ).toHaveBeenCalled();
    });

    it('should throw an error when DaoCNPJ throws an error', async () => {
      DaoCNPJ.GerarCNPJ.mockRejectedValue(new Error('Database error'));

      await expect(ControllerCNPJ.GerarCNPJ()).rejects.toThrow('Database error');
      expect(DaoCNPJ.GerarCNPJ).toHaveBeenCalled();
    });
  });
});
