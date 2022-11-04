from flask import Flask
from flask_restful import Api, Resource
from flask_cors import CORS
import json
  
app =   Flask(__name__)
CORS(app) # Potential security risk? Not sure what this is doing, but necessary for localhost
api =   Api(app)
  
class returnjson(Resource):
    def get(self):
        data={"members": ["Member1", "Member2", "Member3"]}
        return data

class returnPieChart(Resource):
    def get(self):
        data = ({
            'animationEnabled': 'true',
            'exportEnabled': 'true',
            'theme': "dark2",
            'title': {
                'text': "Title"
            },
            'data': [{
                'type': "pie",
                'indexLabel': "{label}: {y}%",
                'startAngle': -90,
                'dataPoints': [
                    { 'y': 70, 'label': "Label 1"},
                    { 'y': 30, 'label': "Label 2"}
                ]
            }]
        })
        return data
        
api.add_resource(returnjson,'/')
api.add_resource(returnPieChart, '/pie')
  
if __name__=='__main__':
    app.run(debug=True)