# Generated by Django 3.1.7 on 2022-02-04 21:30

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Employee',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('profession', models.CharField(max_length=30)),
                ('name', models.CharField(max_length=20)),
                ('surname', models.CharField(max_length=30)),
                ('age', models.IntegerField()),
                ('photo', models.ImageField(upload_to='')),
            ],
        ),
    ]
