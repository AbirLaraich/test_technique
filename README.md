# Calculateur de Calibration

Ce projet est une application web permettant de traiter des données d'étalonnage à partir de fichiers texte ou de saisies directes. Il extrait les premières et dernières valeurs numériques de chaque ligne, les additionne, et affiche les résultats de manière conviviale.

## Fonctionnalités

- **Téléchargement de fichiers** : Chargez un fichier texte contenant les données à traiter.
- **Saisie de texte directe** : Collez ou saisissez du texte directement dans l'application.
- **Calcul automatique** : Calcule la somme des valeurs extraites et affiche les résultats dans un tableau interactif.
- **Affichage des résultats** : Affiche les valeurs individuelles et la somme totale.

## Structure du Projet

- `index.html` : Structure de base de l'application et liens vers les scripts et styles.
- `main.js` : Gère les interactions utilisateur, la lecture des fichiers, et le traitement des données.
- `calibrationCalculator.js` : Contient la classe `CalibrationCalculator` pour le traitement logique des données.
- `utils.js` : Fournit des fonctions utilitaires pour extraire les valeurs numériques et traiter les entrées.

## Installation

1. Clonez ce dépôt :
   ```bash
   git clone https://github.com/votre-utilisateur/calculateur-calibration.git

2. Naviguez dans le répertoire du projet :
    ```bash
    cd calculateur-calibration

3. Lancez un serveur local :
  - **Avec `http-server` (Node.js)** :
     ```bash
     http-server
     ```

4. Ouvrez votre navigateur et accédez à `http://localhost:8000` ou `http://localhost:8080`.


## Utilisation

1. **Charger un fichier** :
   - Cliquez sur "Charger un fichier" et sélectionnez un fichier texte contenant les données.
   
2. **Coller du texte** :
   - Collez du texte dans la zone prévue à cet effet et cliquez sur "Traiter le texte".
   
3. **Visualiser les résultats** :
   - Les valeurs extraites et la somme totale s'afficheront sous forme de tableau.

## Développement

### Prérequis

- Un navigateur moderne (Google Chrome, Firefox, etc.).
- Un éditeur de texte (Visual Studio Code, Sublime Text, etc.).
- Node.js pour `http-server`.