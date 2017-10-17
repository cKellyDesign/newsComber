from flask import Flask, request, jsonify
from flask_cors import CORS
import requests

app = Flask(__name__)
app.debug = True
CORS(app)

# Define app routes
@app.route('/')
def send_index():
  return '<h1>hello world</h1>'

@app.route('/sites', methods=['GET', 'POST'])
def sites():
  baseurl = request.args.get('baseurl', type=str)
  # print('~~~~~~~~~~~ baseurl %r' % baseurl)
  # queryURL = 'http://localhost:5001/%r' % baseurl
  if request.method == 'POST':
    queryURL = 'http://localhost:5001/addSite/%r' % baseurl
    r = requests.post(queryURL)
  else:
    queryURL = 'http://localhost:5001/getSite/%r' % baseurl
    r = requests.get(queryURL)

  # print('~~~~~~~~~~~ r.baseurl %r' % r.baseurl)
  return jsonify(res=r.baseurl)

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
