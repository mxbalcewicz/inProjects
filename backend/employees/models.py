from django.db import models
from django.core.validators import MinValueValidator, MaxValueValidator

class Employee(models.Model):
    profession = models.CharField(max_length=30)
    name = models.CharField(max_length=20)
    surname = models.CharField(max_length=30)
    age = models.IntegerField(validators=[
        MinValueValidator(18),
        MaxValueValidator(100)])
    image = models.ImageField(
        height_field=None, width_field=None, max_length=100, blank=True, null=True)

    def __str__(self):
        return f'Id:{self.id}  Name:{self.name}  Surname:{self.surname}  Profession:{self.surname}  Age:{self.surname}'