from flask import Flask
from flask_restful import Api, Resource
from flask_cors import CORS
  
app =   Flask(__name__)
CORS(app)
api =   Api(app)
  
class returnjson(Resource):
    def get(self):
        data={"members": ["Member1", "Member2", "Member3"]}
        return data
  
api.add_resource(returnjson,'/')
  
  
if __name__=='__main__':
    app.run(debug=True)