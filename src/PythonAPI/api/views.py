import bson

from flask import current_app, g, Blueprint, jsonify, request
from werkzeug.local import LocalProxy
from flask_pymongo import PyMongo
from bson.json_util import dumps
from .DWX_ZeroMQ_Connector_v2_0_1_RC8 import DWX_ZeroMQ_Connector

_zmq = DWX_ZeroMQ_Connector()



def get_db():
    """
    Configuration method to return db instance
    """
    db = getattr(g, "_database", None)

    if db is None:

        db = g._database = PyMongo(current_app).db #this is bind mongoDB cammand like insert, delete, create collection(s) record and more to variable db
       
    return db


# Use LocalProxy to read the global db instance with just `db`
db = LocalProxy(get_db)

main = Blueprint('main', __name__)

@main.route('/movie')
def movie():
    cursor = db.movie.find()

    #convert "CURSOR" type that we have after request to mongoDB to a list so we can return and display them correctly
    list_cursor = list(cursor)
    json_data = dumps(list_cursor)

    return json_data


@main.route('/forexTest')
def forexTest():
    cursor = db.forexExample.find({"symbol": "EURUSD"})

        #convert "CURSOR" type that we have after request to mongoDB to a list so we can return and display them correctly
    list_cursor = list(cursor)
    json_data = dumps(list_cursor)

    return json_data

@main.route('/forexQuelyTest')
def forexQuelyTest():
    cursor = db.forexDB.find({"symbol": "EURUSD"}, {"symbol":1,"_id":0})
    
    #convert "CURSOR" type that we have after request to mongoDB to a list so we can return and display them correctly
    list_cursor = list(cursor)
    json_data = dumps(list_cursor)

    return json_data
    
@main.route('/pyzmq_test')
def pyzmq_test():
    _zmq._DWX_MTX_SUBSCRIBE_MARKETDATA_('EURUSD')
    _zmq._DWX_MTX_SEND_TRACKPRICES_REQUEST_(['EURUSD'])
    #_zmq._DWX_MTX_UNSUBSCRIBE_MARKETDATA_('EURUSD')
    #print(_zmq._thread_data_output)
    #print(_zmq._get_response_())
    print(_zmq._Market_Data_DB)
    return jsonify(_zmq._generate_default_order_dict())
