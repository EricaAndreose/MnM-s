# from bs4 import BeautifulSoup
# from collections import Counter
# import json

# def estrai_contenuto_da_html_file(percorso_file):
#     # Apri il file HTML e leggi il suo contenuto
#     with open(percorso_file, 'r', encoding='utf-8') as file:
#         html = file.read()

#     # Parsing dell'HTML con BeautifulSoup
#     soup = BeautifulSoup(html, 'html.parser')

#     # Estrai contenuti per le classi "person", "place" e "keyword"
#     contenuti_people = estrai_contenuto_per_classe(soup, 'span', 'person')
#     contenuti_places = estrai_contenuto_per_classe(soup, 'span', 'place')
#     contenuti_keywords = estrai_contenuto_per_classe_lower(soup, 'span', 'keyword')
#     contenuti_references = estrai_contenuto_per_classe(soup, 'p', 'biblioItem')

#     return {
#         'people': contenuti_people,
#         'places': contenuti_places,
#         'keywords': contenuti_keywords,
#         'references': contenuti_references
#     }

# def estrai_contenuto_per_classe(soup, tag, classe):
#     # Trova tutti gli elementi con la classe specificata
#     elementi = soup.find_all(tag, class_=classe)

#     # Estrai il contenuto di ciascun elemento e utilizza Counter per contarne le occorrenze
#     conteggio = Counter([elemento.get_text() for elemento in elementi])

#     # Converte il risultato in un dizionario standard Python
#     conteggio_dict = dict(conteggio)

#     return conteggio_dict

# def estrai_contenuto_per_classe_lower(soup, tag, classe):
#     # Trova tutti gli elementi con la classe specificata
#     elementi = soup.find_all(tag, class_=classe)

#     # Estrai il contenuto di ciascun elemento e utilizza Counter per contarne le occorrenze
#     conteggio = Counter([elemento.get_text().lower() for elemento in elementi])

#     # Converte il risultato in un dizionario standard Python
#     conteggio_dict = dict(conteggio)

#     return conteggio_dict


# def salva_su_json(dati, percorso_json):
#     # Salvataggio in un file JSON locale
#     with open(percorso_json, 'w', encoding='utf-8') as file_json:
#         json.dump(dati, file_json, ensure_ascii=False, indent=2)

# if __name__ == "__main__":
#     # Sostituisci questo con il percorso del tuo file HTML
#     percorso_file_html = 'chiara3.html'

#     # Sostituisci questo con il percorso desiderato per il file JSON
#     percorso_json = 'chiara3.json'

#     # Estrai i contenuti e salvali in un file JSON
#     dati = estrai_contenuto_da_html_file(percorso_file_html)
#     salva_su_json(dati, percorso_json)

from bs4 import BeautifulSoup
from collections import Counter
import json

def estrai_contenuto_da_html_file(percorso_file):
    # Apri il file HTML e leggi il suo contenuto
    with open(percorso_file, 'r', encoding='utf-8') as file:
        html = file.read()

    # Parsing dell'HTML con BeautifulSoup
    soup = BeautifulSoup(html, 'html.parser')

    # Estrai contenuti per le classi "person", "place" e "keyword"
    contenuti_people = estrai_contenuto_per_classe(soup, 'span', 'person')
    contenuti_places = estrai_contenuto_per_classe(soup, 'span', 'place')
    contenuti_keywords = estrai_contenuto_per_classe_lower(soup, 'span', 'keyword')
    contenuti_references = estrai_contenuto_per_classe(soup, 'p', 'biblioItem')

    return {
        'people': contenuti_people,
        'places': contenuti_places,
        'keywords': contenuti_keywords,
        'references': contenuti_references
    }

def estrai_contenuto_per_classe(soup, tag, classe):
    # Trova tutti gli elementi con la classe specificata
    elementi = soup.find_all(tag, class_=classe)

    # Estrai il contenuto di ciascun elemento e utilizza Counter per contarne le occorrenze
    conteggio = Counter([elemento.get_text() for elemento in elementi])

    # Converte il risultato in un dizionario standard Python
    conteggio_dict = dict(conteggio)

    # Crea un secondo dizionario che associa il contenuto all'ID, se presente
    id_dict = {elemento.get_text(): elemento.get('id', None) for elemento in elementi}

    return conteggio_dict, id_dict

def estrai_contenuto_per_classe_lower(soup, tag, classe):
    # Trova tutti gli elementi con la classe specificata
    elementi = soup.find_all(tag, class_=classe)

    # Estrai il contenuto di ciascun elemento e utilizza Counter per contarne le occorrenze
    conteggio = Counter([elemento.get_text().lower() for elemento in elementi])

    # Converte il risultato in un dizionario standard Python
    conteggio_dict = dict(conteggio)

    # Crea un secondo dizionario che associa il contenuto all'ID, se presente
    id_dict = {elemento.get_text().lower(): elemento.get('id', None) for elemento in elementi}

    return conteggio_dict, id_dict

def salva_su_json(dati, percorso_json):
    # Salvataggio in un file JSON locale
    with open(percorso_json, 'w', encoding='utf-8') as file_json:
        json.dump(dati, file_json, ensure_ascii=False, indent=2)

if __name__ == "__main__":
    # Sostituisci questo con il percorso del tuo file HTML
    percorso_file_html = 'erica1.html'

    # Sostituisci questo con il percorso desiderato per il file JSON
    percorso_json = 'erica1.json'

    # Estrai i contenuti e salvali in un file JSON
    dati = estrai_contenuto_da_html_file(percorso_file_html)
    salva_su_json(dati, percorso_json)
