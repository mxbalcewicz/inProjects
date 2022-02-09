from .views import EmployeesAPIViewset, EmployeesReportAPIView
from rest_framework.routers import DefaultRouter
from django.urls import path, include

router = DefaultRouter()
router.register(r'employees', EmployeesAPIViewset, basename='employees')


urlpatterns = [
    path('', include(router.urls)),
    path('report/', EmployeesReportAPIView.as_view(), name='avg_age_report')
]