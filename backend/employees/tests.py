from django.test import TestCase
from .serializers import EmployeeSerializer
from .models import Employee
from rest_framework.test import APITestCase, APIRequestFactory
from django.test.client import RequestFactory
from django.urls import reverse
from rest_framework import status
from .views import EmployeesAPIViewset
import json


class EmployeeViewTestCase(TestCase):
    def setUp(self):
        # Setup data for tests
        
        self.employee_data = {
            'name': "TestName",
            'surname': "TestSurname",
            'profession': "Developer",
            'age': 22,
            'image': None,
        }
        
        self.test_employee_data = {
            'name': "TestName2",
            'surname': "TestSurname2",
            'profession': "Developer",
            'age': 25,
            #'image': "",
        }
        
        self.test_employee = Employee.objects.create(**self.test_employee_data)
        self.employees_url = "/employees/"
        self.view_class = EmployeesAPIViewset
        self.client = RequestFactory()

    def test_employee_get_detail(self):
        """
        Testing get single employee instance.
        """
        employee = Employee.objects.get(pk=self.test_employee.pk)

        request = self.client.get(self.employees_url)
        response = self.view_class.as_view({'get':'retrieve'})(request, pk=employee.pk)

        self.assertEqual(response.status_code, 200)

    def test_employee_create(self):
        """
        Testing creation of a new employee.
        """
        request = self.client.post(self.employees_url, data=self.employee_data, format='json')
        response = self.view_class.as_view({'post':'create'})(request)

        self.assertEqual(response.status_code, 201)

    def test_employee_delete(self):
        """
        Testing deletion employee request.
        """
        employee = Employee.objects.get(pk=self.test_employee.pk)
        delete_request = self.client.delete(self.employees_url)
        response = self.view_class.as_view({'delete':'destroy'})(delete_request, pk=employee.pk)

        self.assertEqual(response.status_code, 200)

        get_request = self.client.get(self.employees_url)
        get_response = self.view_class.as_view({'get':'retrieve'})(get_request, pk=employee.pk)
        
        self.assertEqual(get_response.status_code, 404)

    def test_employee_list_get(self):
        """
        Testing employees list get request.
        """

        get_request = self.client.get(self.employees_url)
        get_response = self.view_class.as_view({'get':'list'})(get_request)

        self.assertEqual(get_response.status_code, 200)