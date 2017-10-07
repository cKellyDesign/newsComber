from flask import Flask, send_from_directory
from flask import render_template

app = Flask(__name__)
app.debug = True

# Define app routes
@app.route('/')
def send_index():
  return render_template('index.html')



# Define routes for static files
@app.route('/css/<path:path>')
def send_css(path):
  return send_from_directory('css', path)

@app.route('/js/<path:path>')
def send_js(path):
  return send_from_directory('js', path)

# Run the server
if __name__ == '__main__':
  app.run()
