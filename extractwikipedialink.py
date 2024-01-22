from bs4 import BeautifulSoup
import json

# Leggi il contenuto del file HTML
with open('erica3.html', 'r', encoding='utf-8') as file:
    html_content = file.read()

soup = BeautifulSoup(html_content, 'html.parser')

# Dizionario per gli elementi con classe "person"
person_dict = {}
persons = soup.find_all('span', class_='person')
for person in persons:
    person_id = person.get('id')
    person_link = person.find('a')
    person_link = person_link.get('href') if person_link else None

    if person_id is not None and person_link is not None:
        person_dict[person_id] = person_link

# Dizionario per gli elementi con classe "place"
place_dict = {}
places = soup.find_all('span', class_='place')
for place in places:
    place_id = place.get('id')
    place_link = place.find('a')
    place_link = place_link.get('href') if place_link else None

    if place_id is not None and place_link is not None:
        place_dict[place_id] = place_link

# Salva i dizionari in un file JSON
with open('output9.json', 'w', encoding='utf-8') as json_file:
    json.dump({
        'person_dict': person_dict,
        'place_dict': place_dict
    }, json_file, ensure_ascii=False, indent=2)

print("Dizionario per gli elementi con classe 'person':")
print(person_dict)
print("\nDizionario per gli elementi con classe 'place':")
print(place_dict)
print("\nRisultati salvati su 'output9.json'")


