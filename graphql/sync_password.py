import requests
import csv
import io
import os

CSV_URL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vSON_6HCpkRP4LEhzaOugcW-RP41GTDGrPsfP94a-P4r7QCwCmnun5rW9gZIUgsDp_WFqP6HDIXIGpS/pub?output=csv"
FILE_PATH = "./src/types/PotentialOffers.ts"
MARKER = "export const EstimationPartnerCredentials"

def sync():
    try:
        response = requests.get(CSV_URL)
        response.raise_for_status()

        f = io.StringIO(response.text)
        reader = csv.reader(f)
        lines = list(reader)

        if len(lines) < 2:
            print("Le CSV est vide.")
            return

        # Au cas ou Edouard change Partner en partner ou PARtNeR
        header = [h.strip().lower() for h in lines[0]]
        try:
            idx_partner = header.index("partner")
            idx_user = header.index("username")
            idx_pass = header.index("password")
        except ValueError:
            print(f"Colonnes introuvables. Reçu : {header}")
            return

        entries = ""
        for row in lines[1:]:
            if len(row) > max(idx_partner, idx_user, idx_pass):
                partner = row[idx_partner].strip()
                user = row[idx_user].strip()
                password = row[idx_pass].strip()
                
                if partner and user and password:
                    print(f"Sync : {partner}")
                    entries += f"  [EstimationPartner.{partner}]: {{\n"
                    entries += f"    username: '{user}',\n"
                    entries += f"    password: '{password}',\n"
                    entries += f"  }},\n"

        new_content = f"{MARKER}: Partial<\n  Record<EstimationPartner, PartnerCredentials>\n> = {{\n{entries}}};"

        if not os.path.exists(FILE_PATH):
            print(f"Fichier {FILE_PATH} introuvable.")
            return

        with open(FILE_PATH, 'r', encoding='utf-8') as file:
            content = file.read()

        if MARKER not in content:
            print(f"Marqueur '{MARKER}' introuvable.")
            return

        prefix = content.split(MARKER)[0]
        
        with open(FILE_PATH, 'w', encoding='utf-8') as file:
            file.write(prefix + new_content)

    except Exception as e:
        print(f"Erreur : {e}")

if __name__ == "__main__":
    sync()