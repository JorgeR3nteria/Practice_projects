import random

def generar_numero():
    return random.randint(1, 100)

numero_aleatorio = generar_numero()
intentos = 0

print("Bienvenido al juego de adivinar el número!")
print("Estoy pensando en un número entre 1 y 100.")

while True:
    try:
        ad_num = int(input("Digita un número: "))
        intentos += 1

        if ad_num < numero_aleatorio:
            print("El número es más alto. Intenta de nuevo.")
        elif ad_num > numero_aleatorio:
            print("El número es más bajo. Intenta de nuevo.")
        else:
            print(f"¡Felicidades! Has adivinado el número {numero_aleatorio} en {intentos} intentos.")
            break

    except ValueError:
        print("Entrada inválida. Por favor, ingresa un número entero.")
