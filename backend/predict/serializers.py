from rest_framework import serializers
from .models import Predict

class PredictSerializer(serializers.ModelSerializer):
    class Meta:
        model = Predict
        fields = ('id', 'name', 'sex', 'age', 'BMI', 'PSG_C6', 'ISI1a', 'ISI1b', 'ISI1c')