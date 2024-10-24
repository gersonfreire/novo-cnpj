
public class TesterValidacao{

   public static void main(String[] args) {
        
        System.out.println(" ** Validando CNPJ Alfanumerico **\n ");

        if(args == null || args.length == 0) {
            System.out.println("Nenhum CNPJ informado\n");

            System.out.println("Executando testes predefinidos:");

            String [] testes = {"12ABC34501DE35",  
                                "1345C3A5000106",
                                "R55231B3000700", // dv errado
                                "1345c3A5000106", // minuscula
                                "90.021.382/0001-22", 
                                "90.024.778/000123", 
                                "90.025.108/000101", // dv errado
                                "90.025.255/0001",  // tamanho invalido
                                "90.024.420/0001A2"}; // letra no dv

            boolean [] resultadosEsperados = {true, true, false, false, true, true, false, false,false};

            for(int i=0; i<testes.length; i++) {
                System.out.println( (i+1) + "   CNPJ:" + testes[i] + "    valido? " + CNPJValidator.isValid(testes[i]) 
                    + "  resultado esperado: " + resultadosEsperados[i]);

            }

        }else {
            System.out.println("Validando  "+args.length+" CNPJ(s).");
            for(int i=0; i<args.length; i++) {
                System.out.println( (i+1) + "   CNPJ:" + args[i] + "    valido? " + CNPJValidator.isValid(args[i]));

            }
        }
    }
}