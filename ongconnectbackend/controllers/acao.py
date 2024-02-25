# IMPORTS
from flask import request, jsonify, Blueprint
from utils import db
from models import Acao, Atuacao

# CONFIGS
bp_acao = Blueprint("acao", __name__)

# ROTAS

# GET
@bp_acao.route('/<int:id>', methods=['GET'])
def get(id):
  acao = Acao.query.get(id)
  atuacao = Atuacao.query.filter_by(id_acao = acao.id).first()
  
  if acao:
    data = {
      'id': acao.id,
      'id_ong': acao.id_ong,
      'id_volut': acao.id_volut,
      'tipo': acao.tipo,
      'id_atuacao': atuacao.id,
      'area': atuacao.area
    }

    response = {
      'status': 'success',
      'data': data,
    }

    return jsonify(response), 200
    
  else:
    response = {
      'message': 'Açao nao encontrada :('
    }

    return jsonify(response), 404

# CREATE
@bp_acao.route('/cadastro', methods=['POST'])
def create():
  id_ong = request.get_json().get('id_ong')
  id_volut = request.get_json().get('id_volut')
  tipo = request.get_json().get('tipo') 
  area = request.get_json().get('area')
  new_acao = Acao(id_ong, id_volut, tipo)
  db.session.add(new_acao)
  db.session.commit()
  new_atuacao = Atuacao(new_acao.id, area)
  db.session.add(new_atuacao)
  db.session.commit()

  response = {
    'status': 'success',
    'message': 'Acao realizada!',
  }

  return jsonify(response), 200