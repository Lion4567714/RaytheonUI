# Raytheon UI

### Directories 

- [Flask](/flask) contains the backend component using Flask in Python.
- [react-app](/react-app) contains the frontend component using React in JavaScript (and maybe TypeScript?).
- [graphs-n-stuff](/graphs-n-stuff) has other Python scripts for generating plots using Pandas.

## Backend (Flask)

### How to Run

* **Note**: the following assumes you are using a Linux (specfically Ubuntu Linux) to run this code.
  - If you are not using Ubuntu Linux, God help you (or just ask :^) )

1. `cd flask`
2. `python3 api.py`

## Frontend (React)

### How to Run

* **Note**: the following assumes you are using a Linux (specfically Ubuntu Linux) to run this code. 
  - If you are not using Ubuntu Linux, God help you (or just ask :^) )

* First, check to see if you have `npm` (**n**ode **p**ackage **m**anager) installed with `npm --version`.
  - If not installed, first use `sudo apt install npm`.

1. `cd react-app`
2. `npm start`

### (Temporary) Changing between Connecting to Flask and Graphs

To change between connecting to localhost and graphing, simply open [index.js](/react-app/src/index.js), and swap the commented line between lines 10 and 11.
