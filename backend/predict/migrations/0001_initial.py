# Generated by Django 3.1 on 2022-06-08 16:52

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Predict',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=200)),
                ('sex', models.CharField(max_length=200)),
                ('age', models.PositiveIntegerField(max_length=200)),
                ('height', models.PositiveIntegerField(max_length=1000)),
                ('weight', models.PositiveIntegerField(max_length=1000)),
                ('abdomen_circumference', models.PositiveIntegerField(max_length=1000)),
                ('hip_circumference', models.PositiveIntegerField(max_length=1000)),
                ('PSG_C6', models.IntegerField(max_length=10)),
                ('ISI1a', models.IntegerField(max_length=10)),
                ('ISI1b', models.IntegerField(max_length=10)),
                ('ISI1c', models.IntegerField(max_length=10)),
            ],
        ),
    ]
