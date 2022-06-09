import os
import numpy as np
import joblib
import pickle
from django.apps import AppConfig
from django.conf import settings


class PredictConfig(AppConfig):
    name = 'predict'
    MODEL_FILE_INSOMNIA = os.path.join(settings.MODELS, "xgb_Insomnia_v2.pkl")
    MODEL_FILE_OSA = os.path.join(settings.MODELS, "xgb_OSA_v2.pkl")
    MODEL_FILE_COMISA = os.path.join(settings.MODELS, "xgb_COMISA_v3.pkl")
    with open(MODEL_FILE_INSOMNIA, 'rb') as f:
        model_insomnia = pickle.load(f)
    with open(MODEL_FILE_OSA, 'rb') as f:
        model_osa = pickle.load(f)
    with open(MODEL_FILE_COMISA, 'rb') as f:
        model_comisa = pickle.load(f)