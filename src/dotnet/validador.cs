using System;
using System.Text.RegularExpressions;

namespace CNPJNamespace
{
    public class CNPJ
    {
        public string Value { get; private set; }
        private string cnpjSemDV;

        public CNPJ(string value)
        {
            if (IsValidFormat(value))
            {
                Value = RemovePunctuation(value);
                cnpjSemDV = Value.Length == 14 ? Value.Substring(0, 12) : Value;
            }
            else
            {
                throw new ArgumentException("Invalid CNPJ format.");
            }
        }

        public static bool IsValidFormat(string cnpj)
        {
            return Regex.IsMatch(cnpj, @"(^([A-Z]|\d){2}\.([A-Z]|\d){3}\.([A-Z]|\d){3}\/([A-Z]|\d){4}(\-\d{2})?$)");
        }

        public static string RemovePunctuation(string input)
        {
            return Regex.Replace(input, @"[./-]", "");
        }

        public bool Validate()
        {
            string dv = GenerateDV();
            return $"{cnpjSemDV}{dv}" == Value;
        }

        public string GenerateDV()
        {
            DigitoVerificador dv1 = new DigitoVerificador(cnpjSemDV);
            string dv1Char = dv1.Calcula().ToString();

            DigitoVerificador dv2 = new DigitoVerificador(cnpjSemDV + dv1Char);
            string dv2Char = dv2.Calcula().ToString();

            return $"{dv1Char}{dv2Char}";
        }

        public override string ToString()
        {
            return Value;
        }

        public static void Main(string[] args)
        {
            try
            {
                if (args.Length < 2)
                {
                    throw new Exception("Formato inválido do CNPJ.");
                }

                string exec = args[0].ToUpper();
                string input = args[1];

                CNPJ cnpj = new CNPJ(input);
                if (exec == "-V")
                {
                    Console.WriteLine(cnpj.Validate());
                }
                else if (exec == "-DV")
                {
                    Console.WriteLine(cnpj.GenerateDV());
                }
                else
                {
                    throw new Exception("Opção inválida passada, as válidas são: -v para validar, -dv para gerar digito validador.");
                }
            }
            catch (Exception e)
            {
                Console.WriteLine(e.Message);
            }
        }
    }
}