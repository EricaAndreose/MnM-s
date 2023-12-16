from bs4 import BeautifulSoup
import json

def estrai_contenuto_da_html_file(percorso_file):
    # Apri il file HTML e leggi il suo contenuto
    with open(percorso_file, 'r', encoding='utf-8') as file:
        html = file.read()

    # Parsing dell'HTML con BeautifulSoup
    soup = BeautifulSoup(html, 'html.parser')

    # Trova tutti gli elementi con la classe "person"
    elementi_person = soup.find_all('span', class_='person')

    # Estrai il contenuto di ciascun elemento e salvalo in una lista
    contenuti = [elemento.get_text() for elemento in elementi_person]

    return contenuti

def salva_su_json(contenuti, percorso_json):
    # Creazione di un dizionario con i contenuti
    dati_json = {'nomi_propri': contenuti}

    # Salvataggio in un file JSON locale
    with open(percorso_json, 'w', encoding='utf-8') as file_json:
        json.dump(dati_json, file_json, ensure_ascii=False, indent=2)

if __name__ == "__main__":
    # Sostituisci questo con il percorso del tuo file HTML
    percorso_file_html = 'gaiaarticolo1.html'

    # Sostituisci questo con il percorso desiderato per il file JSON
    percorso_json = 'nomi_propri1.json'

    # Estrai il contenuto e salvalo in un file JSON
    contenuti = estrai_contenuto_da_html_file(percorso_file_html)
    salva_su_json(contenuti, percorso_json)
