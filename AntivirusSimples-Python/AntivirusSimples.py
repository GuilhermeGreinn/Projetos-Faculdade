import os

def buscar_arquivos(diretorio):
    arquivos_encontrados = []

    try:
        for pasta_raiz, _, arquivos in os.walk(diretorio):
            for arquivo in arquivos:
                caminho_completo = os.path.join(pasta_raiz, arquivo)
                if "aula" in arquivo.lower() and (arquivo.lower().endswith(".exe") or arquivo.lower().endswith(".bat")):
                    arquivos_encontrados.append(caminho_completo)
    except FileNotFoundError:
        print ('arquivo não encontrado')

    return arquivos_encontrados

def main():
    diretorio_alvo = "/"

    arquivos_encontrados = buscar_arquivos(diretorio_alvo)

    if not arquivos_encontrados:
        print("Nenhum arquivo encontrado.")
    else:
        print("arquivos encontrados:")
        for arquivo in arquivos_encontrados:
            print (arquivo)

if __name__ == "__main__":
    main()