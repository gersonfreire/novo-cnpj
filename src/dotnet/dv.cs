using System;
using System.Linq;

namespace CNPJNamespace
{
    public class DigitoVerificador
    {
        private readonly string _cnpj;
        private int[] _pesos;
        public int Digito { get; private set; }

        public DigitoVerificador(string input)
        {
            _cnpj = input.ToUpper();
            _pesos = new int[0];
            Digito = 0;
        }

        private int CalculaAscii(char caracter)
        {
            return caracter - 48;
        }

        private int CalculaSoma()
        {
            int tamanhoRange = _cnpj.Length;
            int numRange = (int)Math.Ceiling(tamanhoRange / 8.0);
            _pesos = Enumerable.Repeat(Enumerable.Range(2, 8), numRange).SelectMany(x => x).Take(tamanhoRange).ToArray();
            Array.Reverse(_pesos);
            int sumOfProducts = _cnpj.Select((t, i) => CalculaAscii(t) * _pesos[i]).Sum();
            return sumOfProducts;
        }

        public int Calcula()
        {
            int modSum = CalculaSoma() % 11;

            if (modSum < 2)
            {
                return 0;
            }
            else
            {
                return 11 - modSum;
            }
        }

        public static void Main(string[] args)
        {
            if (args.Length > 0)
            {
                string cnpj = args[0];
                DigitoVerificador dv = new DigitoVerificador(cnpj);
                Console.WriteLine(dv.Calcula());
            }
            else
            {
                Console.WriteLine("Nenhum argumento foi passado.");
            }
        }
    }
}