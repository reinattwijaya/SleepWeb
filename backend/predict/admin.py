from django.contrib import admin
from .models import Predict

class PredictAdmin(admin.ModelAdmin):
    readonly_fields: ('id')

admin.site.register(Predict, PredictAdmin)