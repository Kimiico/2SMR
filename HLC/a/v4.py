"""Programa para crear archivos de un tamaño determinado

El objetivo de este programa es crear un archivo dado un tamaño y una unidad
"""

#Importar librerias
import time
t = time.process_time()
import os

#Comprobar que el archive existe y borrarlo
try:
  os.remove("archivo.txt")
except FileNotFoundError:
  pass

#El archivo con el que se va a trabajar
File = open("archivo.txt", "w")

#Se pide un tamaño numérico
while True:
  try:
    Objetivo = int(input("Elige el tamaño deseado: "))
    break
  except:
    print("Introduce un valor numérico \n")
    pass
print("\n")

#El diccionario de unidades
Diccionario = {"kib" : 1024, "kb" : 1000, "mib" : 1024**2, "mb" : 1000**2, "gib" : 1024**3, "gb" : 1000**3, "tib" : 1024**4, "tb" : 1000**4}

#Comprobar que la unidad está en el diccionario y convertirlo a bytes
while True:
  print("Elige una unidad de tamaño, las unidades válidas" +
          " son KB, KiB, MB, MiB, GB, GiB, TB y TiB")
  Unidad = input("Elige una unidad de tamaño: ")
  print("\n")
  if Unidad in Diccionario:
    Objetivo = Objetivo * Diccionario[Unidad]
    break

#Se crea el numero que se va a escribir
Num = []
while True:
  try:
    Longitud = int(input("Elige la longitud del valor a escribir, el mínimo es 8192: "))
    break
  except:
    print("Introduce un valor numérico \n")
while len(Num) < Longitud:
  Num.append(str(Objetivo))
Num = "".join(Num)

#Se escribe hasta llegar al tamaño deseado
Size = 0
while Size < Objetivo:
  File.write(Num)
  Size += len(Num)

print(time.process_time()-t)
