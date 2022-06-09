from django.urls import path, include
from .views import InsomniaPrediction, OSAPrediction, COMISAPrediction, PredictView
from rest_framework import routers

router = routers.DefaultRouter()
router.register(r'predict', PredictView, 'predict')

urlpatterns = [
    path('insomnia/', InsomniaPrediction.as_view() , name = 'insomnia_prediction'),
    path('osa/', OSAPrediction.as_view(), name= 'osa_prediction'),
    path('comisa/', COMISAPrediction.as_view(), name='comisa_prediction'),
    path('upload/', include(router.urls))
]