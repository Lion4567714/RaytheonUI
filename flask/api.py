from flask import Flask, request
from flask_cors import CORS
  
app = Flask(__name__)
CORS(app) # Potential security risk? Not sure what this is doing, but necessary for localhost
  
@app.route('/', methods=['GET', 'POST'])
def home():
    if request.method == 'GET':
        data={"members": ["Member1", "Member2", "Member3"]}
        print('GET request received!')
        return data
    elif request.method == 'POST':
        print('POST request received!')

        content_type = request.headers.get('Content-Type')
        if (content_type != 'application/json'):
            print('Content-Type not supported!')
            return 'Content-Type not supported!'

        input = request.get_json()
        print(input)

        # The backend has reveived a POST request from the frontend
        # The POST request will follow up with a response saying the request was successful (it reached the intended target)
        # Now, we need to prepare some follow-up data in the backend
        # The idea is to send yet another GET request to fetch some other data to update the website with
        # But before the POST request, we need to tell the frontend we are not ready yet (a POST request was not received yet)

        return "POST request successful!"

@app.route('/pie')
def pie():
        data = ({
            'animationEnabled': 'true',
            'exportEnabled': 'true',
            'theme': "dark2",
            'title': {
                'text': "Title"
            },
            'data': [{
                'type': "line",
                'indexLabel': "{label}: {y}%",
                'startAngle': -90,
                'dataPoints': [
                    { 'y': 70, 'label': "Label 1"},
                    { 'y': 30, 'label': "Label 2"}
                ]
            }]
        })
        return data

if __name__=='__main__':
    app.run(debug=True)
