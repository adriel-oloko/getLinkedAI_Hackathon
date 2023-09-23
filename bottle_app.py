
# A very simple Bottle Hello World app for you to get started with...
from bottle import default_app, route, static_file


@route('/')
def hello_world():
    return static_file('index.html', root="/home/adgetlinked/mysite/")


@route('/contact')
def contact():
    return static_file('contact.html', root="/home/adgetlinked/mysite/")


@route('/register')
def register():
    return static_file('register.html', root="/home/adgetlinked/mysite/")


application = default_app()
