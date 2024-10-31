#include <iostream>
#include <string>
#include <regex>
#include <vector>
#include <algorithm>

class CNPJ {
public:
    static const int tamanhoCNPJSemDV = 12;
    static const std::regex regexCNPJSemDV;
    static const std::regex regexCNPJ;
    static const std::regex regexCaracteresMascara;
    static const std::regex regexCaracteresNaoPermitidos;
    static const int valorBase = '0';
    static const std::vector<int> pesosDV;
    static const std::string cnpjZerado;

    static bool isValid(const std::string& cnpj) {
        if (!std::regex_search(cnpj, regexCaracteresNaoPermitidos)) {
            std::string cnpjSemMascara = removeMascaraCNPJ(cnpj);
            if (std::regex_match(cnpjSemMascara, regexCNPJ) && cnpjSemMascara != cnpjZerado) {
                std::string dvInformado = cnpjSemMascara.substr(tamanhoCNPJSemDV);
                std::string dvCalculado = calculaDV(cnpjSemMascara.substr(0, tamanhoCNPJSemDV));
                return dvInformado == dvCalculado;
            }
        }
        return false;
    }

    static std::string calculaDV(const std::string& cnpj) {
        if (!std::regex_search(cnpj, regexCaracteresNaoPermitidos)) {
            std::string cnpjSemMascara = removeMascaraCNPJ(cnpj);
            if (std::regex_match(cnpjSemMascara, regexCNPJSemDV) && cnpjSemMascara != cnpjZerado.substr(0, tamanhoCNPJSemDV)) {
                int somatorioDV1 = 0;
                int somatorioDV2 = 0;
                for (int i = 0; i < tamanhoCNPJSemDV; ++i) {
                    int asciiDigito = cnpjSemMascara[i] - valorBase;
                    somatorioDV1 += asciiDigito * pesosDV[i + 1];
                    somatorioDV2 += asciiDigito * pesosDV[i];
                }
                int dv1 = somatorioDV1 % 11 < 2 ? 0 : 11 - (somatorioDV1 % 11);
                somatorioDV2 += dv1 * pesosDV[tamanhoCNPJSemDV];
                int dv2 = somatorioDV2 % 11 < 2 ? 0 : 11 - (somatorioDV2 % 11);
                return std::to_string(dv1) + std::to_string(dv2);
            }
        }
        throw std::invalid_argument("Não é possível calcular o DV pois o CNPJ fornecido é inválido");
    }

private:
    static std::string removeMascaraCNPJ(const std::string& cnpj) {
        return std::regex_replace(cnpj, regexCaracteresMascara, "");
    }
};

const std::regex CNPJ::regexCNPJSemDV("^([A-Z\\d]){12}$");
const std::regex CNPJ::regexCNPJ("^([A-Z\\d]){12}(\\d){2}$");
const std::regex CNPJ::regexCaracteresMascara("[./-]");
const std::regex CNPJ::regexCaracteresNaoPermitidos("[^A-Z\\d./-]");
const std::vector<int> CNPJ::pesosDV = {6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2};
const std::string CNPJ::cnpjZerado = "00000000000000";

int main() {
    std::vector<std::string> testes = {
        "12ABC34501DE35",
        "1345C3A5000106",
        "R55231B3000700",
        "1345c3A5000106",
        "90.021.382/0001-22",
        "90.024.778/000123",
        "90.025.108/000101",
        "90.025.255/0001",
        "90.024.420/0001A2"
    };

    for (const auto& cnpj : testes) {
        std::cout << "CNPJ: " << cnpj << " é válido? " << (CNPJ::isValid(cnpj) ? "Sim" : "Não") << std::endl;
    }

    return 0;
}