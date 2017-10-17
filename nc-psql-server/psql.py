from flask import Flask
from flask_sqlalchemy import SQLAlchemy
import requests

app = Flask(__name__)
app.debug = True
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://localhost/newscomb'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = True

db = SQLAlchemy(app)


class Site(db.Model):
  __tablename__ = "sites"
  id = db.Column(db.Integer, primary_key=True)
  baseurl = db.Column(db.String(120), unique=True)

  def __init__(self, baseurl):
    self.baseurl = baseurl

  def __repr__(self):
    return '<Base URL %r>' % self.baseurl



# @app.route('/')
# def testdb():
#   try:
#     q = db.session.query(Site)
#     return q 
#   except:
#     return '<h1>Something is broken.</h1>'

@app.route('/addSite/<url>', methods=['POST'])
def addSite():
  baseurl = url
  doesExist = Site.query.filter_by(baseurl=baseurl).count()
  if doesExist == 0:
    site = Site(baseurl=baseurl)
    db.session.add(site)
    db.session.commit()
  return Site.query.filter_by(baseurl=baseurl).first()



@app.route('/getSite/<url>', methods=['GET'])
def getSite():
  baseurl = url
  doesExist = Site.query.filter_by(baseurl=baseurl).count()
  if doesExist != 0:
    return Site.query.filter_by(baseurl=baseurl).first()
  else: 
    return False



if __name__ == '__main__':
  app.run(port=5001)
