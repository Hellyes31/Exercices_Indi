print("Le but de l'exercice est de deviner les 2 pions d'une couleur différentes, vous avez 12 essais pour trouver la bonne combinaison.\nVous avez le choix entre 4 couleur, red, purple, blue, green.\nBon courage")

def mastermind():
    answer = ["purple", "green"]
    color = {"red", "purple", "blue", "green"}  
    attempts = 0
    max_attempts = 12

    while attempts < max_attempts:

        guess = input("Entrez une combinaison (ex: red,purple) : ")
        guess_list = [c.strip().lower() for c in guess.split(",") if c.strip()]

        if len(guess_list) != 2 :
            print("Erreur : vous devez entrer exactement 2 couleurs.")
            continue

        if not all (c in color for c in guess_list):
            print("Erreur : vous devez entrer des couleurs valides.")
            continue

        attempts += 1

        if guess_list == answer:
            print(f"Bien joué! Vous avez trouvé la bonne conbinaison en : {max_attempts - attempts} tentative(s).")
            return
        
        

        else:
            print(f"WRONG ! Try again. Tentative(s) restante : {max_attempts - attempts}" )

    print("Vous n'avez plus de tentative disponible... game over.")

mastermind()