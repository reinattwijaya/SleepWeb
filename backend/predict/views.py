import numpy as np
import pandas as pd
from .apps import PredictConfig
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import viewsets
from .serializers import PredictSerializer
from .models import Predict

class PredictView(APIView):
    def get(self, request, format=None):
        predict = Predict.objects.all()
        serializer = PredictSerializer(predict, many=True)
        return Response(serializer.data)
    
    def post(self, request):
        serializer = PredictSerializer(data = request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=200)
        return Response(serializer.errors, status=400)

class InsomniaPrediction(APIView):
    def post(self, request):
        data = request.data
        model = PredictConfig.model_insomnia
        insomnia_data = {
            "ISI1a": [int(data["ISI1a"])],
            "ISI1b": [int(data["ISI1b"])],
            "sex": [int(data["sex"])],
            "age": [int(data["age"])],
            "BMI": [float(data["BMI"])]
        }
        
        #convert to panda dataframe
        df = pd.DataFrame(insomnia_data)

        pred = model.predict(df).reshape(-1)
        pred_percentage = model.predict_proba(df).reshape(-1)
        return Response({'is_insomnia': pred, 'insomnia_probability':pred_percentage}, status=200) 

class OSAPrediction(APIView):
    def post(self, request):
        data = request.data
        model = PredictConfig.model_osa
        osa_data = {
            "PSQI_C6": [int(data["PSG_C6"])],
            "sex": [int(data["sex"])],
            "age": [int(data["age"])],
            "BMI": [float(data["BMI"])]

        }
        
        #convert to panda dataframe
        df = pd.DataFrame(osa_data)

        pred = model.predict(df).reshape(-1)
        pred_percentage = model.predict_proba(df).reshape(-1)
        return Response({'is_osa': pred, 'osa_probability':pred_percentage}, status=200) 

class COMISAPrediction(APIView):
    def post(self, request):
        data = request.data
        model = PredictConfig.model_comisa
        comisa_data = {
            "ISI1b": [int(data["ISI1b"])],
            "ISI1c": [int(data["ISI1c"])],
            "sex": [int(data["sex"])],
            "age": [int(data["age"])],
            "BMI": [float(data["BMI"])]

        }
        
        #convert to panda dataframe
        df = pd.DataFrame(comisa_data)

        pred = model.predict(df).reshape(-1)
        pred_percentage = model.predict_proba(df).reshape(-1)
        return Response({'is_comisa': pred, 'comisa_probability':pred_percentage}, status=200) 