# HRNet React

HRNet est une application web de gestion des employés qui permet aux utilisateurs de créer, consulter et gérer des fiches d'employés. Cette application a été initialement développée avec jQuery et a été refactorisée en ReactJS pour réduire la dette technique et améliorer la maintenabilité.

<h2>Fonctionnalités</h2>
<ul>
<li>Créer de nouveaux dossiers d'employés</li>
<li>Consulter une liste des employés actuels</li>
<li>Intégration avec Redux pour la gestion de l'état</li>
<li>Interface utilisateur moderne et réactive construite avec React</li>
</ul>

<h2>Installation</h2>
Prérequis</br>
Node.js >= 14.0.0
npm >= 6.0.0 ou yarn
<h2>Étapes d'Installation</h2>
<h2>Cloner le dépôt :</h3>

```
git clone https://github.com/your-repo/hrnet-app.git
```
Naviguer vers le dossier du projet :


```
cd hrnet-app
```
Installer les dépendances :

```
npm install
```
Lancer l'application :

```
npm start
```
L'application devrait maintenant fonctionner sur http://localhost:3000.

<h2>Utilisation</h2>
<ul>
<li>Pour créer un nouvel employé, allez sur la page "Créer un Employé" et remplissez le formulaire.</li>
<li>Pour consulter la liste des employés, allez sur la page "Employés Actuels".</li>
<li>L'application gère les données des employés via Redux, garantissant une gestion efficace de l'état.</li>
</ul>
<h2>Technologies Utilisées</h2>
<ul>
<li>ReactJS pour l'interface utilisateur</li>
<li>Redux pour la gestion de l'état</li>
<li>React Router pour la navigation entre les pages</li>
<li>Composants React personnalisés pour remplacer les anciens plugins jQuery</li>
<li>CSS pour le style</li>
</ul>
<h2>Remplacement des Plugins jQuery</h2>
Dans la version originale de HRNet, plusieurs plugins jQuery étaient utilisés pour les éléments interactifs tels que les modals, les sélecteurs de date et les tableaux. Dans cette version en React, ces plugins ont été remplacés par des composants React personnalisés, améliorant ainsi les performances et la maintenabilité de l'application.

<h3>Remplacement du Modal</h3>
Vous pouvez télécharger le plugin ici :</br>
https://www.npmjs.com/package/react-auto-close-modal
<ul>
<li>Plugin jQuery Original : Un modal basé sur jQuery était utilisé pour les dialogues et les alertes.</li>
<li>Remplacement en React : Nous avons créé le composant AutoCloseModal en React pour gérer les fonctionnalités du modal, y compris la fermeture automatique.</li>
</ul>
<h3>Remplacement du Sélecteur de Date</h3>
<ul>
<li>Plugin jQuery Original : Un sélecteur de date jQuery était utilisé pour choisir des dates.</li>
<li>Remplacement en React : Nous avons remplacé cela par un composant React DatePicker personnalisé offrant des fonctionnalités similaires sans dépendre de jQuery.</li>
</ul>
<h3>Remplacement du Plugin de Table</h3>
<ul>
<li>Plugin jQuery Original : Un plugin jQuery était utilisé pour afficher et filtrer les données des employés dans un tableau.</li>
<li>Remplacement en React : Le composant EmployeeTable a été construit avec React pour afficher les données des employés, avec des fonctionnalités de tri et de filtrage intégrées directement dans le composant.</li>
</ul>

<h2>ENGLISH</h2>
HRNet is an employee management web application that allows users to create, view, and manage employee records. This application was originally built using jQuery and has been refactored into ReactJS to reduce technical debt and improve maintainability.

<h2>Features</h2>
<ul>
<li>Create new employee records</li>
<li>View a list of current employees</li>
<li>Integrated with Redux for state management</li>
<li>Responsive and modern user interface built with React</li>
</ul>

<h2>Installation</h2>
Prerequisites</br>
Node.js >= 14.0.0
npm >= 6.0.0 or yarn
<h2>Steps to Install</h2>
<h3>Clone the Repository</h3>
```
git clone https://github.com/your-repo/hrnet-app.git
```
Navigate to the project folder:

```
cd hrnet-app
```
Install dependencies:

```
npm install
```
Run the application:

```
npm start
```
The application should now be running on http://localhost:3000.

<h2>Usage</h2>
<ul>
<li>To create a new employee, navigate to the "Create Employee" page and fill out the form.</li>
<li>To view the list of employees, navigate to the "Current Employees" page.</li>
<li>The application maintains the employee data using Redux, ensuring efficient state management.</li>
</ul>
<h2>Technology Stack</h2>
<ul>
<li>ReactJS for the user interface</li>
<li>Redux for state management</li>
<li>React Router for navigation between pages</li>
<li>Custom React components to replace legacy jQuery plugins</li>
<li>CSS for styling</li>
</ul>
<h2>Replaced jQuery Plugins</h2>
In the original version of HRNet, several jQuery plugins were used for interactive elements like modals, date pickers, and tables. In this React version, these plugins have been replaced by custom React components, improving the performance and maintainability of the application.

<h3>Modal Plugin Replacement</h3>
You can download the plugin here :</br>
https://www.npmjs.com/package/react-auto-close-modal
<ul>
<li>Original jQuery Plugin: A jQuery-based modal was used for dialogs and alerts.</li>
<li>Replacement in React: We created the AutoCloseModal component using React to handle modal functionality, including auto-closing behavior.</li>
</ul>
<h3>Date Picker Replacement</h3>
<ul>
<li>Original jQuery Plugin: A jQuery date picker was used for selecting dates.</li>
<li>Replacement in React: We replaced this with a custom React DatePicker component that provides similar functionality without relying on jQuery.</li>
</ul>
<h3>Table Plugin Replacement</h3>
<ul>
<li>Original jQuery Plugin: A jQuery plugin was used to display and filter employee data in a table.</li>
<li>Replacement in React: The EmployeeTable component was built using React to display employee data, with sorting and filtering functionalities integrated natively in the component.</li>
</ul>
