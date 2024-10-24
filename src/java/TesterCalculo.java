
public class TesterCalculo{

   public static void main(String[] args) {
        
        System.out.println(" ** Calculando de DV de CNPJ Alfanumerico ** ");

        if(args == null || args.length == 0) {
            System.out.println("Nenhum CNPJ informado\n");

            System.out.println("Executando testes predefinidos:");

            String [] testes = {"12ABC34501DE", 
                                "1345C3A50001",
                                "R55231B30007",
                                "90.021.382/0001", 
                                "90.024.778/0001", 
                                "90.025.108/0001", 
                                "90.025.255/0001", 
                                "90.024.420/0001"};
            String [] dvsEsperados = {"35", "06", "57", "22", "23", "21", "00", "09"};

            for(int i=0; i<testes.length; i++) {
                System.out.println( (i+1) + "   CNPJ:" + testes[i] + "    DV calculado: " + CNPJValidator.calculaDV(testes[i]) 
                    + "  DV esperado: " + dvsEsperados[i]);

            }

        }else {
            System.out.println("Calculando DV de  "+args.length+" CNPJ(s).");
            for(int i=0; i<args.length; i++) {
                System.out.println( (i+1) + "   CNPJ:" + args[i] + "    DV: " + CNPJValidator.calculaDV(args[i]));

            }
        }
    }
}