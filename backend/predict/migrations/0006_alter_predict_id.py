# Generated by Django 4.0.5 on 2022-07-06 06:25

from django.db import migrations, models
import uuid


class Migration(migrations.Migration):

    dependencies = [
        ('predict', '0005_alter_predict_bmi_alter_predict_isi1a_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='predict',
            name='id',
            field=models.UUIDField(default=uuid.uuid4, editable=False, primary_key=True, serialize=False),
        ),
    ]
