import sys
import json

def send(name='message',payload=None):
    print json.dumps({'name':name,'payload':payload})
    sys.stdout.flush()

def startListening():
    send('ready')
    for line in iter(sys.stdin.readline, ''):
        message = json.loads(line)
        onMessage(message['name'],message['payload'] if ('payload' in message) else None)

def onMessage(name,payload):
    send('pong',payload)

startListening()


