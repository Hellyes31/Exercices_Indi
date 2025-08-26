print("Le but de l'exercice est de deviner les 2 pions d'une couleur différentes, vous avez 12 essais pour trouver la bonne combinaison.\nVous avez le choix entre 8 couleurs: red, purple, blue, green, yellow, brown, pink, white. Attention la couleur pourrait être la même.\nBon courage")

def mastermind():
    answer = ["yellow", "green","yellow","brown"]
    color = {"red", "purple", "blue", "green","yellow","brown","pink","white"}  
    attempts = 0
    max_attempts = 12

    while attempts < max_attempts:

        guess = input("Entrez une combinaison (ex: red,purple,pink,white) : ")
        guess_list = [c.strip().lower() for c in guess.split(",") if c.strip()]

        if len(guess_list) != 4 :
            print("Erreur : vous devez entrer exactement 4 couleurs.")
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