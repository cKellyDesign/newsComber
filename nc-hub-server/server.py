from flask import Flask, request, jsonify
from flask_cors import CORS
import requests

app = Flask(__name__)
app.debug = True
CORS(app)

# Define app routes
@app.route('/')
def send_index():
  r = requests.get('http://localhost:5001/')
  return jsonify(baseurl=r.text)
  # return r.text

@app.route('/sites', methods=['GET', 'POST'])
def sites():
  baseurl = request.values.get('baseurl')
  if request.method == 'POST':
    queryURL = 'http://localhost:5001/addSite/%r' % baseurl
    r = requests.post(queryURL)
  else:
    queryURL = 'http://localhost:5001/getSite/%r' % baseurl
    r = requests.get(queryURL)
  return jsonify(baseurl=r.text)

# @app.route('/start/', methods=['POST'])
# def get_taxonomy():
#   return request.form


# Define routes for static files
# @app.route('/css/<path:path>')
# def send_css(path):
#   return send_from_directory('css', path)

# @app.route('/js/<path:path>')
# def send_js(path):
#   return send_from_directory('js', path)

# Run the server
if __name__ == '__main__':
  app.run(port=5000)
