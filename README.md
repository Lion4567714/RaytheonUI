# Raytheon UI

### Directories 

- [Flask](/flask) contains the backend component using Flask in Python.
- [react-ts](/react-ts) contains the frontend component using React in TypeScript (please use this instead of the JavaScript version!).
- (DEPRECATED) [react-app](/react-app) contains the frontend component using React in JavaScript.
- [graphs-n-stuff](/graphs-n-stuff) has other Python scripts for generating plots using Pandas.

## Backend (Flask)

### How to Run

* **Note**: the following assumes you are using a Linux (specfically Ubuntu Linux) to run this code.
  - If you are not using Ubuntu Linux, God help you (or just ask :^) )

1. `cd flask`
2. `python3 api.py`

### How to Add New Charts

In [api.py](/flask/api.py), copy and paste a preexisting class under the existing classes. Then you may rename the new class and swap in your own chart data.

Towards the end of the file, make sure to add the new chart like so: `api.add_resource(my_new_chart_class, '/my_new_chart')`. This will add your chart as a new route. See **How to View New Charts** for further instructions.

## Frontend (React)

### How to Run

* **Note**: the following assumes you are using a Linux (specfically Ubuntu Linux) to run this code. 
  - If you are not using Ubuntu Linux, God help you (or just ask :^) )

* First, check to see if you have `npm` (**n**ode **p**ackage **m**anager) installed with `npm --version`.
  - If not installed, first use `sudo apt install npm`.

1. `cd react-app`
2. `npm start`

### How to View New Charts

After you have already added your new chart, you may change the URL in [Chart.tsx](/react-ts/src/resources/Chart.tsx) to point to your new chart on the backend server. 
