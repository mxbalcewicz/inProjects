from rest_framework import viewsets
from .serializers import EmployeeSerializer
from .models import Employee
from rest_framework.response import Response
from rest_framework import status
from rest_framework import views
import json
from django.http import HttpResponse
from django.db.models import Avg

class EmployeesAPIViewset(viewsets.ModelViewSet):
    serializer_class = EmployeeSerializer
    queryset = Employee.objects.all()

    def destroy(self, *args, **kwargs):
        serializer = self.get_serializer(self.get_object())
        super().destroy(*args, **kwargs)
        return Response(serializer.data, status=status.HTTP_200_OK)


class EmployeesReportAPIView(views.APIView):
    
    def get(self, request):
        avg = Employee.objects.all().aggregate(Avg('age'))
        
        response = HttpResponse(content_type='text/json')
        response['Content-Disposition'] = 'attachment; filename="Employees_report.json"'
        data = json.dumps(avg)
        response.write(data)
        return response