from django.db import models

class Predict(models.Model):
    name = models.CharField(max_length=200)
    sex = models.IntegerField(default=0)
    age = models.PositiveIntegerField(default=0)
    BMI = models.DecimalField(decimal_places=2, max_digits=10, default=0.0)
    PSG_C6 = models.IntegerField(default=0)
    ISI1a = models.IntegerField(default=0)
    ISI1b = models.IntegerField(default=0)
    ISI1c = models.IntegerField(default=0)