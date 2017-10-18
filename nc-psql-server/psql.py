from flask import Flask
from flask_sqlalchemy import SQLAlchemy
import requests
from flask_cors import CORS

app = Flask(__name__)
app.debug = True
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://localhost/newscomb'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = True
CORS(app)

db = SQLAlchemy(app)

class Site(db.Model):
  __tablename__ = "sites"
  id = db.Column(db.Integer, primary_key=True)
  baseurl = db.Column(db.String(120), unique=True)

  def __init__(self, baseurl):
    self.baseurl = baseurl

  def __repr__(self):
    return '<Base URL %r>' % self.baseurl



@app.route('/')
def testdb():
  # try:
  q = Site.query.all()
  return q[0].baseurl
  # return {text:'Hello'}
  # except:
  #   return '<h1>Something is broken.</h1>'

@app.route('/addSite/<url>', methods=['POST'])
def addSite(url):
  doesExist = Site.query.filter_by(baseurl=url).count()
  if doesExist == 0:
    site = Site(baseurl=url)
    db.session.add(site)
    db.session.commit()
    newSite = Site.query.filter_by(baseurl=url).first()
    return newSite.baseurl
  else:
    return 'site already exists : {}'.format(url)



@app.route('/getSite/<url>', methods=['GET'])
def getSite(url):
  baseurl = url
  doesExist = Site.query.filter_by(baseurl=baseurl).count()
  if doesExist != 0:
    site = Site.query.filter_by(baseurl=baseurl).first()
    return site.baseurl
  else: 
    return 'Url Does Not Exist'



if __name__ == '__main__':
  app.run(port=5001)
