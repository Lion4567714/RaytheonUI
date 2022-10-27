# Run using 'flask --app readJson run'

from flask import Flask, request, jsonify
import json

app = Flask(__name__)

@app.route('/', methods=['GET', 'POST'])
def index():
  if request.method == 'GET':
    #value = request.json['array'][2] #'array' is from json file
    #result = 'result'
    #return jsonify ({"key" : result})

    # TODO: Returns data in reverse order. May or may not be a problem
    data = open('./data.json')
    return json.load(data)

  else:
    return 'recieved POST request'

if __name__== 'main':
  app.run(debug=True)
