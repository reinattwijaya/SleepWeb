from django.urls import path
from .views import InsomniaPrediction, OSAPrediction, COMISAPrediction, PredictView


urlpatterns = [
    path('insomnia/', InsomniaPrediction.as_view() , name = 'insomnia_prediction'),
    path('osa/', OSAPrediction.as_view(), name= 'osa_prediction'),
    path('comisa/', COMISAPrediction.as_view(), name='comisa_prediction'),
    path('upload/', PredictView.as_view(), name='upload')
]