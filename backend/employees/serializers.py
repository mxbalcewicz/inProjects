from rest_framework import serializers
from .models import Employee

class EmployeeSerializer(serializers.ModelSerializer):
    image = serializers.ImageField(max_length=None, use_url=True, required=False)

    class Meta:
        model = Employee
        fields = ['id', 'name', 'surname', 'profession', 'age', 'image']

# class EmployeeAverageReportSerializer(serializers.Serializer):
#     average_age = serializers.SerializerMethodField(method_name='calculate_average_age')

#     def calculate_average_age(self, obj):
#         return Employee.objects.all().aggregate(Avg('age'))