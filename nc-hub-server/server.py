from flask import Flask, request, jsonify

import requests

app = Flask(__name__)
app.debug = True

# Define app routes
@app.route('/')
def send_index():
  return '<h1>hello world</h1>'

@app.route('/sites', methods=['GET', 'POST'])
def sites():
  baseurl = request.args.get('baseurl', type=str)
  queryURL = 'http://localhost:5001/%r' % baseurl
  if request.method == 'POST':
    r = requests.post(queryURL)
  else:
    r = requests.get(queryURL)
  return jsonify(res=r)

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
