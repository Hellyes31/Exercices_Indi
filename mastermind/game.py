import random
# Enoncé du jeu
print(f"Le but de l'exercice est de deviner les 4 pions d'une couleur différentes, vous avez 12 essais pour trouver la bonne combinaison.\nVous avez le choix entre 8 couleurs: red, purple, blue, black, yellow, brown, pink, white. Attention la couleur pourrait être la même.\nBon courage")
answer = []
color = ["red","purple","blue","black","yellow","brown","pink","white"]

def random_combinaison():
    global answer
    answer = []  # vide la liste avant de remplir
    for i in range(4):
        number_random = random.randint(0, len(color)-1)
        answer.append(color[number_random])
    return answer


# print(f"La combinaison aléatoire est : {answer}")
#Fonction du jeu
def mastermind():
    random_combinaison()
    # answer = ["yellow","black","yellow","brown"] 
    attempts = 0
    max_attempts = 12
#Gestion du jeu, si c'est la mauvaise synthaxe ou gagné 
    while attempts < max_attempts:
        guess = input("Entrez une combinaison (ex: red,purple,pink,white) : ")
        guess_list = [c.strip().lower() for c in guess.split(",") if c.strip()]
        invalid_colors = [c for c in guess_list if c not in color]
        if invalid_colors:
            print(f"Erreur : couleur(s) invalide(s) détectée(s) : {invalid_colors} Couleurs autorisées : {sorted(color)}")
            continue

        if len(guess_list) != 4:
            print("Erreur : vous devez entrer exactement 4 couleurs.")
            continue

        attempts += 1

        if guess_list == answer:
            print(f"Bien joué! Vous avez trouvé la bonne combinaison en : {attempts} tentative(s).")
            return
#Gestion de si les pions sont bien placés ou non ou alors plus de tentatives et alors perdu
        else:
            good_place = 0
            wrong_place = 0
            answer_left = []
            guess_left = []

            for i in range(len(answer)):
                if guess_list[i] == answer[i]:
                    good_place +=1
                else:
                    answer_left.append(answer[i])
                    guess_left.append(guess_list[i])  

            for c in guess_left:
                if c in answer_left:
                    wrong_place += 1
                    answer_left.remove(c)

            print(f"Bien placé(s) : {good_place}")
            print(f"Mal placé(s) : {wrong_place}")
            print(f"Tentative(s) restante(s) : {max_attempts - attempts}")

    print("Vous n'avez plus de tentative disponible... game over.")

mastermind()
